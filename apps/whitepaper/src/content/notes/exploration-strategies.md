---
title: Exploration Strategies
description: Graph traversal strategies for continuous knowledge discovery
---

# Exploration Strategies

[Coscientist](./coscientist) requires an engine that continuously searches for new approaches. For that, the [Dialectical Graph](./dialectical-graph) needs exploration strategies that go beyond simple retrieval.

## 1. Counterexample-First Search

Popularity is treated not as evidence of quality, but as evidence of risk.

The more frequently a claim is cited, the more the system prioritizes collecting its counterexamples and boundary conditions. Why? Because contamination from popular claims has larger blast radius in [Encyclopedia Meltdown](./encyclopedia-meltdown).

## 2. Contradiction Minimum-Cut Search

When claim sets conflict, find the minimal set of edges and premises that produce the conflict. That minimal set becomes the target of contemplation.

**Human time must be invested in the minimum contradiction set.** AI handles broad search, candidate generation, and minimum-cut computation; humans judge the legitimacy of definitions and premises.

## 3. Definition Drift Detection

When the meaning of the same term shifts subtly across time, schools, or fields, the graph records changes in definition nodes and moves old documents' claims into a meaning-loss state.

This counters [RAG](./rag-limitations)'s most common error: assuming the same word implies the same concept.

## 4. Method-Conclusion Coupling Verification

Cluster claim groups around methods rather than conclusions:
- Different conclusions can share the same flaw
- Identical conclusions can have different strengths of grounds

This moves toward a model where knowledge quality depends not on the direction of a conclusion, but on the durability of the path that produced it.

## 5. Replication Path Separation

Support is computed not by repeating the same conclusion, but by whether the conclusion was reached through **independent paths**.

The same dataset, the same code, the same lab, or the same theoretical assumptions count as a single path. This is a graph-level mechanism for removing the illusion of majority vote.

## AI Agents for Contemplation

The contemplation AI does not simply output answers. Instead, it operates through specialized agents:

1. Claim normalization agent
2. Hidden assumption extraction agent
3. Definition conflict detection agent
4. Counterexample search agent
5. Argumentative path minimization agent (minimum cut)
6. Condition and scope reconstruction agent
7. Alternative hypothesis generation agent
8. Empirical format and verification strategy design agent
