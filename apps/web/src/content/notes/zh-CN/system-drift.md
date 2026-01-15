---
title: 系统漂移
description: 知识系统因自我污染或疏于维护而退化
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

系统漂移是[漂移现象](./drift-phenomena)的一类：知识系统本身会随时间退化，这种退化独立于语义或环境变化。

## 形式

- [模型崩塌](./model-collapse) — 由于在 AI 生成数据上训练而导致的退化
- [纠错 vs 漂移](./correction-vs-drift) — 当修复错误的成本高于放任其传播时

## 为什么重要

系统漂移是一种失效模式：知识系统会稳定在一个"近似维持"的虚假稳态上。错误之所以持续存在，是因为纠错代价高昂；AI 生成内容会污染训练数据；系统也会逐渐与真实世界的事实（ground
truth）脱节。

[百科全书式崩溃](./encyclopedia-meltdown)是其极端形态：当 AI 主动承担写作时，[责任线](./responsibility-line)消失，系统会朝着自指性崩塌漂移。防御手段是[认识论协议层](./epistemic-protocol-layer)：通过[可追溯性](./traceability)、[零信任摄取](./zero-trust-ingestion)和[反驳优先搜索](./rebuttal-first-search)，让纠错始终比漂移更便宜。

## 相关

- [漂移现象](./drift-phenomena) — 上位类别
- [语义漂移](./semantic-drift) — 当含义发生变化时
- [环境漂移](./environmental-drift) — 当世界发生变化时
- [制度性脑腐](./institutional-brain-rot) — 组织层面的类比
