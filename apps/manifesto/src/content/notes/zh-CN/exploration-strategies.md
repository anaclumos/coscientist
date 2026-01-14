---
title: 探索策略
description: 用于持续知识发现的图遍历策略
sourceLocale: en
sourceHash: e9c34bc73e32
translatedAt: 2026-01-14
---

[共研者](./coscientist)
需要的不仅仅是检索：它需要探索，在[辩证图](./dialectical-graph)中主动浮现矛盾、边界条件以及对方法的依赖性。

关键策略包括：

- [反例优先搜索](./counterexample-first-search)
  —— 将"流行度"视为风险信号；优先寻找反例与边界条件
- [最小割](./minimum-cut)
  —— 隔离出产生矛盾的最小结构，然后将注意力聚焦到[最小矛盾集合](./minimum-contradiction-set)
- [定义漂移](./definition-drift) —— 检测意义的变化，而不是假设概念已被共享
- [方法-结论耦合](./method-conclusion-coupling)
  —— 按方法对主张进行聚类，以发现共同缺陷
- [复现路径分离](./replication-path-separation) —— 区分独立证据与重复转述

在实现层面，这些策略会体现为用于规范化、假设抽取、反例搜索、范围重建以及验证策略设计的专门代理（agents）。
