---
title: RAG Limitations
description: Why standard retrieval-augmented generation cannot produce genuine discovery
---

Retrieval-augmented generation (RAG) improves factuality by retrieving relevant documents, but standard RAG still has structural limitations for knowledge production. It retrieves text snippets and produces fluent prose; it does not represent the objects you need for discovery: claims, counterclaims, definitions, methods, and the relations that bind them.

One failure mode is quantitative bias. If many sources repeat a claim and a small number contain decisive rebuttals or counterexamples, similarity-based retrieval tends to amplify the majority and smooth away the turning points. A single counterexample or definition revision can carry more epistemic weight than a hundred repetitions, but it is not necessarily "more similar."

Another limitation is the absence of explicit relations. RAG can retrieve excerpts from study A and study B, but it usually cannot represent that B rebuts A, undercuts its method, or narrows its scope; it just places snippets near each other. That replaces the quality of grounds with the quantity of text.

Finally, provenance is brittle under truncation. When an excerpt drops attribution ("B reports that A claimed…") and only preserves the conclusion ("X works"), the model can silently rewrite the responsibility line. Citations turn into vibes, and "who asserted what" becomes hard to reconstruct.

Because of this, standard RAG struggles with knowledge updating and synthesis in the presence of real [contention](./contention). An alternative is to shift from "how similar is it" to "what relation is it," as in a [Dialectical Graph](./dialectical-graph) that stores claims and relation types and prioritizes contradictions and counterexamples rather than consensus.
