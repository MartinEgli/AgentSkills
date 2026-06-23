# AgentSkills

Superrepo for agent-related skills. Each skill lives in its own GitHub
repository and is included here as a Git submodule.

## Skill Catalog

| Skill Repo | Codex Skill | Use For | Do Not Use For |
| --- | --- | --- | --- |
| `caveman-skill` | `caveman` plus helper skills | Short, token-efficient agent responses and caveman helper workflows | Architecture or security review |
| `enterprise-architecture-skill` | `enterprise-architecture` | Capability, target architecture, roadmap, portfolio, architecture decisions | Detailed threat/control/security approval work |
| `enterprise-security-architecture-skill` | `enterprise-security-architecture` | Secure design review, threat/risk/control mapping, security target architecture | General EA strategy and capability roadmap work |
| `mournival-architecture-skill` | `mournival-architecture` | Four-steward architecture governance review with evidence/risk/value/decision separation | Simple EA or ESA drafting without review need |
| `software-architecture-skill` | `software-architecture` | Software design, DDD, Clean Architecture, Clean Coding, ADRs, integration, Clean AI design | Enterprise portfolio strategy or security approval |
| `single-skill-template` | `example-skill` | Template for building new single-skill repositories | Real domain work without customization |

## Reference Map

These references help position the skills. They are not copied into the skills
as hard rules unless a skill explicitly says so.

