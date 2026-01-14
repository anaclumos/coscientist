---
title: Dialectical Graph Nodes
description: The node types in a dialectical knowledge graph
---

In a [Dialectical Graph](./dialectical-graph), nodes represent epistemic objects rather than raw text. Common node types include:

- [Claim](./claim) — verifiable propositions
- [Scope](./scope) — conditions of applicability
- [Assumption](./assumption) — implicit premises
- Definitions — term meanings )
- [Method](./method) — procedures that generate evidence or conclusions
- Data — measurements or results
- [Evidence Span](./evidence-span) — exact quoted ranges
- [Source](./source) — provenance anchors
- [Counterexample](./counterexample) — cases that break or narrow claims
- [Issue Node](./issue-node) — bundles of colliding claim clusters

This decomposition prevents a common confusion: a document is not one thing. The same paper can introduce a definition, assert a claim, cite evidence, and rebut a prior result; each of those should remain addressable if you want knowledge to update instead of merely accumulate.

Claim status is multi-dimensional rather than a single confidence score ). Transitions are driven less by the number of rebuttals and more by the kind of rebuttal and whether it succeeds at the level of scope, assumption, definition, or method.
