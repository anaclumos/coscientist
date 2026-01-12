---
title: Dialectical Graph Edges
description: The relation types connecting nodes in a dialectical knowledge graph
---

# Dialectical Graph Edges

In a [Dialectical Graph](./dialectical-graph), edges store relation types rather than similarity scores. Understanding the type of relation is more valuable than knowing "how similar" two pieces of text are.

## Edge Types

### supports
Support relationship. One claim provides grounds for another.

### attacks
Attack or rebuttal. Direct challenge to a claim's conclusion.

### undercuts
Undermine a premise. This is an area standard RAG can barely handle. It represents not "the conclusion is wrong," but "the method, assumption, or definition that supports the conclusion is undermined."

Understanding `undercuts` is critical because only by representing this can knowledge actually update.

### refines
Refinement. Adds precision or nuance to an existing claim.

### generalizes / specializes
Scope relationships. One claim broadens or narrows another.

### depends_on
Dependence. One claim cannot stand without another.

### defines
Provides a definition for a term used in claims.

### measures
Measurement relation. Links data to the method that produced it.

### cites
Citation. Explicit attribution chain.

### replicates / fails_to_replicate
Replication status. Critical for scientific claims where independent verification matters.

### contradicts
Direct contradiction. Two claims cannot both be true under the same conditions.

### is_about
Topic linkage. Connects nodes to subject matter.

## Why Relation Types Matter

Standard [RAG](./rag-limitations) retrieves by similarity. A dialectical graph retrieves by relation type, enabling:

- Knowledge updating through rebuttal chains
- Detection of definition conflicts
- Tracking of replication status
- Understanding of what actually undermines a claim (undercuts vs. attacks)

## Quality Assessment

Knowledge quality depends not on the direction of a conclusion, but on the durability of the path that produced it. Edges encode this path structure.
