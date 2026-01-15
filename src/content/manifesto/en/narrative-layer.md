---
title: Narrative Layer
description: Time-stamped projections of the dialectical graph suitable for human reading
---

The narrative layer is the human-readable projection of a
[Dialectical Graph](./dialectical-graph): documents, summaries, and explanations
generated from the underlying [inference layer](./inference-layer). Narratives
are time-stamped and versioned; they represent what the graph said at a
particular moment.

This separation matters because knowledge evolves but documents persist. If you
treat a document as the source of truth, it can become stale or misleading as
the graph updates. By treating narratives as snapshots,
[Coscientist](./coscientist) makes explicit that prose is derived, not primary.

Every sentence in a narrative should be traceable back through
[claims](./claim), [evidence spans](./evidence-span), and [sources](./source).
Without that chain, a sentence is just a sentence, not verified knowledge.
