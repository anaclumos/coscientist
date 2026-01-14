---
title: 圖形元件
description: 構成辯證圖的節點與邊類型
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

圖形元件是[辯證圖](./dialectical-graph)的基本構件：用來表示認知（epistemic）對象的節點類型，以及用來表示它們之間關係的邊類型。

**節點類型**（參見[辯證圖節點](./dialectical-graph-nodes)）：

- [主張](./claim) — 可驗證的命題
- [證據片段](./evidence-span) — 來源中的精確引用文字
- [範圍](./scope) — 適用條件
- [假設](./assumption) — 隱含前提
- [方法](./method) — 產生證據的程序
- [來源](./source) — 溯源錨點
- [反例](./counterexample) — 使主張失效的案例
- [議題節點](./issue-node) — 互相衝突主張的集合

**邊類型**（參見[辯證圖邊](./dialectical-graph-edges)）：

- [攻擊](./attack) — 對真實性的直接質疑
- [削弱（Undercut）](./undercut) — 對立論根據的質疑
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [爭議（Contention）](./contention) — 結構化衝突標記
