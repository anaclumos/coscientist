---
title: Knowledge System Layers
description: The architectural layers of Coscientist
---

Knowledge system layers are the distinct architectural components that make up
[Coscientist](./coscientist). Separating these layers enables different concerns
to evolve independently.

## Data Layer

- [Evidence Span](./evidence-span) — raw quoted text preserved verbatim
- [Source](./source) — provenance anchors for traceability

## Inference Layer

- [Inference Layer](./inference-layer) — the living, evolving network of claims
  and relations
- [Claim](./claim), [Attack](./attack), [Undercut](./undercut), and other
  [Argumentative Relations](./argumentative-relations)

## Narrative Layer

- [Narrative Layer](./narrative-layer) — human-readable projections of the graph
- Documents as time-stamped snapshots, not ground truth

## Protocol Layer

- [Epistemic Protocol Layer](./epistemic-protocol-layer) — rules for how claims
  enter and gain authority
- [Knowledge Constitution](./knowledge-constitution) — the governing document
  for knowledge operations

## Separation Principle

- [Triple Separation](./triple-separation) — keeping raw text, normalized
  claims, and relations distinct
