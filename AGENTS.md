# AgentSkills Agent Policy

This superrepo is the control repository for agent skill repositories.

## Repository Model

- `AgentSkills` is the superrepo.
- Each skill lives in its own GitHub repository.
- Each skill is included here as a Git submodule.
- Do not copy skill source files directly into the superrepo.
- Rename skill repositories with the `*-skill` suffix unless the repo is a
  template or a higher-level collection.

## Current Submodules

- `caveman-skill`
- `azure-architecture-skill`
- `domain-driven-design-skill`
- `dotnet-engineering-skill`
- `skill-author-skill`
- `single-skill-template`
- `mournival-architecture-skill`
- `enterprise-architecture-skill`
- `enterprise-security-architecture-skill`
- `software-architecture-skill`
- `solution-architecture-skill`

## Default Workflow

For every meaningful change:

1. Work inside the affected skill repository.
2. Update evidence and traceability rules when the change affects inputs,
   outputs, claims, decisions, diagrams, roles, modes, or handoffs.
3. Run that repository's validation and tests when available.
4. Commit small, coherent changes in the affected repository.
5. Push the affected repository.
6. Return to `AgentSkills`.
7. Update the submodule pointer.
8. Update `README.md` when a skill, role, mode, trigger, output shape, or usage
   guidance changed.
9. Commit the superrepo pointer and documentation update.
10. Push the superrepo.

## Evidence And Traceability Policy

Evidence and traceability are mandatory for all realized skills and templates.
Every skill must keep its evidence rules current as the skill evolves.

When creating or modifying a skill:

- Keep `SKILL.md` Evidence Handling aligned with the actual inputs, outputs,
  modes, roles, diagrams, and handoffs.
- Maintain `references/evidence-traceability.md` when the skill uses or
  produces findings, recommendations, diagrams, decisions, claims, controls,
  risks, roadmaps, model elements, code guidance, or governance status.
- Require important claims to trace back to one of:
  - user fact
  - supplied artifact
  - tool result
  - external source
  - clearly marked assumption
  - explicit gap
- Do not convert assumptions into evidence.
- Do not hide missing inputs. Mark them as gaps and state what decision they may
  change.
- Preserve source labels, IDs, paths, names, commands, error strings, system
  names, role names, and domain terms exactly.
- Include an Evidence Receipt for substantial outputs, reviews, decisions,
  diagrams, or recommendations.
- Use the small verification loop: locate relevant inputs, make the smallest
  scoped change or recommendation, verify against evidence and skill boundaries.
- Avoid unrelated refactors, extra artifacts, or broad rewrites unless needed
  for traceability or the requested change.

For templates:

- New template-generated skills must include evidence traceability by default.
- If the template `SKILL.md` references a traceability file, the scaffold script
  must create or copy that file.
- Template changes that affect skill outputs must update the example skill and
  scaffold behavior together.

For the superrepo:

- `README.md` must stay consistent with skill evidence expectations when a
  skill's output contract, role, mode, diagram capability, or handoff changes.
- Submodule pointer updates must only be committed after the affected skill repo
  has passed validation and its evidence rules are current.
- Use `skill-author` for creating, refining, validating, releasing, cataloging,
  and adapting skills for Codex, Claude, Cursor, Windsurf, Cline, or other
  agent hosts when the work changes skill contracts or AgentSkills
  documentation.
- After creating or materially refining a skill, use the `skill-author`
  feedback route to capture repeatable authoring improvements and classify
  them as applied, deferred, rejected, or routed.

## Superrepo README Maintenance

`README.md` is the human catalog for all skills in this superrepo. It must be
updated whenever:

- a new skill repository is added
- a skill repository is renamed
- a skill is removed
- a skill gets new or renamed modes
- a skill gets new or changed roles
- a skill trigger or intended use changes
- a skill output contract changes
- a skill's boundary or "do not use" guidance changes

Each skill entry in `README.md` must show:

- repository name and GitHub URL
- skill name and supported agent hosts
- what the skill is for
- what the skill is not for
- example prompts
- main modes or commands
- roles, if the skill has roles
- output focus
- how it differs from nearby or overlapping skills
- install command when useful

When updating README examples:

- keep prompts copy-pasteable
- show at least one realistic usage example per skill
- explain cross-skill handoff when two skills overlap
- keep role descriptions short and operational

## Granular Commit Rules

- Prefer one commit per logical change.
- Separate behavior, docs, tests, packaging, and repo plumbing.
- Use Conventional Commits:
  - `feat:` new capability
  - `fix:` bug fix
  - `docs:` documentation only
  - `test:` tests only
  - `chore:` repository maintenance
  - `refactor:` behavior-preserving code change
  - `release:` version bump and changelog
- Commit message subject should be short and imperative.

## Automatic Commit And Push Policy

When the user asks Codex to modify any skill repo:

- After checks pass, create granular commits automatically.
- Push each changed skill repo automatically.
- Commit and push the `AgentSkills` submodule pointer automatically.
- If a repo has no remote, create `MartinEgli/<repo-name>` when authenticated
  as `MartinEgli`, then push.
- Do not push broken validation unless the user explicitly asks for a WIP push.

## Gitflow

- `main` contains stable, installable skill state.
- Use short feature branches for risky or multi-step work:
  - `feature/<topic>`
  - `fix/<topic>`
  - `release/<version>`
- Small safe changes may commit directly to `main`.
- Releases are tagged from `main`.
- Keep submodules pinned to commits on their own `main` branches unless a
  feature branch is explicitly needed.

## Versioning

Use semantic versioning for skill repositories:

- `0.x`: evolving skill design.
- `1.0.0`: stable installable skill contract.
- Patch: compatible fixes, docs, validation, examples.
- Minor: new modes, new assets, new references, compatible schema additions.
- Major: breaking trigger, output schema, install, or behavior changes.

For release commits:

1. Update `package.json` version when present.
2. Update `CHANGELOG.md`.
3. Run checks.
4. Commit as `release: vX.Y.Z`.
5. Tag `vX.Y.Z`.
6. Push commit and tag.
7. Update and push `AgentSkills` submodule pointer.

## Safety

- Never delete or reset user changes without explicit request.
- Before destructive Git actions, inspect status in the affected repo.
- Treat generated local install artifacts as untracked noise unless the repo
  intentionally tracks them.
