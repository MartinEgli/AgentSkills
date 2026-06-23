# Codex Skill Files

This document defines what Codex needs from a skill repository and what this
superrepo treats as optional quality structure.

## Minimum Required By Codex

Codex needs one skill folder with one `SKILL.md` file:

```text
skills/
  <skill-name>/
    SKILL.md
```

The folder name should match the skill name.

`SKILL.md` must contain YAML frontmatter with `name` and `description`:

```markdown
---
name: my-skill
description: >
  Use this skill when Codex should do a specific reusable workflow.
---

# My Skill

Skill instructions here.
```

## What The Frontmatter Does

`name` is the skill identifier.

`description` is the trigger surface. Codex sees it before loading the skill
body, so it must clearly state when to use the skill.

Keep trigger-relevant wording in `description`, not only later in the body.

## Optional But Recommended

```text
skills/<skill-name>/
  references/
  assets/
  examples/
  agents/openai.yaml
```

Use `references/` for supporting method and domain context that should be read
only when needed.

Use `assets/` for output templates, schemas, or files the agent can reuse.

Use `examples/` to prove expected behavior.

Use `agents/openai.yaml` for UI metadata such as display name, short
description, default prompt, and implicit invocation policy.

## Repository Quality Files

These files are not required by Codex, but are expected for production-grade
skill repositories in this superrepo:

```text
README.md
INSTALL.md
CLAUDE.md
AGENTS.md
CHANGELOG.md
package.json
scripts/validate-skill.mjs
scripts/package-skill.mjs
tests/
.github/workflows/validate.yml
```

## Template Standard

New single-skill repositories should start from:

```text
single-skill-template
```

Then rename the generated skill folder and update:

- `skills/<skill-name>/SKILL.md`
- `skills/<skill-name>/agents/openai.yaml`
- `README.md`
- `INSTALL.md`
- `package.json`
- `CHANGELOG.md`

## Installation Pattern

Install a skill repository for Codex:

```powershell
npx -y skills add MartinEgli/<repo-name> --skill * -a codex --yes
```

Example:

```powershell
npx -y skills add MartinEgli/mournival-architecture-skill --skill * -a codex --yes
```

## Validation Standard

Before pushing a skill repo:

```powershell
npm run validate
npm run test
npm run package
```

If a repository does not yet have scripts, inspect the structure manually:

- `skills/<skill-name>/SKILL.md` exists
- frontmatter has `name` and `description`
- folder name matches `name`
- referenced files exist
- no placeholders remain
- examples are realistic

## Superrepo Rule

Do not edit skill source directly in `AgentSkills` except inside the relevant
submodule checkout. Commit and push the skill repository first. Then commit and
push the updated submodule pointer in `AgentSkills`.
