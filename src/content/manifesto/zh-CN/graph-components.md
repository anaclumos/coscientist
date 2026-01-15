---
title: 图组件
description: 构成辩证图的节点与边类型
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

图组件是 [辩证图](./dialectical-graph)
的基本构件：用于表示认知对象的 [辩证图节点](./dialectical-graph-nodes)，以及用于表示它们之间 [论证关系](./argumentative-relations) 的 [辩证图边](./dialectical-graph-edges)。

**节点类型**（见 [辩证图节点](./dialectical-graph-nodes)）：

- [主张](./claim) — 可验证的命题
- [证据片段](./evidence-span) — 来自来源的精确引用文本
- [范围](./scope) — 适用条件
- [假设](./assumption) — 隐含前提
- [方法](./method) — 生成证据的程序
- [来源](./source) — 溯源锚点
- [反例](./counterexample) — 使主张失效的情形
- [议题节点](./issue-node) — 相互碰撞的主张集合

**边类型**（见 [辩证图边](./dialectical-graph-edges)）：

- [攻击](./attack) — 对真值的直接质疑
- [削弱](./undercut) — 对依据的质疑
- `supports`、`refines`、`generalizes`、`specializes`
- `cites`、`defines`、`measures`、`replicates`、`fails_to_replicate`
- [争议](./contention) — 结构化冲突标记
