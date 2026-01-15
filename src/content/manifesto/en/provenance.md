---
title: Provenance
description: The origin and chain of custody for claims and evidence
---

Provenance is the origin and custody chain of a claim or piece of evidence: who
asserted it, when, based on what, and how it reached its current form. Without
provenance, you cannot distinguish primary sources from repackaged summaries,
and you cannot know whether apparent agreement reflects independent evidence or
circular citation.

In a [Dialectical Graph](./dialectical-graph), provenance is encoded through
[source](./source) nodes, [evidence spans](./evidence-span), and `cites` edges
that make attribution explicit rather than implied by prose. This prevents the
excerpt truncation problem common in [RAG](./rag-limitations), where quoting
drops context and the [responsibility line](./responsibility-line) disappears.

Provenance is a prerequisite for [traceability](./traceability): if you cannot
trace a claim to its origin, you cannot correct it when the world changes.
