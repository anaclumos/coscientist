---
title: RAG
description:
  Retrieval-Augmented Generation, a technique for grounding AI outputs in
  retrieved documents
---

RAG is a technique that improves AI output accuracy by retrieving relevant
documents from a corpus and using them as context for generation. Instead of
relying solely on parameters learned during training, the model can reference
external sources, reducing [hallucination](./hallucination) and enabling
knowledge that was not in the training data.

The standard RAG pipeline works as follows: a query is embedded into a vector
space, similar documents are retrieved based on vector similarity, and the
retrieved text is provided to an [LLM](./llm) as context for generating a
response. This approach has become widespread for question-answering, search,
and knowledge-intensive tasks.

However, RAG has structural limitations for knowledge production. It retrieves
text snippets based on similarity, not on argumentative relations. It cannot
distinguish support from attack, evidence from opinion, or primary source from
restatement. When sources conflict, RAG tends to blend them into smooth
summaries rather than surfacing the [contention](./contention). See
[RAG Limitations](./rag-limitations) for the full critique.

[Coscientist](./coscientist) goes beyond RAG by maintaining a
[Dialectical Graph](./dialectical-graph) that stores [claims](./claim),
[evidence spans](./evidence-span), and typed relations. Retrieval becomes "what
bears on this claim?" rather than "what is similar to this query?"