| Reference | Best Fit | Short Summary |
| --- | --- | --- |
| [TOGAF Standard, 10th Edition](https://www.opengroup.org/togaf-standard-10th-edition-downloads) | `enterprise-architecture` | Enterprise Architecture standard from The Open Group. Useful for architecture development method, governance, views, architecture practice, and target/transition thinking. |
| [ArchiMate 3.2 Specification](https://www.opengroup.org/sites/default/files/docs/downloads/n221p.pdf) | `enterprise-architecture` | Open modeling language for describing business, application, data, technology, motivation, implementation, and migration relationships. Useful when outputs should map to architecture models. |
| [Enterprise Architecture on a Single Page](https://kotusev.com/Enterprise%20Architecture%20on%20a%20Single%20Page.pdf) | `enterprise-architecture` | Compact view of EA artifacts around the CSVLOD model. Useful for stakeholder-friendly one-page EA summaries and checking whether the minimum useful artifact set is visible. |
| [CSVLOD model of Enterprise Architecture](https://www.bcs.org/media/3787/csvlod.pdf) | `enterprise-architecture` | Taxonomy for EA artifacts: Considerations, Standards, Visions, Landscapes, Outlines, and Designs. Useful for selecting artifacts by purpose instead of producing documents by habit. |
| [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) | `software-architecture` | Software design principle set focused on dependency direction and separating business rules from frameworks, UI, databases, and external services. |
| [Clean Code](https://www.informit.com/imprint/series_detail.aspx?ser=348084&sorttype=0) | `software-architecture` | Maintainability discipline for code readability, naming, small functions, tests, clear dependencies, and reducing avoidable complexity. |
| [Domain-Driven Design resources](https://www.domainlanguage.com/ddd/) | `software-architecture` | Strategic and tactical design approach for complex domains: ubiquitous language, bounded contexts, aggregates, domain events, and context maps. |
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | `software-architecture`, `enterprise-security-architecture`, `mournival-architecture` | AI risk management reference for trustworthy AI concerns. Useful for Clean AI checks around accountability, transparency, evaluation, data risk, and human oversight. |
| [SABSA Executive Summary](https://sabsa.org/sabsa-executive-summary/) | `enterprise-security-architecture` | Business-driven security architecture method. Useful for linking security requirements, risks, controls, and architecture decisions back to business objectives. |
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | `enterprise-security-architecture` | Outcome-oriented cybersecurity risk framework. Useful for communicating security posture and governance across Govern, Identify, Protect, Detect, Respond, and Recover outcomes. |
| [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) | `enterprise-security-architecture` | Zero Trust architecture guidance. Useful for identity, resource-centric access, policy decision/enforcement points, and moving away from implicit network trust. |
| [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | `enterprise-security-architecture` | Security and privacy control catalog. Useful when findings need control families, control intent, and structured control mapping. |
| [CIS Controls v8.1](https://www.cisecurity.org/controls/v8-1) | `enterprise-security-architecture` | Prioritized security safeguards for practical cyber defense. Useful for concrete control recommendations and implementation-oriented security improvement. |
| [MITRE ATT&CK Enterprise Matrix](https://attack.mitre.org/matrices/) | `enterprise-security-architecture` | Knowledge base of adversary tactics and techniques. Useful for threat scenarios, detection coverage, attack path thinking, and misuse analysis. |

How to use references:

- Use TOGAF and ArchiMate when the question is architecture structure,
  lifecycle, modeling, governance, or roadmap.
- Use EA on a Single Page and CSVLOD when the question is which EA artifacts are
  needed, how to summarize EA for stakeholders, or whether the EA repository is
  balanced and useful.
- Use Clean Architecture, Clean Code, and DDD when the question is software
  structure, service boundaries, code maintainability, or domain modeling.
- Use NIST AI RMF when Clean AI concerns involve AI risk, accountability,
  evaluation, transparency, human control, or governance.
- Use SABSA when security must trace back to business goals and risk.
- Use NIST CSF when the output must communicate cybersecurity outcomes or
  governance posture.
- Use NIST SP 800-207 when identity, resource access, trust boundaries, and
  Zero Trust are central.
- Use NIST SP 800-53 or CIS Controls when recommendations need concrete
  controls.
- Use MITRE ATT&CK when reviewing adversary behavior, threat scenarios, or
  detection gaps.
- Use Mournival when evidence, risk, value, and decision authority must be
  separated before accepting a claim or artifact.

## How The Skills Differ

### Enterprise Architecture

Use `enterprise-architecture` when the main question is:

```text
What should the enterprise architecture be, why, and how do we get there?
```

Typical work:

- business capability mapping
- current state vs target state
- application and data landscape review
- portfolio rationalization
- transition roadmap
- architecture principles
- architecture decision recommendations
- EA on one page summaries
- CSVLOD artifact selection or quality checks
- stakeholder and management summaries

Example prompts:

```text
Use enterprise-architecture to assess this target architecture and produce
current state, target state, gaps, roadmap, risks, and required decisions.
```

```text
Use enterprise-architecture to review this application portfolio for duplicate
capabilities, lifecycle risk, strategic fit, and rationalization options.
```

```text
Use enterprise-architecture /ea artifact-map to select the minimum useful EA
artifacts using CSVLOD and produce an EA on one page summary.
```

Main modes:

- `/ea assess`
- `/ea target`
- `/ea roadmap`
- `/ea decision`
- `/ea portfolio`
- `/ea artifact-map`

Output focus:

- business outcome
- capability impact
- architecture options
- CSVLOD artifact map
- EA one-page summary
- roadmap
- required decisions
- dependencies and assumptions

### Enterprise Security Architecture

Use `enterprise-security-architecture` when the main question is:

```text
Is this architecture secure enough, what can go wrong, and which controls are
required?
```

Typical work:

- secure design review
- threat and misuse analysis
- trust boundary review
- identity and access architecture
- data protection architecture
- control mapping
- residual risk
- security approval conditions

Example prompts:

```text
Use enterprise-security-architecture to review this customer API design for
threats, trust boundaries, controls, residual risk, and approval conditions.
```

```text
Use enterprise-security-architecture to create a security target architecture
for this cloud platform design.
```

Main modes:

- `/esa review`
- `/esa threat`
- `/esa controls`
- `/esa target`
- `/esa decision`

Output focus:

- assets and data classification
- trust boundaries
- threats and risks
- controls
- residual risk
- blocked and allowed next steps

### Software Architecture

Use `software-architecture` when the main question is:

```text
How should this software system be structured, integrated, tested, and evolved?
```

Typical work:

- service and module boundaries
- Domain-Driven Design
- Clean Architecture
- Clean Coding review
- ADRs
- API and event design
- data ownership
- quality attributes
- Clean AI design boundaries

Example prompts:

```text
Use software-architecture /sa ddd to identify bounded contexts, aggregates,
domain events, context map, and service boundaries for this domain.
```

```text
Use software-architecture /sa clean-architecture to review this service design
for dependency direction, use cases, ports/adapters, and infrastructure
isolation.
```

```text
Use software-architecture /sa clean-ai to review this AI-enabled workflow for
prompt/model/tool boundaries, evaluation, fallback, observability, and human
control.
```

Main modes:

- `/sa design`
- `/sa review`
- `/sa ddd`
- `/sa clean-architecture`
- `/sa clean-coding`
- `/sa clean-ai`
- `/sa adr`
- `/sa integration`

Output focus:

- domain and use cases
- bounded contexts
- module/service boundaries
- Clean Architecture dependency rule
- code maintainability findings
- integration contracts
- ADR candidates
- Clean AI design concerns

### Mournival Architecture

Use `mournival-architecture` when the main question is:

```text
Can this claim, artifact, contradiction, or candidate safely become accepted
architecture knowledge?
```

It is a governance and review skill with four steward roles:

| Role | Main Question | Veto Strength |
| --- | --- | --- |
| Architecture Assurance Steward | Is it evidenced and traceable? | Strongest |
| Architecture Risk Steward | What can go wrong? | Strong |
| Architecture Decision Steward | What must happen next? | Strong |
| Architecture Value Steward | Is it understandable and useful? | Usually soft veto |

Important: the skill evaluates internally in this order:

1. Assurance
2. Risk
3. Value
4. Decision

But outputs in this order:

1. Decision Steward Review
2. Risk Steward Review
3. Value Steward Review
4. Assurance Steward Review
5. Consolidated Mournival Decision

Example prompts:

```text
Use mournival-architecture to review this Knowledge Claim Candidate for
evidence, traceability, risk, value, and final decision.
```

```text
Use mournival-architecture to review this contradiction and decide whether it
needs ADR, context split, rework, or Human Architect review.
```

Main modes:

- `/mournival review-claim`
- `/mournival review-dirty-information`
- `/mournival review-contradiction`
- `/mournival review-artifact`
- `/mournival final-check`
- `/mournival clean-ai`

Output focus:

- separate steward reviews
- hard vetoes
- evidence gaps
- human review need
- blocked next steps
- consolidated decision

### Caveman

Use `caveman` when the main question is:

```text
Can the agent answer with fewer tokens while keeping technical accuracy?
```

Typical work:

- terse answers
- short commit help
- short review comments
- token-saving communication mode
- file compression helper workflows

Example prompts:

```text
caveman mode
```

```text
Use caveman-review to write short PR review comments.
```

Installed skills from this repo include:

- `caveman`
- `cavecrew`
- `caveman-commit`
- `caveman-compress`
- `caveman-help`
- `caveman-review`
- `caveman-stats`

Output focus:

- brevity
- technical accuracy
- minimal filler

### Single Skill Template

Use `single-skill-template` when creating a new skill repository.

Example prompts:

```text
Use single-skill-template as the base for a new architecture skill repo.
```

```text
Create a new <topic>-skill repo from single-skill-template and add it to
AgentSkills as a submodule.
```

Template provides:

- `SKILL.md` structure
- references/assets/examples pattern
- validation script
- package script
- GitHub Actions validation
- install documentation

## Choosing The Right Skill

Use this decision guide:

| Need | Skill |
| --- | --- |
| Business architecture direction, target state, roadmap | `enterprise-architecture` |
| Software design, DDD, Clean Architecture, Clean Coding | `software-architecture` |
| Security design, threats, controls, residual risk | `enterprise-security-architecture` |
| Evidence/risk/value/decision governance review | `mournival-architecture` |
| Shorter agent communication | `caveman` |
| Build a new skill repo | `single-skill-template` |

If a task crosses skills:

1. Use `enterprise-architecture` for business/target/roadmap structure.
2. Use `software-architecture` for system/service design, DDD, Clean
   Architecture, Clean Coding, and Clean AI design boundaries.
3. Use `enterprise-security-architecture` for security-specific review,
   controls, and AI security.
4. Use `mournival-architecture` for final governance decision when evidence,
   risk, value, and approval must be separated.

## Install Examples

Install one skill for Codex:

```powershell
npx -y skills add MartinEgli/enterprise-architecture-skill --skill * -a codex --yes
```

Install all current domain skills:

```powershell
npx -y skills add MartinEgli/enterprise-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/software-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/enterprise-security-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/mournival-architecture-skill --skill * -a codex --yes
```

## Docs

- [Codex Skill Files](docs/codex-skill-files.md): minimum files Codex needs,
  optional quality structure, install pattern, and validation standard.

## Submodules

- `caveman-skill` -> `https://github.com/MartinEgli/caveman-skill.git`
- `enterprise-architecture-skill` -> `https://github.com/MartinEgli/enterprise-architecture-skill.git`
- `enterprise-security-architecture-skill` -> `https://github.com/MartinEgli/enterprise-security-architecture-skill.git`
- `single-skill-template` -> `https://github.com/MartinEgli/single-skill-template.git`
- `mournival-architecture-skill` -> `https://github.com/MartinEgli/mournival-architecture-skill.git`
- `software-architecture-skill` -> `https://github.com/MartinEgli/software-architecture-skill.git`

## Clone

```powershell
git clone --recurse-submodules https://github.com/MartinEgli/AgentSkills.git
```

## Update Submodules

```powershell
git submodule update --init --recursive
git submodule update --remote --merge
```
