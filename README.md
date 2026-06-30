# AgentSkills

Superrepo for agent-related skills. Each skill lives in its own GitHub
repository and is included here as a Git submodule.

## Skill Catalog

| Agent | Skill Repo | Codex Skill | Use For | Do Not Use For |
| --- | --- | --- | --- | --- |
| ![Azure Architecture](azure-architecture-skill/skills/azure-architecture/assets/azure-architecture-small.svg) | `azure-architecture-skill` | `azure-architecture` | Azure target architecture, landing zones, Well-Architected review, governance, migration positioning, diagrams, Azure skill routing | Direct deployment, live diagnostics, exact cost queries, .NET code review, or security approval |
| ![Caveman](caveman-skill/plugins/caveman/assets/caveman-small.svg) | `caveman-skill` | `caveman` plus helper skills | Short, token-efficient agent responses and caveman helper workflows | Architecture or security review |
| ![Domain-Driven Design](domain-driven-design-skill/skills/domain-driven-design/assets/domain-driven-design-small.svg) | `domain-driven-design-skill` | `domain-driven-design` | Deep DDD: bounded contexts, subdomains, context maps, aggregates, domain events, event storming, DDD diagrams | General software architecture, EA roadmap, security approval, or governance acceptance |
| ![.NET Engineering](dotnet-engineering-skill/skills/dotnet-engineering/assets/dotnet-engineering-small.svg) | `dotnet-engineering-skill` | `dotnet-engineering` | C#, ASP.NET Core, EF Core, testing, performance, modernization, Azure SDK integration, .NET diagrams | Broad EA, Azure platform architecture, non-.NET architecture, security approval, or final governance |
| ![Enterprise Architecture](enterprise-architecture-skill/skills/enterprise-architecture/assets/enterprise-architecture-small.svg) | `enterprise-architecture-skill` | `enterprise-architecture` | Capability, target architecture, roadmap, portfolio, architecture decisions, EA diagrams | Detailed threat/control/security approval, code-level design, or final evidence acceptance |
| ![Enterprise Security Architecture](enterprise-security-architecture-skill/skills/enterprise-security-architecture/assets/enterprise-security-architecture-small.svg) | `enterprise-security-architecture-skill` | `enterprise-security-architecture` | Secure design review, threat/risk/control mapping, security target architecture, Clean AI security, security diagrams | General EA strategy, code design, DDD modeling, or final evidence acceptance |
| ![Mournival Architecture](mournival-architecture-skill/skills/mournival-architecture/assets/mournival-architecture-small.svg) | `mournival-architecture-skill` | `mournival-architecture` | Four-steward architecture governance review with evidence/risk/value/decision separation, governance diagrams | Creating the primary EA, ESA, software, or DDD design |
| ![Pragmatic Enterprise Solution Architect](pragmatic-enterprise-solution-architect-skill/skills/pragmatic-enterprise-solution-architect/assets/pragmatic-enterprise-solution-architect-small.svg) | `pragmatic-enterprise-solution-architect-skill` | `pragmatic-enterprise-solution-architect` | Lean enterprise/solution architecture decisions, trade-offs, triage, lightweight briefs, pragmatic concepts/specifications, roadmaps, and Mermaid, PlantUML, Draw.io, Archi/ArchiMate, or ADOIT-oriented model outputs | Formal EA governance, deep solution design, security approval, DDD modeling, Azure platform architecture, or .NET implementation |
| ![Skill Author](skill-author-skill/skills/skill-author/assets/skill-author-small.svg) | `skill-author-skill` | `skill-author` | Create, refine, validate, release, catalog, and adapt skills for Codex, Claude, Cursor, Windsurf, Cline, and other agent hosts with evidence, Gitflow, submodules, and AgentSkills README/AGENTS updates | Domain architecture, software, Azure, .NET, DDD, security, or governance work that belongs to another skill |
| ![Software Architecture](software-architecture-skill/skills/software-architecture/assets/software-architecture-small.svg) | `software-architecture-skill` | `software-architecture` | Software design, DDD handoff, Clean Architecture, Clean Coding, ADRs, integration, Clean AI design, software diagrams | Enterprise portfolio strategy, security approval, deep DDD modeling, or final evidence acceptance |
| ![Solution Architecture](solution-architecture-skill/skills/solution-architecture/assets/solution-architecture-small.svg) | `solution-architecture-skill` | `solution-architecture` | End-to-end solution design and review: context, components, integrations, data flows, NFRs, deployment topology, ADRs, roadmap, diagrams, and implementation handoffs | Enterprise portfolio strategy, deep code design, Azure landing zones, security approval, or final governance acceptance |
| ![Example Skill](single-skill-template/skills/example-skill/assets/example-skill-small.svg) | `single-skill-template` | `example-skill` | Template for building new single-skill repositories | Real domain work without customization |

