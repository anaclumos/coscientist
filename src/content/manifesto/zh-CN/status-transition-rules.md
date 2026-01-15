---
title: 状态转换规则
description: 在辩证图中，是什么触发了主张状态之间的流转
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

状态转换规则定义了是什么将一个[主张](./claim)从一个状态推进到另一个状态（位于[主张状态分类法](./claim-status-taxonomy)中）。转换取决于质疑的类型，而不是数量：一个决定性的[反例](./counterexample)比许多缺乏说服力的反对意见更重要。

关键转换包括：暂定 → 争议中（当登记了一次[攻击](./attack)时），争议中 → 有条件支持（当该攻击通过缩小[范围](./scope)或澄清[假设](./assumption)而得到回应时），有条件支持 → 稳健（当多条相互独立的路径予以确认时），稳健 → 被驳倒（当某个反例经受住审查时），以及任意状态 → 过时（当[定义漂移](./definition-drift)切断了该主张的意义时）。

这些规则属于[共研者](./coscientist)中的[认识论协议层](./epistemic-protocol-layer)。它们让知识更新变得显式且可审计，而不是隐含在散文式叙述之中。
