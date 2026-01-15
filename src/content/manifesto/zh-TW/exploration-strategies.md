---
title: 探索策略
description: 用於持續知識發現的圖遍歷策略
sourceLocale: en
sourceHash: b3abf2d73b65
translatedAt: 2026-01-14
---

[共科學家](./coscientist)
需要的不只是檢索：它需要[探索機制](./exploration-mechanisms)，能主動浮現矛盾、邊界條件，以及在[辯證圖](./dialectical-graph)中對方法相依性（method
dependence）的探索。

關鍵策略包括：

- [反例優先搜尋](./counterexample-first-search)
  — 將熱門度視為風險訊號；優先尋找反例與邊界條件
- [最小割](./minimum-cut)
  — 隔離出產生矛盾的最小結構，接著將注意力聚焦於[最小矛盾集合](./minimum-contradiction-set)
- [定義漂移](./definition-drift) — 偵測語義轉移，而不是假設概念已被共享
- [方法－結論耦合](./method-conclusion-coupling)
  — 依方法對主張分群，以找出共同缺陷
- [複現路徑分離](./replication-path-separation) — 區分彼此獨立的證據與反覆重述

在實作上，這些會以專門代理（agents）的形式出現，用於正規化、抽取假設、反例搜尋、範圍重建，以及驗證策略設計。
