---
title: 知识系统层级
description: Coscientist 的架构层级
sourceLocale: en
sourceHash: 954c640b7988
translatedAt: 2026-01-14
---

知识系统层级是构成 [共研者](./coscientist)
的不同架构组件。将这些层级分离，使不同关注点能够彼此独立地演进。

## 数据层

- [证据片段](./evidence-span) — 逐字保留的原始引用文本
- [来源](./source) — 用于可追溯性的出处锚点

## 推理层

- [推理层](./inference-layer) — 由主张与关系构成的、持续演进的活体网络
- [主张](./claim)、[反驳](./attack)、[削弱](./undercut) 及其他
  [论证关系](./argumentative-relations)

## 叙事层

- [叙事层](./narrative-layer) — 图（graph）的可供人阅读的投影
- 文档是带时间戳的快照，而非"地面真相"（ground truth）

## 协议层

- [认知协议层](./epistemic-protocol-layer) — 规定主张如何进入并获得权威的规则
- [知识宪章](./knowledge-constitution) — 规范知识运作的治理文档

## 分离原则

- [三重分离](./triple-separation) — 使原始文本、规范化主张与关系彼此区分
