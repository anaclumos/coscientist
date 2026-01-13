---
title: Dialectical Graph
description: A knowledge graph model that stores claims and relations rather than document content
---

A dialectical graph is a knowledge graph that stores argumentative structure (claims, definitions, assumptions, methods, evidence spans, and the relations among them) rather than treating documents as undifferentiated text. The core insight is simple: do not mistake text for knowledge. Text is packaging; knowledge is the constraint structure that lets claims support, attack, and refine one another.

[Coscientist](./coscientist) enforces a triple separation: original text is preserved as quotable evidence spans; claims are decomposed into normalized propositions; and relations are stored as explicit argumentative bindings. This is a structural fix for a common RAG failure mode: excerpt truncation. The evidence span keeps the exact wording and source, the claim records who asserted what, and a `cites` edge makes attribution explicit instead of implied by prose.

The graph also separates an inference layer (the evolving claim network) from a narrative layer (a time-stamped projection suitable for reading). A document is not final truth; it is a snapshot of the graph. Every sentence should be able to backtrack through claim, scope, assumption, method, data, evidence span, and source. Without that chain, a sentence is just a sentence, not knowledge.

To act as a brake on [Encyclopedia Meltdown](./encyclopedia-meltdown), the system prioritizes contradictions and counterexamples rather than consensus. When a claim enters the graph, the default posture is adversarial: seek attacks and undercuts early so the structure updates by rebuttal instead of drifting by repetition. For concrete node and relation types, see [Dialectical Graph Nodes](./dialectical-graph-nodes) and [Dialectical Graph Edges](./dialectical-graph-edges).
