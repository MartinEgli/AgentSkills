# AgentSkills

Superrepo for agent-related skills.

## Docs

- [Codex Skill Files](docs/codex-skill-files.md): minimum files Codex needs,
  optional quality structure, install pattern, and validation standard.

## Submodules

- `caveman-skill` -> `https://github.com/MartinEgli/caveman-skill.git`
- `enterprise-architecture-skill` -> `https://github.com/MartinEgli/enterprise-architecture-skill.git`
- `enterprise-security-architecture-skill` -> `https://github.com/MartinEgli/enterprise-security-architecture-skill.git`
- `single-skill-template` -> `https://github.com/MartinEgli/single-skill-template.git`
- `mournival-architecture-skill` -> `https://github.com/MartinEgli/mournival-architecture-skill.git`

## Clone

```powershell
git clone --recurse-submodules <repo-url>
```

## Update Submodules

```powershell
git submodule update --init --recursive
git submodule update --remote --merge
```