## How To Use Skills

In an agent session, use a skill by naming it in the prompt or by asking for
work that clearly matches the skill scope. A skill is not a standalone program;
it is a local `SKILL.md` instruction contract that tells the agent when to use
the skill, which boundaries apply, which references to read, what outputs to
produce, and how evidence must be tracked.

Explicit skill use:

```text
Use enterprise-architecture and assess this target architecture.
```

```text
Use solution-architecture and create context, component, and deployment views.
```

```text
Use pragmatic-enterprise-solution-architect to compare these options and
recommend what we should decide now, defer, spike, or escalate.
```

```text
Use skill-author to improve this skill and check the evidence rules.
```

```text
Use domain-driven-design for bounded contexts, aggregates, and context maps.
```

Implicit skill use:

```text
Create a DDD context map for this domain.
```

```text
Review this Azure landing zone design against governance and WAF concerns.
```

When a skill is selected, the agent should state it briefly before acting, for
example:

```text
I am using skill-author because this changes skill contracts, agent metadata,
and AgentSkills documentation.
```

For new skill work, use `skill-author` with `single-skill-template`:

```text
Use skill-author to build a new <name>-skill from single-skill-template and add
it to AgentSkills.
```

For skill audits:

```text
Use skill-author to validate all existing skills, but leave caveman-skill out.
```

If a task spans multiple skills, name the sequence explicitly:

```text
Use enterprise-architecture first for capability and roadmap framing, then use
solution-architecture for the concrete solution design.
```

The agent must read the selected `SKILL.md` before making skill-specific
changes, follow the skill's trigger and do-not-use boundaries, preserve evidence
and traceability, and update this README when skill usage, roles, modes,
handoffs, outputs, or installation guidance changes.

## Continuous Skill Improvement

Realized skills and the `single-skill-template` use an auditable feedback loop
instead of hidden self-modification:

```text
feedback -> evidence -> improvement proposal -> feature branch -> validation ->
commit -> push -> version or changelog update when needed
```

Use each skill's `/<skill> feedback` mode to capture lessons from a run. Use
`/<skill> improve` to propose concrete changes with evidence, affected files,
risks, validation commands, versioning impact, and rollback considerations.

Every applied improvement must preserve:

- exact user facts, paths, commands, source labels, and examples
- separation of evidence, inference, assumption, and gap
- rejected, deferred, and routed ideas in the backlog or proposal trail
- validation evidence before merge
- feature-branch workflow before updating `main`

The shared artifacts are:

