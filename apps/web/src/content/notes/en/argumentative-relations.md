---
title: Argumentative Relations
description: "Edge types in a dialectical graph organized by function"
---

Argumentative relations are the edge types in a
[Dialectical Graph](./dialectical-graph) (see also [Graph Components](./graph-components)) that encode how epistemic objects
relate to each other. They are what distinguish a dialectical graph from a
topic-similarity graph.

## Challenge Relations

- [Attack](./attack) — direct challenge to a claim's truth
- [Undercut](./undercut) — challenge to method, assumption, or definition
- [Counterexample](./counterexample) — a case that breaks the claim
- `contradicts` — explicit incompatibility

## Support Relations

- `supports` — evidence or reasoning that strengthens a claim
- `cites` — explicit attribution to a [source](./source)
- `replicates` / `fails_to_replicate` — replication status

## Refinement Relations

- `refines` — narrows or clarifies a claim
- `generalizes` / `specializes` — scope adjustments
- `depends_on` — links claims to their [assumptions](./assumption)
- `defines` — connects terms to their definitions

See [Dialectical Graph Edges](./dialectical-graph-edges) for full specification
and [Relation Typing vs Similarity](./relation-typing-vs-similarity) for why
typed edges matter.
