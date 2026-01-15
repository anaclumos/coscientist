---
title: Exploration Strategies
description: Graph traversal strategies for continuous knowledge discovery
---

[Coscientist](./coscientist) needs more than retrieval: it needs [exploration mechanisms](./exploration-mechanisms)
that actively surfaces contradictions, boundary conditions, and method
dependence in the [Dialectical Graph](./dialectical-graph).

Key strategies include:

- [Counterexample-First Search](./counterexample-first-search) — treat
  popularity as a risk signal; prioritize counterexamples and boundary
  conditions
- [Minimum Cut](./minimum-cut) — isolate the minimal structure that produces a
  contradiction, then focus attention on the
  [minimum contradiction set](./minimum-contradiction-set)
- [Definition Drift](./definition-drift) — detect meaning shifts instead of
  assuming shared concepts
- [Method-Conclusion Coupling](./method-conclusion-coupling) — cluster claims by
  method to find shared flaws
- [Replication Path Separation](./replication-path-separation) — distinguish
  independent evidence from repeated restatements

In implementation, these show up as specialized agents for normalization,
assumption extraction, counterexample search, scope reconstruction, and
verification strategy design.
