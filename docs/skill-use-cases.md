# Skill Use Cases

This document describes every skill in the AgentSkills superrepo in practical
terms: what it is for, when to use it, typical inputs, expected outputs,
handoffs, and evidence expectations.

## Evidence Rule For All Skills

Every substantial output must keep important claims traceable to one of:

- user fact
- supplied artifact
- tool result
- external source
- clearly marked assumption
- explicit gap

Do not convert assumptions into evidence. For reviews, diagrams, decisions, or
recommendations, include an Evidence Receipt when it materially helps the user
understand where conclusions came from.

## Agent Images

The documentation uses the checked-in skill icon assets as agent images. These
icons are the same visual identity referenced by `agents/openai.yaml` where
available.

| Agent Image | Skill |
| --- | --- |
| <img src="../azure-architecture-skill/skills/azure-architecture/assets/azure-architecture-small.svg" width="48" height="48" alt="Azure Architecture icon"> | `azure-architecture` |
| <img src="../dotnet-engineering-skill/skills/dotnet-engineering/assets/dotnet-engineering-small.svg" width="48" height="48" alt=".NET Engineering icon"> | `dotnet-engineering` |
| <img src="../enterprise-architecture-skill/skills/enterprise-architecture/assets/enterprise-architecture-small.svg" width="48" height="48" alt="Enterprise Architecture icon"> | `enterprise-architecture` |
| <img src="../enterprise-security-architecture-skill/skills/enterprise-security-architecture/assets/enterprise-security-architecture-small.svg" width="48" height="48" alt="Enterprise Security Architecture icon"> | `enterprise-security-architecture` |
| <img src="../software-architecture-skill/skills/software-architecture/assets/software-architecture-small.svg" width="48" height="48" alt="Software Architecture icon"> | `software-architecture` |
| <img src="../domain-driven-design-skill/skills/domain-driven-design/assets/domain-driven-design-small.svg" width="48" height="48" alt="Domain-Driven Design icon"> | `domain-driven-design` |
| <img src="../mournival-architecture-skill/skills/mournival-architecture/assets/mournival-architecture-small.svg" width="48" height="48" alt="Mournival Architecture icon"> | `mournival-architecture` |
| <img src="../solution-architecture-skill/skills/solution-architecture/assets/solution-architecture-small.svg" width="48" height="48" alt="Solution Architecture icon"> | `solution-architecture` |
| <img src="../skill-author-skill/skills/skill-author/assets/skill-author-small.svg" width="48" height="48" alt="Skill Author icon"> | `skill-author` |
| <img src="../caveman-skill/plugins/caveman/assets/caveman-small.svg" width="48" height="48" alt="Caveman icon"> | `caveman` and helper skills |
| <img src="../single-skill-template/skills/example-skill/assets/example-skill-small.svg" width="48" height="48" alt="Example Skill icon"> | `example-skill` template |

## Azure Architecture

Skill: `azure-architecture`

Use this skill for Azure architecture decisions before execution starts. It is
the Azure platform and workload architecture router, not a deployment runner.

Primary use cases:

- Design Azure target architecture for a workload or platform.
- Design or review Azure landing zones, management groups, subscriptions, and
  environment separation.
- Review hub-spoke, Virtual WAN, Private Link, DNS, ingress, egress, firewall,
  and network segmentation choices.
- Review Azure governance: Policy, RBAC, naming, tagging, locks, exemptions,
  subscription ownership, and operating model.
- Run Azure Well-Architected and Cloud Adoption Framework alignment.
- Position migrations to Azure and decide whether to rehost, replatform,
  refactor, replace, retain, or retire.
- Create Azure architecture diagrams in Mermaid, PlantUML, or C4-style notation.
- Route execution work to the correct Azure execution skill.

Typical inputs:

- workload goal and business criticality
- tenant, subscription, region, and environment constraints
- current architecture, Azure inventory, IaC, or landing zone notes
- security, network, data, reliability, cost, and operations requirements
- preferred IaC model such as Bicep or Terraform

Expected outputs:

- target architecture summary
- landing zone or workload architecture decisions
- WAF/CAF findings
- risks, assumptions, and gaps
- Azure architecture diagrams
- execution handoffs such as `azure-prepare`, `azure-deploy`,
  `azure-validate`, `azure-diagnostics`, `azure-cost`, `azure-rbac`, or
  `azure-resource-visualizer`

Do not use for:

- live troubleshooting
- direct deployment
- exact cost queries
- detailed security approval
- .NET implementation review

## .NET Engineering

Skill: `dotnet-engineering`

