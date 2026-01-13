---
title: 辩证图的边
description: 连接辩证知识图谱中节点的关系类型
---

在[辩证图](./dialectical-graph)中，边编码的是关系类型，而不是相似度分数。其价值在于，你可以问“这对那有什么影响？”，而不只是问“它们是否在谈论同一个主题？”

典型关系包括 `supports`、`attacks` 和 `undercuts`（对方法/假设/定义层面的挑战）；以及诸如 `refines`、`generalizes`、`specializes`、`depends_on` 等细化与范围关系；还有诸如 `cites`、`defines`、`measures`、`replicates`、`fails_to_replicate` 等溯源链接；以及诸如 `contradicts` 这样的直接冲突。有些图也会使用诸如 `is_about` 之类的宽松主题链接，但真正承担认识论（epistemic）工作的，是带类型的论证性边。

带类型的边使得知识能够通过反驳链进行更新、检测定义冲突，并追踪复现实验状态。这些能力是基于相似度的检索很难表达的（参见 [RAG 局限性](./rag-limitations)）。它们也支持质量评估：知识质量较少取决于结论的方向，而更多取决于产生该结论的路径的耐久性，而边编码的正是这种路径结构。