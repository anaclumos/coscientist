---
title: Dialectical Graph Edges
description: "The relation types connecting nodes in a dialectical knowledge graph"
---

In a [Dialectical Graph](./dialectical-graph), edges encode relation types
rather than similarity scores (see [Argumentative Relations](./arguementative-relations)). The value is that you can ask "how does this bear
on that?" rather than only "are these about the same topic?"

Common relation types include:

- Support: `supports`
- Challenge: `attacks`, `undercuts`, `contradicts`
- Refinement and scope: `refines`, `generalizes`, `specializes`, `depends_on`
- Provenance and measurement: `cites`, `defines`, `measures`
- Replication: `replicates`, `fails_to_replicate`
- Optional topical links: `is_about`

Typed edges enable knowledge updating through rebuttal chains, detection of
definition conflicts, and tracking of replication status. These are capabilities
that similarity-based retrieval struggles to represent. They also support
quality assessment: knowledge quality depends less on the direction of a
conclusion and more on the durability of the path that produced it, and edges
encode that path structure across nodes (see [Dialectical Graph Nodes](./dialectical-graph-nodes)) and other [Graph Components](./graph-components).