- `references/feedback-route.md`
- `references/improvement-backlog.md`
- `assets/improvement-proposal-template.md`

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
| [Domain-Driven Design resources](https://www.domainlanguage.com/ddd/) | `domain-driven-design`, `software-architecture` | Strategic and tactical design approach for complex domains: ubiquitous language, bounded contexts, aggregates, domain events, and context maps. Use DDD skill for deep modeling; use Software Architecture for broader system design. |
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | `software-architecture`, `enterprise-security-architecture`, `mournival-architecture` | AI risk management reference for trustworthy AI concerns. Useful for Clean AI checks around accountability, transparency, evaluation, data risk, and human oversight. |
| [SABSA Executive Summary](https://sabsa.org/sabsa-executive-summary/) | `enterprise-security-architecture` | Business-driven security architecture method. Useful for linking security requirements, risks, controls, and architecture decisions back to business objectives. |
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | `enterprise-security-architecture` | Outcome-oriented cybersecurity risk framework. Useful for communicating security posture and governance across Govern, Identify, Protect, Detect, Respond, and Recover outcomes. |
| [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) | `enterprise-security-architecture` | Zero Trust architecture guidance. Useful for identity, resource-centric access, policy decision/enforcement points, and moving away from implicit network trust. |
| [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | `enterprise-security-architecture` | Security and privacy control catalog. Useful when findings need control families, control intent, and structured control mapping. |
| [CIS Controls v8.1](https://www.cisecurity.org/controls/v8-1) | `enterprise-security-architecture` | Prioritized security safeguards for practical cyber defense. Useful for concrete control recommendations and implementation-oriented security improvement. |
| [MITRE ATT&CK Enterprise Matrix](https://attack.mitre.org/matrices/) | `enterprise-security-architecture` | Knowledge base of adversary tactics and techniques. Useful for threat scenarios, detection coverage, attack path thinking, and misuse analysis. |
| [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/) | `azure-architecture` | Azure workload architecture guidance across reliability, security, cost optimization, operational excellence, and performance efficiency. |
| [Microsoft Cloud Adoption Framework for Azure](https://learn.microsoft.com/azure/cloud-adoption-framework/) | `azure-architecture` | Azure adoption and operating model guidance. Useful for landing zones, governance, migration, management, and cloud operating model alignment. |
| [.NET Documentation](https://learn.microsoft.com/dotnet/) | `dotnet-engineering` | Official Microsoft documentation for .NET, C#, ASP.NET Core, EF Core, diagnostics, performance, testing, and deployment-related engineering practices. |

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
- Use Azure WAF and CAF when reviewing Azure target architecture, landing zones,
  governance, migration, platform operations, or workload architecture.
- Use .NET documentation when .NET runtime, ASP.NET Core, EF Core, testing,
  package, or modernization behavior is version-sensitive.
- Use Mournival when evidence, risk, value, and decision authority must be
  separated before accepting a claim or artifact.

## How The Skills Differ

## Definition Guardrails

Each architecture skill now follows the same gap-closing rules:

- state assumptions when required inputs are missing
- mark blockers instead of inventing facts
- separate evidence, inference, assumption, and gap
- keep important claims traceable to user facts, artifacts, tool results,
  external sources, or assumptions
- include an Evidence Receipt for substantial findings or decisions
- follow a small verification loop: locate relevant inputs, make the smallest
  scoped recommendation, verify against evidence and skill boundaries
- hand off explicitly when another skill owns the main decision
- use `mournival-architecture` for final evidence acceptance, go/no-go review,
  or productive-use governance of AI-generated architecture artifacts

This borrows the useful Caveman discipline without importing Caveman behavior:
short scoped changes, proof via receipt, and no unrelated refactors.

## Skill Quality Tests

The superrepo contains repeatable quality tests for all realized skills except
`caveman-skill`, which is intentionally evaluated separately because it has a
different communication-mode purpose.

Run the quality tests:

```powershell
npm test
```

Generate the current quality assessment table:

```powershell
npm run quality
```

The tests check:

- required `SKILL.md` contract sections
- concrete trigger description and do-not-use boundaries
- evidence, traceability, assumptions, gaps, and Evidence Receipt support
- `agents/openai.yaml`
- linked references and reusable assets
- actionable slash modes
- handoffs and diagram scope

Current assessment:

| Repo | Skill | Type | Score | Main Gaps |
| --- | --- | --- | ---: | --- |
| `azure-architecture-skill` | `azure-architecture` | realized | 100 | None |
| `domain-driven-design-skill` | `domain-driven-design` | realized | 98 | Trigger/boundary wording can be slightly sharper. |
| `dotnet-engineering-skill` | `dotnet-engineering` | realized | 100 | None |
| `enterprise-architecture-skill` | `enterprise-architecture` | realized | 100 | None |
| `enterprise-security-architecture-skill` | `enterprise-security-architecture` | realized | 98 | Trigger/boundary wording can be slightly sharper. |
| `mournival-architecture-skill` | `mournival-architecture` | realized | 95 | Trigger/boundary wording and mode actionability can be sharpened. |
| `skill-author-skill` | `skill-author` | realized | 98 | Diagram scope is checked; remaining gap is minor handoff wording. |
| `software-architecture-skill` | `software-architecture` | realized | 100 | None |
| `solution-architecture-skill` | `solution-architecture` | realized | 100 | None |
| `single-skill-template` | `example-skill` | template | 88 | Template is assessed separately; default `agents/openai.yaml` and generated icon support are now included. Remaining gaps are lower mode count and no diagram capability. |

Interpretation:

- `95-100`: production-ready contract.
- `90-94`: production-ready with minor authoring polish.
- `85-89`: usable but should be improved before adding more capabilities.
- `<85`: block release for realized skills until quality gaps are fixed.

Handoff map:

| From | Hand Off To | When |
| --- | --- | --- |
| `enterprise-architecture` | `enterprise-security-architecture` | Threats, controls, data classification, residual risk, security approval |
| `enterprise-architecture` | `solution-architecture` | Concrete initiative, product, or system needs executable solution design |
| `enterprise-architecture` | `software-architecture` or `domain-driven-design` | Code-level design, service boundaries, Clean Architecture, Clean Coding, deep DDD |
| `enterprise-security-architecture` | `enterprise-architecture` | Capability, portfolio, roadmap, operating model, general target architecture |
| `solution-architecture` | `enterprise-architecture` | Capability strategy, portfolio, operating model, or long-range enterprise roadmap |
| `solution-architecture` | `software-architecture` or `domain-driven-design` | Deep module/service design, Clean Architecture internals, tactical DDD, aggregates, event storming |
| `solution-architecture` | `azure-architecture` or `dotnet-engineering` | Azure platform/landing-zone decisions or .NET implementation details |
| `solution-architecture` | `enterprise-security-architecture` | Threats, controls, Zero Trust, residual risk, or security approval |
| `enterprise-security-architecture` | `software-architecture` or `domain-driven-design` | API design, code structure, bounded contexts, aggregates when security is not the main question |
| `azure-architecture` | Specialized Azure skills | Deployment, validation, diagnostics, cost, RBAC, inventory, service-specific operations |
| `azure-architecture` | `dotnet-engineering` | .NET code, ASP.NET Core, EF Core, package, test, or Azure SDK implementation details |
| `dotnet-engineering` | `azure-architecture` | Azure landing zone, hosting topology, networking, governance, platform, or subscription design |
| `dotnet-engineering` | `software-architecture` | Broad software architecture where .NET-specific details are not the main issue |
| `software-architecture` | `enterprise-architecture` | Enterprise capability, portfolio, roadmap, or operating model decisions |
| `software-architecture` | `enterprise-security-architecture` | Security controls, approval, threat model, high or critical security risk |
| `software-architecture` | `domain-driven-design` | Deep context mapping, subdomain classification, event storming, aggregate modeling |
| `domain-driven-design` | `software-architecture` | Deployment, APIs, quality attributes, Clean Architecture, integration design |
| `domain-driven-design` | `enterprise-architecture` | Capability model, portfolio, roadmap, operating model |
| Any architecture skill | `mournival-architecture` | Evidence acceptance, final gate, traceability, productive-use governance, AI-generated claim review |
| Any skill repo change | `skill-author` | Create/refine skill contract, evidence rules, modes, handoffs, validation, release, or AgentSkills catalog update |
| `skill-author` | `single-skill-template` | Need the base scaffold for a new single-skill repository |
| `skill-author` | Domain skill | Need actual domain content, decisions, standards, diagrams, or review outside skill-authoring |

Diagram scope:

| Skill | Diagram Scope |
| --- | --- |
| `enterprise-architecture` | Capability maps, application landscapes, data/integration views, technology landscapes, roadmap diagrams, governance flows, ArchiMate-style enterprise views |
| `enterprise-security-architecture` | Trust boundaries, security data flows, attack paths without exploit detail, control maps, Zero Trust views, AI security flows |
| `azure-architecture` | Landing zones, management groups, subscriptions, hub-spoke, Private Link, governance, monitoring, migration, and Azure service topology |
| `dotnet-engineering` | C4, ASP.NET Core request pipeline, EF Core/data access, Clean Architecture, dependency, sequence, and Azure SDK integration diagrams |
| `software-architecture` | C4, sequence, component, deployment, Clean Architecture, API, event, data ownership, and Clean AI software diagrams |
| `solution-architecture` | C4 context/container/component, integration, data flow, sequence, deployment, runtime, NFR, and solution roadmap diagrams |
| `domain-driven-design` | Context maps, subdomain maps, aggregate boundaries, domain event flows, event storming summaries, ubiquitous language maps |
| `mournival-architecture` | Evidence traceability, role finding flow, decision flow, veto maps, review states, productive-use gates |
| `skill-author` | Skill contract flow, evidence traceability for skill changes, Gitflow/release flow, submodule maintenance flow |

Use Mermaid for quick Markdown-native diagrams. Use PlantUML or C4-style
notation when the diagram should be kept as architecture-as-code or needs a
stable layered structure.

### Azure Architecture

Use `azure-architecture` when the main question is:

```text
How should this Azure platform or workload architecture be structured, governed,
reviewed, and routed to execution?
```

Typical work:

- Azure target architecture
- landing zone structure
- management groups and subscriptions
- hub-spoke, Virtual WAN, Private Link, DNS, ingress, and egress
- Azure governance, policy, tagging, naming, and RBAC model
- Azure Well-Architected review
- Cloud Adoption Framework alignment
- migration positioning
- Azure architecture diagrams
- routing to specialized Azure skills

Example prompts:

```text
Use azure-architecture /azure landing-zone to design a landing zone for
regulated production workloads with hub-spoke networking, policy, logging, and
subscription separation.
```

```text
Use azure-architecture /azure route to decide whether this request belongs to
azure-prepare, azure-deploy, azure-validate, azure-diagnostics, azure-cost, or
another Azure skill.
```

Main modes:

- `/azure assess`
- `/azure target`
- `/azure landing-zone`
- `/azure waf`
- `/azure governance`
- `/azure migration`
- `/azure diagram`
- `/azure route`

Output focus:

- Azure architecture decisions
- landing zone and governance structure
- WAF/CAF alignment
- risks and gaps
- diagrams
- execution handoffs

### .NET Engineering

Use `dotnet-engineering` when the main question is:

```text
How should this .NET system be designed, implemented, tested, modernized, and
operated?
```

Typical work:

- C# and .NET review
- ASP.NET Core, Minimal APIs, Web APIs, Blazor, worker services
- EF Core and data access
- dependency injection, options, configuration, logging
- .NET Clean Architecture
- unit, integration, contract, and architecture tests
- performance and diagnostics
- modernization and package review
- Azure SDK integration from .NET
- .NET diagrams

Example prompts:

```text
Use dotnet-engineering /dotnet api to review this ASP.NET Core API for endpoint
structure, validation, error handling, DI lifetimes, logging, and tests.
```

```text
Use dotnet-engineering /dotnet azure to review this service's Azure SDK,
managed identity, Key Vault, Service Bus, and observability integration.
```

Main modes:

- `/dotnet assess`
- `/dotnet api`
- `/dotnet data`
- `/dotnet clean-architecture`
- `/dotnet testing`
- `/dotnet performance`
- `/dotnet upgrade`
- `/dotnet azure`
- `/dotnet diagram`

Output focus:

- concrete .NET findings
- project and package guidance
- API/data/test/performance recommendations
- modernization path
- Azure integration handoffs
- diagrams

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
- `/ea diagram`

Output focus:

- business outcome
- capability impact
- architecture options
- CSVLOD artifact map
- EA one-page summary
- Mermaid, PlantUML, C4, or ArchiMate-style enterprise diagrams
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
- `/esa clean-ai`
- `/esa diagram`

Output focus:

- assets and data classification
- trust boundaries
- threats and risks
- controls
- residual risk
- blocked and allowed next steps
- AI security boundaries and residual risk
- Mermaid or PlantUML security diagrams

### Software Architecture

Use `software-architecture` when the main question is:

```text
How should this software system be structured, integrated, tested, and evolved?
```

Typical work:

- service and module boundaries
- lightweight Domain-Driven Design handoff
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
- `/sa diagram`

Output focus:

- domain and use cases
- bounded contexts
- module/service boundaries
- Clean Architecture dependency rule
- code maintainability findings
- integration contracts
- ADR candidates
- Clean AI design concerns
- Mermaid, PlantUML, or C4 software diagrams

### Solution Architecture

Use `solution-architecture` when the main question is:

```text
How should this concrete solution be structured end to end so it can be built,
integrated, operated, and governed?
```

Typical work:

- solution context and system boundary
- actors, external systems, components, integrations, and data flows
- quality attributes and non-functional requirements
- deployment/runtime topology
- solution-level ADRs and trade-off analysis
- implementation roadmap and delivery slices
- Clean AI at solution level
- Mermaid, PlantUML, C4, sequence, component, data-flow, and deployment diagrams
- handoffs from EA intent to Software, Azure, .NET, DDD, Security, and Mournival

Example prompts:

```text
Use solution-architecture /sol design to create a target solution architecture
for this customer portal with APIs, events, data ownership, NFRs, deployment
view, decisions, risks, and implementation slices.
```

```text
Use solution-architecture /sol assess to review this proposed solution and
identify gaps, risks, ADRs, handoffs, and diagrams needed before build starts.
```

Main modes:

- `/sol assess`
- `/sol design`
- `/sol options`
- `/sol adr`
- `/sol integration`
- `/sol nfr`
- `/sol roadmap`
- `/sol ai`
- `/sol diagram`

Output focus:

- context, boundary, and actors
- components and responsibilities
- integrations and data flows
- quality attributes and NFRs
- solution decisions and ADR candidates
- roadmap and implementation slices
- evidence, assumptions, gaps, and handoffs
- Mermaid, PlantUML, or C4 solution diagrams

### Domain-Driven Design

Use `domain-driven-design` when the main question is:

```text
What are the right domain boundaries, language, aggregates, events, and context
relationships?
```

Typical work:

- ubiquitous language
- subdomain classification
- bounded contexts
- context maps
- aggregate design
- domain events
- event storming
- legacy decomposition
- DDD review of service splits

Example prompts:

```text
Use domain-driven-design /ddd context-map to identify bounded contexts,
upstream/downstream relationships, anti-corruption layers, and integration
risks for this domain.
```

```text
Use domain-driven-design /ddd aggregate to design aggregates, invariants,
commands, and domain events for this order management process.
```

Main modes:

- `/ddd discover`
- `/ddd context-map`
- `/ddd subdomains`
- `/ddd aggregate`
- `/ddd events`
- `/ddd event-storm`
- `/ddd review`
- `/ddd diagram`

Output focus:

- domain terms
- bounded contexts
- context relationships
- subdomain type
- aggregates and invariants
- domain events
- open domain questions
- Mermaid or PlantUML DDD diagrams

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

Role collaboration:

- Assurance determines what can be treated as evidence.
- Risk evaluates material harm, misuse, compliance, security, and semantic
  drift based on evidence, assumptions, and gaps.
- Value checks usability and stakeholder clarity without weakening evidence or
  hiding risk.
- Decision consolidates the result into allowed next steps, blocked next steps,
  required actions, and final status.
- Decision must not override Assurance or Risk vetoes; unresolved disagreement
  remains visible and the stricter evidence or risk position controls
  productive-use status.

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
- `/mournival diagram`

Output focus:

- separate steward reviews
- hard vetoes
- evidence gaps
- human review need
- blocked next steps
- consolidated decision
- Mermaid or PlantUML governance diagrams

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
- generated SVG skill icons wired through `agents/openai.yaml`
- validation script
- package script
- GitHub Actions validation
- install documentation

### Skill Author

Use `skill-author` when the main question is:

```text
How should this agent skill be created, refined, validated, released, adapted
for Codex/Claude/Cursor/Windsurf/Cline, and kept traceable in AgentSkills?
```

Typical work:

- create a new skill repo from `single-skill-template`
- refine `SKILL.md` triggers, modes, roles, handoffs, boundaries, and output
  contracts
- add or repair evidence and traceability behavior
- align `agents/openai.yaml`, including display name, description, and icon assets
- define support for Codex, Claude, Cursor, Windsurf, Cline, or another agent
  host
- run validation, tests, packaging, and focused diff review
- commit and push the skill repo
- add or update the AgentSkills submodule pointer
- update README, AGENTS, install examples, and use-case docs

Example prompts:

```text
Use skill-author /skill-author create to build a new solution-architecture-skill
from single-skill-template and add it to AgentSkills.
```

```text
Use skill-author /skill-author evidence to repair traceability rules in this
skill and update the Superrepo README if the output contract changed.
```

```text
Use skill-author /skill-author agents to adapt this skill for Claude and Cursor
without losing Codex install support.
```

Main modes:

- `/skill-author plan`
- `/skill-author create`
- `/skill-author refine`
- `/skill-author evidence`
- `/skill-author handoffs`
- `/skill-author catalog`
- `/skill-author validate`
- `/skill-author release`
- `/skill-author forward-test`
- `/skill-author agents`
- `/skill-author feedback`

Output focus:

- skill contract decisions
- changed artifacts
- validation status
- Evidence Receipt
- Gitflow and submodule actions
- target-agent compatibility notes
- README/AGENTS/catalog updates

## Choosing The Right Skill

Use this decision guide:

| Need | Skill |
| --- | --- |
| Azure landing zone, WAF, governance, Azure architecture routing | `azure-architecture` |
| .NET, C#, ASP.NET Core, EF Core, tests, performance, modernization | `dotnet-engineering` |
| Business architecture direction, target state, roadmap | `enterprise-architecture` |
| Concrete solution design, NFRs, integrations, deployment view, ADRs | `solution-architecture` |
| Software design, Clean Architecture, Clean Coding | `software-architecture` |
| Deep DDD, bounded contexts, aggregates, event storming | `domain-driven-design` |
| Security design, threats, controls, residual risk | `enterprise-security-architecture` |
| Evidence/risk/value/decision governance review | `mournival-architecture` |
| Lean cross-cutting architecture decision, pragmatic trade-off, delivery triage, concept/specification, or tool-oriented diagram/model output | `pragmatic-enterprise-solution-architect` |
| Shorter agent communication | `caveman` |
| Build or refine a skill repo with validation, evidence, Gitflow, target-agent support, and catalog updates | `skill-author` |
| Base scaffold for a new skill repo | `single-skill-template` |

If a task crosses skills:

1. Use `enterprise-architecture` for business/target/roadmap structure.
2. Use `solution-architecture` for concrete end-to-end solution design,
   integrations, quality attributes, deployment view, ADRs, and build roadmap.
3. Use `pragmatic-enterprise-solution-architect` when the decision spans EA and
   SA but needs a lean, delivery-ready trade-off before deeper design.
4. Use `azure-architecture` for Azure platform, landing zone, governance,
   workload architecture, and Azure execution routing.
5. Use `dotnet-engineering` for .NET implementation, ASP.NET Core, EF Core,
   testing, performance, modernization, and Azure SDK integration.
6. Use `domain-driven-design` for deep domain modeling, bounded contexts,
   aggregates, event storming, and context maps.
7. Use `software-architecture` for system/service design, Clean Architecture,
   Clean Coding, integration, ADRs, and Clean AI design boundaries.
8. Use `enterprise-security-architecture` for security-specific review,
   controls, and AI security.
9. Use `mournival-architecture` for final governance decision when evidence,
   risk, value, and approval must be separated.
10. Use `skill-author` when the task is about the skills themselves: new skill
   repos, skill contracts, evidence rules, validation, release, Codex/Claude/
   Cursor/Windsurf/Cline support, or Superrepo catalog maintenance.

## Install Examples

Install one skill for Codex:

```powershell
npx -y skills add MartinEgli/enterprise-architecture-skill --skill * -a codex --yes
```

Install all current domain skills:

```powershell
npx -y skills add MartinEgli/enterprise-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/azure-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/dotnet-engineering-skill --skill * -a codex --yes
npx -y skills add MartinEgli/solution-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/domain-driven-design-skill --skill * -a codex --yes
npx -y skills add MartinEgli/software-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/pragmatic-enterprise-solution-architect-skill --skill * -a codex --yes
npx -y skills add MartinEgli/enterprise-security-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/mournival-architecture-skill --skill * -a codex --yes
npx -y skills add MartinEgli/skill-author-skill --skill * -a codex --yes
```

## Docs

- [Codex Skill Files](docs/codex-skill-files.md): minimum files Codex needs,
  optional quality structure, install pattern, and validation standard.
- [Agent Skill Surfaces](docs/agent-skill-surfaces.md): how skill contracts can
  be represented for Claude Code, Cursor, Cline, Windsurf, and other agent
  hosts without losing the canonical `SKILL.md` contract.
- [Skill Use Cases](docs/skill-use-cases.md): detailed descriptions, inputs,
  outputs, handoffs, and use cases for every skill.

## Submodules

- `caveman-skill` -> `https://github.com/MartinEgli/caveman-skill.git`
- `azure-architecture-skill` -> `https://github.com/MartinEgli/azure-architecture-skill.git`
- `domain-driven-design-skill` -> `https://github.com/MartinEgli/domain-driven-design-skill.git`
- `dotnet-engineering-skill` -> `https://github.com/MartinEgli/dotnet-engineering-skill.git`
- `enterprise-architecture-skill` -> `https://github.com/MartinEgli/enterprise-architecture-skill.git`
- `enterprise-security-architecture-skill` -> `https://github.com/MartinEgli/enterprise-security-architecture-skill.git`
- `pragmatic-enterprise-solution-architect-skill` -> `https://github.com/MartinEgli/pragmatic-enterprise-solution-architect-skill.git`
- `skill-author-skill` -> `https://github.com/MartinEgli/skill-author-skill.git`
- `single-skill-template` -> `https://github.com/MartinEgli/single-skill-template.git`
- `mournival-architecture-skill` -> `https://github.com/MartinEgli/mournival-architecture-skill.git`
- `software-architecture-skill` -> `https://github.com/MartinEgli/software-architecture-skill.git`
- `solution-architecture-skill` -> `https://github.com/MartinEgli/solution-architecture-skill.git`

## Clone

```powershell
git clone --recurse-submodules https://github.com/MartinEgli/AgentSkills.git
```

## Update Submodules

```powershell
git submodule update --init --recursive
git submodule update --remote --merge
```
