---
title: Dialectical Graph Edges
description: The relation types connecting nodes in a dialectical knowledge graph
---

In a [Dialectical Graph](./dialectical-graph), edges encode relation types rather than similarity scores. The value is that you can ask "how does this bear on that?" rather than only "are these about the same topic?"

Typical relations include `supports`, `attacks`, and `undercuts` (method/assumption/definition-level challenges); refinement and scope relations such as `refines`, `generalizes`, `specializes`, and `depends_on`; provenance links such as `cites`, `defines`, `measures`, `replicates`, and `fails_to_replicate`; and outright conflicts such as `contradicts`. Some graphs also use loose topical links like `is_about`, but the epistemic work comes from typed argumentative edges.

Typed edges enable knowledge updating through rebuttal chains, detection of definition conflicts, and tracking of replication status. These are capabilities that similarity-based retrieval struggles to represent (see [RAG limitations](./rag-limitations)). They also support quality assessment: knowledge quality depends less on the direction of a conclusion and more on the durability of the path that produced it, and edges encode that path structure.
