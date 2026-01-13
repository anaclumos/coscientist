---
title: Knowledge Synthesis
description: How synthesis differs from averaging in dialectical knowledge systems
---

Knowledge synthesis is what happens after retrieval when you have to make incompatible sources comparable. It is not averaging. It is aligning premises, definitions, and scope so disagreements become explicit objects instead of noise.

Standard [RAG](./rag-limitations) is strong at retrieval and weak at synthesis because it has no internal object called [contention](./contention). In a [Dialectical Graph](./dialectical-graph), contention is first-class, so the system can decompose incompatibility into its causes: definition differences, sampling differences, method differences, scope differences, or time-driven [nonstationarity](./nonstationarity).

Resolution is therefore not a single sentence. It is a branched map: if the same term yields different conclusions under different definitions, the system records the branching at the definition layer before treating it as a contradiction in conclusions. [Issue nodes](./dialectical-graph-nodes) bundle what conflicts with what and record the conditions under which the issue can be resolved.

The goal is a map of contradictions plus explicit resolution conditions, so future work can update knowledge by rearrangement rather than rewriting. This is why the contemplation AI in [Coscientist](./coscientist) is aimed at making documents collide: producing issue clusters, refined conditions, structured rebuttals, and explicit coordinate systems for comparison.
