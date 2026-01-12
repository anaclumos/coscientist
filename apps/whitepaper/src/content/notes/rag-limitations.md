---
title: RAG Limitations
description: Why standard retrieval-augmented generation cannot produce genuine discovery
---

# RAG Limitations

Current AI covers the comprehension layer, but has major problems in the reasoning layer. If one analyzes a standard RAG (Retrieval-Augmented Generation) system with scientific rigor, it cannot produce genuine scientific discovery.

## Core Problems

### Quantitative Bias
RAG looks at the number of retrieved results. If there are 100 existing studies claiming X works and 1 innovative recent study showing X was placebo, RAG concludes that X works.

Majority vote does not guarantee knowledge quality. A single counterexample, rebuttal, or definition revision at a turning point often contains more information than hundreds of repeated statements.

### Absence of Relations
RAG retrieves multiple excerpts but cannot understand the relations among them. If study A claims X works and rebuttal study B says X is placebo, RAG cannot represent their relation. Because it only sees excerpts rather than full texts, it may not know whether A rebuts B or B rebuts A.

RAG replaces the quality of grounds with quantity and cannot model argumentative relations among excerpts.

### Unclear Provenance
RAG is weak at clearly binding excerpts to their sources. If paper B says "A claimed X works..." but the excerpt is truncated to only "X works...", RAG will understand it as "B stated that X works."

Citations get rewritten in truncated form, erasing the chain of attribution.

## What RAG Cannot Do

- **Knowledge updating** - Reordering via rebuttal
- **Knowledge synthesis** - Cohering conditions, scope, and assumptions
- **[Contention](./contention) handling** - RAG has no internal object called [contention](./contention)

## The Alternative

To overcome these issues, systems must move from asking "how similar is it" to asking "what relation is it." This leads to the [Dialectical Graph](./dialectical-graph) model, which prioritizes contradictions and counterexamples rather than consensus.
