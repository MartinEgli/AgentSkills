import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const excludedRepos = new Set(["caveman-skill"]);
const templateRepos = new Set(["single-skill-template"]);

const requiredSections = [
  "Purpose",
  "When to Use",
  "Do Not Use When",
  "Mandatory Rules",
  "Inputs Expected",
  "Modes",
  "Evidence Handling",
  "Output Contracts",
  "Quality Gates",
  "Boundaries",
  "Output Style"
];

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function exists(file) {
  return fs.existsSync(file);
}

function walk(dir) {
  if (!exists(dir)) {
    return [];
  }
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return {};
  }
  const body = match[1];
  const name = body.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const descriptionBlock = body.match(/^description:\s*>\s*\r?\n([\s\S]*)$/m);
  let description = body.match(/^description:\s*(.+)$/m)?.[1]?.trim() || "";
  if (descriptionBlock) {
    description = descriptionBlock[1]
      .split(/\r?\n/)
      .filter((line) => line.startsWith("  "))
      .map((line) => line.trim())
      .join(" ")
      .trim();
  }
  return { name, description };
}

function markdownLinks(content) {
  const links = [];
  const pattern = /\[[^\]]+\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g;
  for (const match of content.matchAll(pattern)) {
    links.push(match[1].split("#")[0]);
  }
  return links.filter(Boolean);
}

function scoreSkill(repo, skillDir) {
  const skillName = path.basename(skillDir);
  const skillFile = path.join(skillDir, "SKILL.md");
  const content = read(skillFile);
  const fm = parseFrontmatter(content);
  const repoRoot = path.join(root, repo);
  const allText = walk(skillDir)
    .filter((file) => /\.(md|yaml|yml|json|mjs)$/i.test(file))
    .map((file) => read(file))
    .join("\n");

  const checks = [];
  const add = (name, points, max, detail) => checks.push({ name, points, max, detail });

  const sectionHits = requiredSections.filter((section) =>
    new RegExp(`^## ${section}\\s*$`, "m").test(content)
  );
  add(
    "contract sections",
    Math.round((sectionHits.length / requiredSections.length) * 20),
    20,
    `${sectionHits.length}/${requiredSections.length} required sections`
  );

  let trigger = 0;
  if (fm.name === skillName) trigger += 4;
  if ((fm.description || "").length >= 120) trigger += 4;
  if (/use when|when|skill/i.test(fm.description || "")) trigger += 2;
  if (/Do Not Use When/.test(content)) trigger += 3;
  if (/Handoffs/.test(content) || /hand off|handoff/i.test(content)) trigger += 2;
  add("trigger and boundaries", trigger, 15, "frontmatter, do-not-use, and handoff clarity");

  let evidence = 0;
  if (/Evidence Handling/.test(content)) evidence += 4;
  if (exists(path.join(skillDir, "references", "evidence-traceability.md"))) evidence += 6;
  if (/Evidence Receipt/i.test(allText)) evidence += 4;
  if (/assumption/i.test(content) && /gap/i.test(content)) evidence += 3;
  if (/traceable|traceability/i.test(content)) evidence += 3;
  add("evidence and traceability", evidence, 20, "evidence file, receipt, assumptions, gaps");

  let resources = 0;
  if (exists(path.join(skillDir, "agents", "openai.yaml"))) resources += 4;
  const linked = markdownLinks(content);
  const broken = linked.filter((link) => !exists(path.resolve(path.dirname(skillFile), link)));
  if (broken.length === 0) resources += 4;
  const references = walk(path.join(skillDir, "references")).filter((file) => file.endsWith(".md"));
  if (references.length > 0) resources += 3;
  const assets = walk(path.join(skillDir, "assets"));
  if (assets.length > 0) resources += 2;
  if (exists(path.join(repoRoot, "package.json"))) resources += 2;
  add("resource integrity", resources, 15, broken.length ? `broken links: ${broken.join(", ")}` : "links and resources present");

  const modeMatches = [...content.matchAll(/^###\s+\/[^\r\n]+/gm)];
  let modes = Math.min(modeMatches.length, 5) * 2;
  if (/Read `references\//.test(content)) modes += 3;
  if (/Quality Gates/.test(content)) modes += 2;
  add("mode actionability", modes, 15, `${modeMatches.length} slash modes`);

  let scope = 0;
  if (/mournival-architecture/.test(content) || skillName === "mournival-architecture") scope += 3;
  if (/enterprise-architecture|solution-architecture|software-architecture|domain-driven-design|azure-architecture|dotnet-engineering|enterprise-security-architecture|skill-author/.test(content)) scope += 4;
  const mentionsDiagram = /diagram/i.test(content);
  if (!mentionsDiagram || exists(path.join(skillDir, "references", "diagrams.md"))) scope += 4;
  if (/Do not invent|Do not claim|Do not replace/i.test(content)) scope += 2;
  if (/Output Style/.test(content)) scope += 2;
  add("scope, handoffs, and diagrams", scope, 15, mentionsDiagram ? "diagram scope checked" : "no diagram capability");

  const total = checks.reduce((sum, check) => sum + check.points, 0);
  const max = checks.reduce((sum, check) => sum + check.max, 0);
  const score = Math.round((total / max) * 100);

  const gaps = checks
    .filter((check) => check.points < check.max)
    .map((check) => `${check.name}: ${check.points}/${check.max} (${check.detail})`);

  return {
    repo,
    skillName,
    kind: templateRepos.has(repo) ? "template" : "realized",
    score,
    checks,
    gaps
  };
}

export function assessSkills() {
  const repos = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith("-skill") || name === "single-skill-template")
    .filter((name) => !excludedRepos.has(name))
    .sort();

  return repos.flatMap((repo) => {
    const skillsRoot = path.join(root, repo, "skills");
    return fs
      .readdirSync(skillsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => scoreSkill(repo, path.join(skillsRoot, entry.name)));
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const results = assessSkills();
  console.log("| Repo | Skill | Type | Score | Main Gaps |");
  console.log("| --- | --- | --- | ---: | --- |");
  for (const result of results) {
    const gaps = result.gaps.length === 0 ? "None" : result.gaps.slice(0, 2).join("; ");
    console.log(
      `| \`${result.repo}\` | \`${result.skillName}\` | ${result.kind} | ${result.score} | ${gaps.replaceAll("|", "\\|")} |`
    );
  }
}
