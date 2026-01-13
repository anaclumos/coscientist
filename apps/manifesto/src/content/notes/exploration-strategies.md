---
title: Exploration Strategies
description: Graph traversal strategies for continuous knowledge discovery
---

[Coscientist](./coscientist) needs an engine that does more than retrieve; it continuously searches for new approaches by actively surfacing contradictions, boundary conditions, and method dependence in the [Dialectical Graph](./dialectical-graph).

One strategy is counterexample-first search: popularity is treated less as evidence of quality and more as evidence of risk. The more widely a claim is repeated, the more valuable it becomes to collect counterexamples and boundary conditions, because contamination from popular claims has a larger blast radius in [Encyclopedia Meltdown](./encyclopedia-meltdown).

Another strategy is contradiction minimum-cut search. When claim clusters conflict, the system looks for the minimal set of premises and relations that generate the conflict, then targets that structure for contemplation. Human time is invested in the [minimum contradiction set](./minimum-contradiction-set), while AI handles broad search, candidate generation, and [minimum-cut](./minimum-cut) computation.

Definition drift detection treats meaning as a moving object. When a term's definition shifts across time or communities, the graph records the change explicitly (see [definition drift](./definition-drift)) instead of assuming a shared concept, which counters a common failure mode of [RAG](./rag-limitations).

Method–conclusion coupling verification clusters claims by method rather than by conclusion, because different conclusions can share the same flaw and identical conclusions can rest on very different grounds. Replication path separation similarly avoids "majority vote" by asking whether support comes from independent paths rather than repeated restatements.

These behaviors are implemented as specialized agents, including claim normalization, hidden assumption extraction, definition conflict detection, counterexample search, argumentative path minimization, scope reconstruction, alternative hypothesis generation, and verification strategy design. This decomposition makes contemplation work explicit and checkable.
