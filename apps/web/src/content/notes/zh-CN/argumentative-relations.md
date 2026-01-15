---
title: 论证关系
description: 按功能组织的辩证图边类型
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

论证关系是 [辩证图](./dialectical-graph)（另见[图组件](./graph-components)）中的边类型，用于编码认识对象（epistemic
objects）彼此之间如何关联。它们正是辩证图区别于主题相似性图的关键所在。

## 质疑关系

- [攻击](./attack) — 对某个主张真实性的直接质疑
- [削弱](./undercut) — 对方法、假设或定义的质疑
- [反例](./counterexample) — 能使该主张失效的情形
- `contradicts` — 明确的不相容性

## 支持关系

- `supports` — 用于强化主张的证据或推理
- `cites` — 对某个[来源](./source)的明确归因
- `replicates` / `fails_to_replicate` — 复现状态

## 细化关系

- `refines` — 缩小范围或澄清某个主张
- `generalizes` / `specializes` — 范围调整
- `depends_on` — 将主张与其[假设](./assumption)关联起来
- `defines` — 将术语与其定义连接

完整规范请参见
[辩证图边](./dialectical-graph-edges)；关于为什么类型化边很重要，请参见
[关系类型化 vs 相似性](./relation-typing-vs-similarity)。
