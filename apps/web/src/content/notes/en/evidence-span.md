---
title: Evidence Span
description: An exact quoted range from a source that supports or challenges a claim
---

An evidence span is the exact quoted text from a source that supports or
challenges a [claim](./claim). It preserves the original wording and context so
that later readers can see what was actually said, not a paraphrase or summary
that may have drifted.

In a [Dialectical Graph](./dialectical-graph), evidence spans are stored as
nodes with links to their [source](./source) and to the claims they bear on.
This is the first layer of the [triple separation](./triple-separation): raw
text preserved, claims normalized, relations explicit.

Evidence spans prevent the excerpt truncation problem in
[RAG](./rag-limitations), where quoting can silently drop attribution and leave
only the conclusion, severing the [responsibility line](./responsibility-line).
