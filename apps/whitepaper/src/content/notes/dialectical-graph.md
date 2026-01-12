---
title: Dialectical Graph
description: A knowledge graph model that stores argumentative acts rather than document content
---

# Dialectical Graph

A Dialectical Graph is a Knowledge Graph that does not store a document's content as-is; it extracts and stores the **argumentative acts** performed by the document. The key insight: **do not mistake text for knowledge**.

## Core Principle

Text is packaging for evidence; knowledge is a structure in which claims, assumptions, scope, counterexamples, rebuttals, counter-rebuttals, definitions, measurement, methods, data, and more constrain one another.

## Triple Separation

The first separation [Coscientist](./coscientist) enforces is a triple separation:

1. **Original text** - Preserved as quotable spans (evidence spans)
2. **Claims** - Decomposed into normalized propositions
3. **Relations** - Expressed as argumentative bindings among claims

Standard RAG collects excerpts and stitches them into sentences. A dialectical graph isolates excerpts as evidence nodes, then builds claim nodes and relation edges above them to separate source, meaning, and role.

## Solving the Truncation Problem

The problem that meaning changes when an excerpt is truncated is structurally blocked by never treating the excerpt itself as a claim. When the evidence node carries the source and exact span, the claim node separately records who asserted what, and the `cites` edge explicitly represents the citation relationship.

## Structure

See [Dialectical Graph Nodes](./dialectical-graph-nodes) for node types and [Dialectical Graph Edges](./dialectical-graph-edges) for relation types.

## Prioritizing Contradiction

To prevent the "truth contamination by the majority" at the heart of [Encyclopedia Meltdown](./encyclopedia-meltdown), the system prioritizes contradictions and counterexamples rather than consensus. When a claim node is created, the system's default behavior is not to gather supporting grounds, but to maximize attacking edges.

## As a Meltdown Brake

The graph prevents meltdown by separating two layers:
- **Inference layer** - The truth graph itself
- **Narrative layer** - A projection of the truth graph at a specific time

A document is not final truth, but a snapshot of the graph. Every sentence must be able to backtrack to a path running through claim, assumption, method, data, evidence span, and source. **Without this chain, a sentence is just a sentence, not knowledge.**
