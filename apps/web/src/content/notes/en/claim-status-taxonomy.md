---
title: Claim Status Taxonomy
description: The states a claim can be in within a dialectical graph
---

The claim status taxonomy defines the states a [claim](./claim) can occupy in a
[Dialectical Graph](./dialectical-graph). For how a claim typically moves through
these states over time, see the [Claim Lifecycle](./claim-lifecycle).

## Common States

- `tentative` — hypothesis stage
- `contested` — active debate
- `conditionally supported` — true under specified conditions
- `robust` — supported via multiple independent paths
- `refuted` — collapsed by a [counterexample](./counterexample)
- `obsolete` — meaning lost due to [definition drift](./definition-drift) or
  method shift

Status is not a single confidence score. A claim can be robust on evidence
diversity but contested on scope; it can be conditionally supported in one
context and refuted in another. Multi-dimensional status captures this
complexity.

Transitions between states are driven by the kind of rebuttal, not the quantity.
A single well-evidenced [counterexample](./counterexample) can move a claim from
robust to refuted; many weak objections may leave it contested without
resolving. See [Status Transition Rules](./status-transition-rules) for the
formal transition logic.
