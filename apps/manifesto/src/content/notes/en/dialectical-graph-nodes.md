---
title: Dialectical Graph Nodes
description: The node types in a dialectical knowledge graph
---

In a [Dialectical Graph](./dialectical-graph), nodes represent epistemic objects rather than raw text. Common node types include claims (verifiable propositions), scope (conditions of applicability), assumptions (implicit premises), definitions (term meanings), methods (procedures), data (measurements or results), evidence spans (exact quoted ranges), sources (provenance anchors), counterexamples (cases that break or narrow claims), and issues (bundles of colliding claim clusters).

This decomposition prevents a common confusion: a document is not one thing. The same paper can introduce a definition, assert a claim, cite evidence, and rebut a prior result; each of those should remain addressable if you want knowledge to update instead of merely accumulate.

Claim status is also multi-dimensional rather than a single confidence score. A claim can be `tentative` (hypothesis stage), `contested` (active debate), `conditionally supported` (true under specified conditions), `robust` (supported via multiple independent paths), `refuted` (collapsed by a counterexample), or `obsolete` (meaning lost due to shifts in definition or method). Transitions are driven less by the number of rebuttals and more by the kind of rebuttal and whether it succeeds at the level of scope, assumption, definition, or method.
