---
title: Counterexample-First Search
description: Strategy prioritizing counterexamples over supporting evidence
---

Counterexample-first search is an
[exploration strategy](./exploration-strategies) that treats popularity as a
risk signal rather than evidence of quality. The more widely a [claim](./claim)
is repeated, the more valuable it becomes to find
[counterexamples](./counterexample) and boundary conditions, because errors in
popular claims have a larger blast radius in
[Encyclopedia Meltdown](./encyclopedia-meltdown).

This strategy inverts the normal retrieval priority. Standard search ranks by
relevance or frequency, which tends to surface agreement. Counterexample-first
search deliberately seeks disagreement, edge cases, and failures, because these
are more informative for updating knowledge.

It is related to but distinct from
[rebuttal-first search](./rebuttal-first-search), which is a validation protocol
for accepting claims. Counterexample-first search is a discovery strategy:
actively looking for what breaks rather than what confirms.
