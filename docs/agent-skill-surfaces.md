# Agent Skill Surfaces

This document describes how AgentSkills skill repositories can be represented
outside Codex. It complements [Codex Skill Files](codex-skill-files.md).

## Canonical Contract

The canonical contract for skills in this superrepo remains:

```text
skills/<skill-name>/SKILL.md
```

Use this file for the portable skill contract:

- purpose and trigger
- do-not-use boundaries
- modes and expected inputs
- evidence and traceability rules
- output contracts
- quality gates
- handoffs

Agent-specific files should adapt or point to this contract. They should not
duplicate the full domain method unless that agent requires a different format.

## Support Levels

| Level | Meaning |
| --- | --- |
| Verified | The repo contains the target files and a documented install/import path. |
| Compatible | The canonical `SKILL.md` can be manually copied or referenced, but no verified installer exists in this repo. |
| Planned | The agent is named, but support must not be claimed until metadata, import path, and validation evidence exist. |

Do not claim full support for an agent unless the support level is `Verified`.

## Agent Surfaces

| Agent Host | Primary File Pattern | Current AgentSkills Support | Notes |
| --- | --- | --- | --- |
| Codex | `skills/<skill-name>/SKILL.md`, `agents/openai.yaml` | Verified | Installed with `npx -y skills add <repo> --skill * -a codex --yes`. |
| Claude Code | `CLAUDE.md`, `./.claude/CLAUDE.md`, `.claude/rules/` | Compatible | Use a short `CLAUDE.md` or scoped rules that point to the canonical skill contract. |
| Cursor | Project/User/Team Rules, AGENTS.md | Compatible | Use project rules or `AGENTS.md` to reference the canonical skill contract. |
| Windsurf | Rules/memories/workflows | Planned | Add verified project rule paths before claiming full support. |
| Cline | Cline Rules markdown files | Compatible | Use Cline rules to reference the canonical skill contract and repo conventions. |
| Other agent hosts | Agent-specific instruction files | Planned | Document exact file names, import path, limitations, and validation evidence first. |

## Claude Code

Claude Code uses persistent instruction files such as `CLAUDE.md` and scoped
rules. Claude treats these as context, not as enforced policy. Keep instructions
short, specific, and project-level.

Recommended pattern:

```text
CLAUDE.md
.claude/rules/<skill-name>.md
skills/<skill-name>/SKILL.md
```

`CLAUDE.md` should contain only routing guidance:

```markdown
# AgentSkills

Use `skills/<skill-name>/SKILL.md` as the canonical skill contract.
Preserve evidence, assumptions, gaps, and handoffs from that file.
```

Use scoped `.claude/rules/` files when the skill applies only to certain paths
or file types.

## Cursor

Cursor supports persistent rules and can also use `AGENTS.md`. For AgentSkills,
prefer a project rule that points to the canonical skill contract instead of
copying the full method.

Recommended pattern:

```text
AGENTS.md
.cursor/rules/<skill-name>.mdc
skills/<skill-name>/SKILL.md
```

The rule should state:

- when to use the skill
- where the canonical contract lives
- evidence and traceability expectations
- handoff boundaries

## Cline

Cline rules are Markdown instruction files. Use them to provide persistent
instructions and route Cline to the canonical skill contract.

Recommended pattern:

```text
.clinerules/<skill-name>.md
skills/<skill-name>/SKILL.md
```

If the exact Cline rules directory differs for a user's environment, document
the verified path before claiming `Verified` support.

## Windsurf

Windsurf support should remain `Planned` until the repo contains verified rule
or workflow files and an install/import path. Do not infer full support from
another agent's rule format.

For now, document:

- intended rule file or directory
- how it references `skills/<skill-name>/SKILL.md`
- known limitations
- manual validation steps

## Metadata Checklist

For each agent host listed in a skill README, include:

- support level: `Verified`, `Compatible`, or `Planned`
- target files
- install/import command or copy path
- known limitations
- validation command or manual check
- evidence source

## Multi-Agent Quality Gate

Before committing multi-agent support:

- Codex support still validates with `npm run validate`, `npm run test`, and
  `npm run package` when available.
- Non-Codex support does not duplicate large method sections.
- Agent-specific files point back to `SKILL.md`.
- Evidence and traceability behavior stays identical across hosts.
- README and Superrepo catalog state the support level clearly.
- Unsupported install paths are marked as gaps, not as support.

## References

- Claude Code memory and `CLAUDE.md`: https://docs.anthropic.com/en/docs/claude-code/memory
- Cursor rules: https://cursor.com/docs/rules
- Cline rules: https://docs.cline.bot/customization/cline-rules