Use this skill for .NET-specific engineering design and review. It complements
`software-architecture` by going deeper into C#, ASP.NET Core, EF Core, testing,
performance, packages, and Azure SDK integration.

Primary use cases:

- Review C# and .NET project structure.
- Design or review ASP.NET Core, Minimal API, Web API, Blazor, worker service,
  and hosted-service patterns.
- Review dependency injection lifetimes, options, configuration, middleware,
  logging, health checks, and error handling.
- Review EF Core DbContext boundaries, migrations, query performance,
  transactions, concurrency, and data access.
- Apply Clean Architecture in .NET without unnecessary ceremony.
- Design test strategy: unit, integration, contract, architecture, and
  end-to-end tests.
- Review performance, async, memory, startup, throughput, caching, telemetry,
  and diagnostics.
- Plan .NET modernization, target framework upgrades, package cleanup, NuGet,
  and MSBuild changes.
- Review Azure SDK integration: managed identity, Key Vault, App Configuration,
  Application Insights, Service Bus, Storage, Cosmos DB, Functions, App Service,
  Container Apps, and observability.
- Create .NET engineering diagrams in Mermaid, PlantUML, or C4-style notation.

Typical inputs:

- `.sln`, `.csproj`, C# source files, package references, logs, test output, or
  benchmark output
- target framework and SDK version
- hosting target and runtime constraints
- API contracts, schemas, configuration, and deployment context

Expected outputs:

- .NET findings with severity and evidence
- project, code, package, and test recommendations
- modernization path
- performance and diagnostics recommendations
- Azure integration handoffs
- .NET diagrams

Do not use for:

- broad enterprise architecture
- Azure landing zone and platform design
- non-.NET architecture questions
- security approval
- final governance acceptance

## Solution Architecture

Skill: `solution-architecture`

Use this skill when the main task is concrete, executable solution design across
system context, components, integrations, data flows, quality attributes,
deployment topology, decisions, and implementation roadmap.

Primary use cases:

- Design target solution architecture for a product, platform, system, or
  initiative.
- Review proposed solution architecture before implementation.
- Define actors, external systems, solution boundary, components, integrations,
  and data flows.
- Elicit or review quality attributes and non-functional requirements.
- Compare solution options and produce ADR candidates.
- Review APIs, events, data ownership, consistency boundaries, and integration
  risks.
- Create implementation slices, sequencing, dependencies, and delivery risks.
- Review AI-enabled solution boundaries and route software/security/governance
  concerns to the right skill.
- Create Mermaid, PlantUML, C4, sequence, component, data-flow, and deployment
  diagrams.

Typical inputs:

- business goal, stakeholders, users, actors, and system boundary
- functional requirements and key workflows
- quality attributes, NFRs, constraints, and known decisions
- current architecture, APIs, schemas, data domains, events, and integrations
- platform, runtime, hosting, security, privacy, and operational constraints
- delivery timeline, team ownership, and implementation sequencing

Expected outputs:

- solution context and boundary
- component, integration, data-flow, and deployment views
- quality attribute and NFR review
- solution options, trade-offs, and ADR candidates
- risks, assumptions, gaps, and handoffs
- implementation roadmap and slices
- Evidence Receipt for material claims and diagrams

Do not use for:

- enterprise portfolio, capability strategy, or long-range operating model
- deep code design or tactical DDD
- Azure landing zone and subscription/platform design
- security approval or residual risk acceptance
- final governance acceptance

## Enterprise Architecture

Skill: `enterprise-architecture`

Use this skill when the main question is business-to-architecture alignment:
what the target architecture should be, why it matters, and how to get there.

Primary use cases:

- Map business capabilities and connect them to applications, data, platforms,
  and initiatives.
- Assess current state, target state, gaps, dependencies, and decisions.
- Review application and capability portfolios for duplication, lifecycle,
  strategic fit, and rationalization.
- Define transition roadmaps, sequencing, milestones, and decision points.
- Prepare architecture principles and decision recommendations.
- Select or review EA artifacts using EA on one page and CSVLOD.
- Create capability, landscape, data/integration, technology, governance, and
  roadmap diagrams.
- Translate architecture into stakeholder and management summaries.

Typical inputs:

- business goal and stakeholder audience
- current landscape, target outcome, systems, capabilities, data domains, and
  constraints
- portfolio inventory, roadmap horizon, principles, or decisions needed

Expected outputs:

- current-state and target-state summary
- gap and dependency analysis
- architecture options and recommendations
- roadmap and decision needs
- CSVLOD artifact map or EA one-page summary
- EA diagrams
- Evidence Receipt for important recommendations

Do not use for:

- detailed security threat/control approval
- code-level design
- final evidence acceptance

