import assert from "node:assert/strict";
import test from "node:test";
import { assessSkills } from "../scripts/assess-skill-quality.mjs";

const results = assessSkills();
const realized = results.filter((result) => result.kind === "realized");
const template = results.filter((result) => result.kind === "template");

test("realized skills meet minimum quality score", () => {
  assert.ok(realized.length > 0, "expected realized skills to be discovered");
  for (const result of realized) {
    assert.ok(
      result.score >= 85,
      `${result.repo}/${result.skillName} scored ${result.score}; gaps: ${result.gaps.join("; ")}`
    );
  }
});

test("realized skills define evidence traceability", () => {
  for (const result of realized) {
    const evidence = result.checks.find((check) => check.name === "evidence and traceability");
    assert.ok(evidence.points >= 17, `${result.repo}/${result.skillName} weak evidence score`);
  }
});

test("realized skills have actionable modes and boundaries", () => {
  for (const result of realized) {
    const modes = result.checks.find((check) => check.name === "mode actionability");
    const boundaries = result.checks.find((check) => check.name === "trigger and boundaries");
    assert.ok(modes.points >= 12, `${result.repo}/${result.skillName} weak mode score`);
    assert.ok(boundaries.points >= 12, `${result.repo}/${result.skillName} weak boundary score`);
  }
});

test("template is assessed but not held to realized-skill metadata standard", () => {
  assert.equal(template.length, 1, "expected single-skill-template to be assessed separately");
  assert.ok(template[0].score >= 75, `template score too low: ${template[0].score}`);
});
