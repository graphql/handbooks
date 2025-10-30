---
title: Shepherding Spec Proposals
sidebar_position: 4
---

:::warning Only need the template?
Scroll down to [Proposal Packet](#proposal-packet) for the files you must prepare.
:::

Spec proposals often begin in a working group but require TSC alignment for final approval. Use this guide to navigate the process.

## Lifecycle at a Glance

1. **Ideation:** Capture the problem statement in a GitHub discussion or RFC draft.
2. **Working Group Review:** Present the idea, gather implementer feedback, and iterate.
3. **Experimental Implementations:** Build proof-of-concepts to validate feasibility and surface edge cases.
4. **Draft Proposal:** Convert the RFC into normative specification language.
5. **TSC Review:** Request agenda time for formal approval or direction.
6. **Merge & Release:** Update the spec repository, note compatibility considerations, and communicate broadly.

## TSC Expectations

- Demonstrate consensus or clearly document dissent within the originating working group.
- Provide evidence of at least two independent implementations when possible.
- Highlight interoperability risks, migration plans, and expected ecosystem impact.
- Surface open questions with proposed owners or milestones.

## Proposal Packet

Prepare the following materials before the TSC review:

- **Executive Summary:** One page covering the problem, solution outline, and stakeholder alignment.
- **Specification Diffs:** Links to PRs that show precise normative language.
- **Implementation Notes:** Status of reference implementations, tests, and tooling updates.
- **Change Management Plan:** Rollout strategy, communication timeline, and fallback path.

## Post-Approval Checklist

- Merge spec changes with reviewer sign-off from editors.
- Update conformance test suites and sample queries as needed.
- Coordinate documentation updates across graphql.org and related repos.
- Announce the change through blog posts, working group updates, and social channels.