## Enterprise Security Architecture

Skill: `enterprise-security-architecture`

Use this skill when the main concern is whether an architecture is secure
enough, what can go wrong, which controls are needed, and what residual risk
remains.

Primary use cases:

- Review secure design of systems, platforms, APIs, AI-enabled workflows, and
  cloud architectures.
- Identify threats, misuse cases, trust boundaries, and attack paths without
  producing exploit instructions.
- Map risks to preventive, detective, and corrective controls.
- Review identity, access, data protection, Zero Trust, logging, monitoring,
  and security governance.
- Define security approval conditions and residual risks.
- Create trust boundary, data flow, control map, Zero Trust, and AI security
  diagrams.

Typical inputs:

- architecture under review
- asset list, data classification, trust boundaries, identities, interfaces,
  cloud/platform context, known controls, policies, and regulatory constraints

Expected outputs:

- security findings and risk levels
- threat/control mapping
- residual risk and approval conditions
- human security review triggers
- security diagrams
- Evidence Receipt for material risks and controls

Do not use for:

- general EA strategy
- code-level design when security is not the main concern
- DDD modeling
- final governance acceptance

## Software Architecture

Skill: `software-architecture`

Use this skill for software-level structure, boundaries, quality attributes,
integration, decisions, Clean Architecture, Clean Coding, and Clean AI design.

Primary use cases:

- Design or review service, module, component, and API boundaries.
- Review coupling, cohesion, dependency direction, testability, operability,
  and maintainability.
- Apply Clean Architecture and Clean Coding at software-system level.
- Create or review ADRs.
- Review APIs, events, messaging, data ownership, consistency, and integration
  patterns.
- Do lightweight DDD triage before handing deep DDD work to
  `domain-driven-design`.
- Review Clean AI software responsibilities: prompt, model, tools, data,
  evaluation, fallback, observability, and human control.
- Create C4, sequence, component, deployment, Clean Architecture, API/event,
  data ownership, and Clean AI diagrams.

Typical inputs:

- code structure, diagrams, API contracts, schemas, ADRs, logs, inventories,
  quality attributes, runtime constraints, and ownership context

Expected outputs:

- architecture findings and trade-offs
- boundary and dependency recommendations
- ADR candidates
- integration and data ownership recommendations
- software diagrams
- Evidence Receipt for important design decisions

Do not use for:

- enterprise portfolio and roadmap work
- detailed security approval
- deep DDD modeling
- final governance acceptance

## Domain-Driven Design

Skill: `domain-driven-design`

Use this skill when domain complexity is the center of the task: language,
bounded contexts, subdomains, aggregates, invariants, events, and context
relationships.

Primary use cases:

- Discover ubiquitous language, actors, commands, events, policies, invariants,
  and open questions.
- Build context maps and name upstream/downstream relationships.
- Classify core, supporting, and generic subdomains.
- Design aggregate boundaries around real invariants.
- Identify domain events, producers, consumers, and downstream policies.
- Prepare or summarize event storming.
- Review service splits or code structure against DDD principles.
- Create context maps, subdomain maps, aggregate diagrams, event flows, event
  storming summaries, and ubiquitous language maps.

Typical inputs:

- domain process, workshop notes, events, commands, policies, rules, schemas,
  code, current systems, teams, and pain points

Expected outputs:

- domain terms and definitions
- bounded contexts and context relationships
- subdomain classification
- aggregates, invariants, commands, and events
- open domain expert questions
- DDD diagrams
- Evidence Receipt that marks unverified model elements as hypotheses

Do not use for:

- simple CRUD or low-domain-complexity tasks
- enterprise capability roadmap and portfolio decisions
- final evidence acceptance

## Mournival Architecture

Skill: `mournival-architecture`

Use this skill for governance review of architecture knowledge, not for creating
the primary design. It checks whether a claim, artifact, contradiction, or AI
output can safely become productive architecture knowledge.

Primary use cases:

- Review Knowledge Claims and Knowledge Claim Candidates.
- Review Dirty Information before it becomes a candidate.
- Resolve contradictions between sources, versions, or statements.
- Review architecture artifacts for evidence, risk, value, and decision
  readiness.
- Run final gate checks before productive use, release, RAG ingestion, training
  dataset inclusion, or decision publication.
- Review AI-generated or AI-assisted architecture claims.
- Create governance diagrams: evidence traceability, role finding flow,
  decision flow, veto maps, review states, and productive-use gates.

Roles:

- Architecture Assurance Steward: protects evidence and traceability.
- Architecture Risk Steward: identifies harm, misuse, compliance, security, and
  semantic drift.
