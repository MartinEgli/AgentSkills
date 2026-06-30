# Auditable Skill Feedback Loop

The best name for the concept is **Auditable Skill Feedback Loop** (ASFL).

ASFL is a controlled improvement model for agent skills. A skill may learn from
real usage, but only through documented feedback, evidence, reviewable
proposals, validation, versioned commits, and pushed repository history.

## Why This Name

| Candidate | Fit | Reason |
| --- | --- | --- |
| Auditable Skill Feedback Loop | Best | Names the core: skill improvement, feedback input, and auditability. |
| Evidence-Based Skill Improvement | Good | Strong on evidence, but less explicit about feedback and loop behavior. |
| SkillOps Feedback Loop | Good | Short and product-like, but less self-explanatory for governance. |
| Traceable Agent Skill Optimization | Good | Strong on traceability, but sounds more automated than governed. |
| Human-Governed Skill Learning | Partial | Clear governance, but sounds broader than the repo implementation. |

## Concept

ASFL prevents hidden self-modification. The skill does not silently change its
behavior after a run. Instead, it follows this route:

```text
feedback -> evidence -> improvement proposal -> feature branch -> validation ->
commit -> push -> version or changelog update when needed
```

## Scope

ASFL applies to:

- skill trigger descriptions
- do-not-use boundaries
- modes and roles
- handoffs
- evidence and traceability behavior
- output contracts
- examples, references, and templates
- validation and quality gates

ASFL does not mean:

- autonomous prompt mutation without review
- accepting model output as truth
- changing released behavior without validation
- hiding rejected or deferred feedback
- bypassing Gitflow, tests, or evidence rules

## Required Artifacts

Each realized skill and the template should maintain:

- `/<skill> feedback`
- `/<skill> improve`
- `references/feedback-route.md`
- `references/improvement-backlog.md`
- `assets/improvement-proposal-template.md`

## Verification Criteria

A skill follows ASFL when:

- feedback is classified as evidence, inference, assumption, gap, rejected,
  deferred, or routed
- proposed changes list affected files, risks, validation, versioning impact,
  and rollback considerations
- rejected and deferred ideas remain visible
- validation passes before merge
- changes are committed on a feature branch and pushed
- superrepo pointers and documentation are updated after skill repo changes

## Improvement Notes

Use ASFL as the common concept name in documentation and release notes. Use the
full name on first mention, then `ASFL` for short references.
