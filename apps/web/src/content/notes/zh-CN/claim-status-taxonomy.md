---
title: 主张状态分类体系
description: 一个主张在辩证图中可能处于的状态
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

主张状态分类体系定义了一个[主张](./claim)在[辩证图](./dialectical-graph)中可能占据的状态。关于一个主张通常如何随时间在这些状态之间迁移，参见[主张生命周期](./claim-lifecycle)。

## 常见状态

- `tentative` — 假设阶段
- `contested` — 活跃争论中
- `conditionally supported` — 在特定条件下为真
- `robust` — 通过多条相互独立的路径获得支持
- `refuted` — 被[反例](./counterexample)击溃
- `obsolete` — 因[定义漂移](./definition-drift)或方法转变而失去意义

状态不是单一的置信度分数。一个主张可能在证据多样性上是稳健的，但在适用范围上仍有争议；它也可能在一个语境中得到条件性支持，而在另一个语境中被驳倒。多维状态能够捕捉这种复杂性。

状态之间的转换由反驳的类型驱动，而非数量。一条证据充分的[反例](./counterexample)就可以将主张从稳健推至被驳倒；许多薄弱的异议可能只会让它保持在争议中，而无法得出结论。关于形式化的转换逻辑，参见[状态转换规则](./status-transition-rules)。