- Architecture Value Steward: checks usefulness, clarity, and stakeholder fit.
- Architecture Decision Steward: turns the review into allowed next steps,
  blocked next steps, required actions, and final status.

Typical inputs:

- claim or artifact
- source IDs, fragment IDs, conversation excerpt IDs
- evidence class, execution context, target audience, intended next step,
  pipeline stage, and data classification

Expected outputs:

- Decision, Risk, Value, and Assurance role reviews
- vetoes and blockers
- human review requirement
- consolidated Mournival decision
- Evidence Receipt and traceability table

Do not use for:

- creating primary EA, security, software, DDD, Azure, or .NET designs
- replacing accountable human approval
- accepting unsupported truth claims

## Caveman And Helper Skills

Skill family: `caveman`, `cavecrew`, `caveman-commit`, `caveman-review`,
`caveman-compress`, `caveman-help`, `caveman-stats`

Use this family when the task is about terse agent communication, token-saving
workflow, short review comments, short commit help, or Caveman helper behavior.

Primary use cases:

- Activate terse response style with `caveman`.
- Use `cavecrew` for compact locate/fix/verify helper workflows.
- Use `caveman-commit` for short conventional commit help.
- Use `caveman-review` for terse actionable review comments.
- Use `caveman-compress` to compress Markdown-style instruction files while
  preserving technical substance.
- Use `caveman-help` to list Caveman commands and helper skills.
- Use `caveman-stats` to report token usage and savings from session logs.

Transferable discipline used by other skills:

- keep changes scoped
- locate inputs before changing outputs
- verify with a concrete receipt
- avoid unrelated refactors
- preserve technical names, code, URLs, and structure

Do not use for:

- architecture or security judgment by itself
- detailed skill design
- governance acceptance

## Single Skill Template

Skill: `example-skill`

Use this repository as the template for new single-skill repositories. It is not
a domain expert skill by itself.

Primary use cases:

- Scaffold a new skill repo with required `SKILL.md` structure.
- Provide the references/assets/examples pattern for production-ready skills.
- Validate skill metadata, required sections, links, and forbidden placeholders.
- Package a skill into a `.skill` artifact.
- Provide default evidence and traceability behavior for future skills.

Typical inputs:

- new skill name
- intended use cases
- required modes
- references, assets, examples, or scripts needed by the skill

Expected outputs:

- a focused skill folder
- `SKILL.md`
- `agents/openai.yaml`
- references and assets
- validation/test/package scripts

Do not use for:

- real domain work without replacing the example content
- broad multi-skill repositories

## Skill Author

Skill: `skill-author`

Use this skill for creating and maintaining agent skills in the AgentSkills
ecosystem. It turns the template into a real skill repo and keeps evidence,
validation, Gitflow, submodules, target-agent compatibility, and catalog
documentation aligned.

Primary use cases:

- Plan a new skill contract: name, trigger, scope, boundaries, modes, handoffs,
  references, assets, quality gates, and output contracts.
- Create a new skill repo from `single-skill-template`.
- Refine an existing skill's `SKILL.md`, roles, modes, handoffs, evidence rules,
  diagram scope, or UI metadata.
- Add or repair `references/evidence-traceability.md`.
- Align `agents/openai.yaml` with the current skill contract.
- Define support for Codex, Claude, Cursor, Windsurf, Cline, or another agent
  host, including metadata, install/import path, limitations, and validation
  evidence.
- Validate, test, package, commit, push, version, and release a skill repo.
- Add the repo to AgentSkills as a submodule and update README, AGENTS, install
  examples, and this use-case document.
- Define forward-testing prompts for realistic skill validation.
- Capture feedback from newly built skills and route repeatable authoring
  improvements back into `skill-author`, `single-skill-template`, AgentSkills
  docs, or a target skill.

Typical inputs:

- target skill name and repo name
- user prompts that should and should not trigger the skill
- role or mode requirements
- source material and existing templates
- adjacent skills and handoff boundaries
- validation, release, install, and Superrepo expectations
- target agent host such as Codex, Claude, Cursor, Windsurf, Cline, or another
  named agent

Expected outputs:

- focused skill contract
- updated `SKILL.md`, references, assets, and `agents/openai.yaml`
- validation/test/package results
- granular commits and pushed repos when requested by AgentSkills policy
- updated submodule pointer and Superrepo catalog docs
- Evidence Receipt for important design and release decisions
- feedback items classified as applied, deferred, rejected, or routed
- supported agent hosts and compatibility gaps

Do not use for:

- domain architecture, DDD, Azure, .NET, security, or governance decisions
- final evidence acceptance of architecture artifacts
- adding unsupported domain knowledge to make a skill look complete

