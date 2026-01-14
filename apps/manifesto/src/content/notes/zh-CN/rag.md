---
title: RAG
description:
  检索增强生成（Retrieval-Augmented Generation），一种通过检索文档来为 AI
  输出提供依据的技术
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG（Retrieval-Augmented
Generation，检索增强生成）是一种通过从语料库中检索相关文档，并将其作为生成时的上下文，从而提升 AI 输出准确性的技术。模型不再仅依赖训练期间学到的参数，而是可以参考外部来源，从而减少[幻觉](./hallucination)，并引入训练数据中未包含的知识。

标准的 RAG 流水线如下：将查询嵌入（embed）到向量空间中，基于向量相似度检索相近文档，然后把检索到的文本提供给
[大语言模型](./llm)
作为上下文以生成回答。这种方法已广泛应用于问答、搜索以及知识密集型任务。

然而，RAG 在知识生产方面存在结构性局限。它基于相似性检索文本片段，而不是基于论证关系进行检索。它无法区分支持与反驳、证据与观点、第一手来源与转述。当来源相互冲突时，RAG 往往会把它们融合成流畅的摘要，而不是凸显[争议点](./contention)。完整批评见
[RAG 的局限性](./rag-limitations)。

[共研者](./coscientist)
通过维护一个存储[主张](./claim)、[证据片段](./evidence-span)以及类型化关系的[辩证图](./dialectical-graph)，超越了 RAG。检索问题从"什么与这个查询相似？"转变为"什么会影响（bear
on）这条主张？"。
