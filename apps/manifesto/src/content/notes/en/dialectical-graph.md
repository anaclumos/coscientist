---
title: Dialectical Graph
description: "A knowledge graph model that stores claims and relations rather than document content"
sourceLocale: en
sourceHash: ""
translatedAt: 2023-10-01
---

A dialectical graph is a knowledge graph that stores argumentative structure rather than treating documents as undifferentiated text. The core insight is simple: do not mistake text for knowledge. Text is packaging; knowledge is the constraint structure that lets claims support, attack, and refine one another. For background on how this approach evolves beyond document-centric systems, see [From Memex to Dialectical Graph](./from-memex-to-dialectical-graph).

[Coscientist](./coscientist) enforces a triple separation: original text is preserved as quotable evidence spans; claims are decomposed into normalized propositions; and relations are stored as explicit argumentative bindings. This is a structural fix for a common [RAG](./rag) failure mode: excerpt truncation. The evidence span keeps the exact wording and source, the claim records who asserted what, and a `cites` edge makes attribution explicit instead of implied by prose.

The graph also separates an inference layer from a narrative layer. A document is not final truth; it is a snapshot of the graph. Every sentence should be able to backtrack through claim, scope, assumption, method, data, evidence span, and source. Without that chain, a sentence is just a sentence, not knowledge.

To act as a brake on [Encyclopedia Meltdown](./encyclopedia-meltdown), the system prioritizes contradictions and counterexamples rather than consensus (see [Graph as Meltdown Defense](./graph-as-meltdown-defense)). When a claim enters the graph, the default posture is adversarial: seek attacks and undercuts early so the structure updates by rebuttal instead of drifting by repetition. For concrete node and relation types, see [Dialectical Graph Nodes](./dialectical-graph-nodes) and [Dialectical Graph Edges](./dialectical-graph-edges), as well as [Graph Components](./graph-components).
