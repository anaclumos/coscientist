---
title: Graph Components
description: The node and edge types that make up a dialectical graph
---

Graph components are the building blocks of a
[Dialectical Graph](./dialectical-graph): the [Dialectical Graph Nodes](./dialectical-graph-nodes) that represent
epistemic objects and the [Dialectical Graph Edges](./dialectical-graph-edges) that represent [Argumentative Relations](./argumentative-relations) between them.

**Node types** ):

- [Claim](./claim) — verifiable propositions
- [Evidence Span](./evidence-span) — exact quoted text from sources
- [Scope](./scope) — conditions of applicability
- [Assumption](./assumption) — implicit premises
- [Method](./method) — procedures for generating evidence
- [Source](./source) — provenance anchors
- [Counterexample](./counterexample) — cases that break claims
- [Issue Node](./issue-node) — bundles of colliding claims

**Edge types** ):

- [Attack](./attack) — direct challenges to truth
- [Undercut](./undercut) — challenges to grounds
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contention](./contention) — structured conflict markers
