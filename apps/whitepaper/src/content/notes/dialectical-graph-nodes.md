---
title: Dialectical Graph Nodes
description: The node types in a dialectical knowledge graph
---

# Dialectical Graph Nodes

In a [Dialectical Graph](./dialectical-graph), nodes represent distinct epistemic objects rather than raw text. Each node type serves a specific function in the knowledge structure.

## Node Types

### 1. Claim
A proposition phrased in a form that can be verified or refuted. The atomic unit of argumentation.

### 2. Scope
Constraints of when, where, and under what conditions a claim applies. Without scope, claims falsely appear universal.

### 3. Assumption
Implicit assumptions required for the claim to hold. Often the hidden target of [undercut attacks](./dialectical-graph-edges).

### 4. Definition
How a term or concept is used. Definition drift across time, schools, or fields is a major source of false agreement and false contradiction.

### 5. Method
Experimental design, analysis method, proof technique, or interpretation rule. Different conclusions can share the same methodological flaw.

### 6. Data
Measurements, corpora, experimental results, or proven theorems' inputs. The empirical grounding of claims.

### 7. Evidence Span
The exact range of the source quotation. Preserves the original text as quotable, preventing truncation problems.

### 8. Source
Paper, book, record, interview, dataset, or code repository. The provenance anchor.

### 9. Counterexample
A case that breaks a claim or narrows its conditions. When a counterexample attaches, the claim is not discarded—it is conditioned. "Always true" descends to "true under conditions."

### 10. Issue
A bundle of specific claim clusters that collide. A first-class citizen in the [Dialectical Graph](./dialectical-graph) that records what conflicts with what and the conditions under which the issue can be resolved.

## Multi-Dimensional Claim Status

Claim status must be multi-dimensional rather than a single confidence score:

- `tentative` - Hypothesis stage
- `contested` - Active issue/debate
- `conditionally supported` - Supported under specific conditions
- `robust` - Supported via multiple independent paths
- `refuted` - Collapsed by counterexample
- `obsolete` - Meaning lost due to shifts in definition or method

State transitions are driven not by the number of rebuttals, but by the type of rebuttal and whether it succeeds.
