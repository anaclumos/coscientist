---
title: 辩证图的边
description: 连接辩证知识图中节点的关系类型
sourceLocale: en
sourceHash: 82c6fd07bccd
translatedAt: 2026-01-14
---

在 [辩证图](./dialectical-graph) 中，边编码的是关系类型，而不是相似度分数（见[论证关系](./argumentative-relations)）。其价值在于，你可以问“这对那有什么影响/意义？”，而不仅仅是“它们是否在谈同一个主题？”

常见的关系类型包括：

- 支持：`supports`
- 质疑/挑战：`attacks`、`undercuts`、`contradicts`
- 精化与范围：`refines`、`generalizes`、`specializes`、`depends_on`
- 溯源与测量：`cites`、`defines`、`measures`
- 复现：`replicates`、`fails_to_replicate`
- 可选的主题链接：`is_about`

带类型的边能够通过反驳链来更新知识、检测定义冲突、以及追踪复现状态。这些能力是基于相似度的检索难以表达的。它们也支持质量评估：知识质量较少取决于结论的方向，而更多取决于产生该结论的路径的持久性；而边正是对这种跨节点的路径结构的编码（见[辩证图的节点](./dialectical-graph-nodes)）以及其他[图组件](./graph-components)。
