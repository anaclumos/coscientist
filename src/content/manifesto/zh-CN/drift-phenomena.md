---
title: 漂移现象
description: 知识系统中由时间驱动的变化
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

漂移现象指的是知识系统随时间发生变化的方式，这种变化往往是不可见的，会导致看起来像矛盾的错误，但实际上源于时间上的不匹配。

## [语义漂移](./semantic-drift)

- [定义漂移](./definition-drift)
  — 当一个术语的含义在不同时间或不同社群中发生转变
- [意义流失](./meaning-loss) — 当某些主张因其术语不再适用而变得过时

## [环境漂移](./environmental-drift)

- [非平稳性](./nonstationarity) — 当产生数据的底层过程随时间发生变化

## [系统漂移](./system-drift)

- [模型崩塌](./model-collapse) — 由于在 AI 生成数据上训练而导致的退化
- [纠错 vs 漂移](./correction-vs-drift)
  — 当修正错误的成本高于任其传播时会发生什么

## 防御

[辩证图](./dialectical-graph)
通过将[定义](./definition-drift)与[主张](./claim)分离，并记录主张被设想适用的时间与地点，从而显式追踪漂移。这可以防止因时间不匹配而产生的伪矛盾。
