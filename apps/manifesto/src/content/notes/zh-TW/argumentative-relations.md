---
title: 論證關係
description: 依功能組織的辯證圖中的邊類型
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

論證關係是 [辯證圖](./dialectical-graph)
中的邊類型，用來編碼知識論對象（epistemic
objects）彼此之間如何關聯。它們正是區分辯證圖與主題相似度圖的關鍵。

## 挑戰關係

- [攻擊](./attack) — 對主張真實性的直接挑戰
- [削弱](./undercut) — 對方法、假設或定義的挑戰
- [反例](./counterexample) — 一個使主張失效的案例
- `contradicts` — 明確的不相容

## 支持關係

- `supports` — 強化主張的證據或推理
- `cites` — 對某個[來源](./source)的明確引用／歸屬
- `replicates` / `fails_to_replicate` — 重現狀態

## 精緻化關係

- `refines` — 縮小範圍或釐清某個主張
- `generalizes` / `specializes` — 範圍調整
- `depends_on` — 將主張連結到其[假設](./assumption)
- `defines`
  — 將術語連結到其定義（並透過[定義漂移](./definition-drift)隨時間追蹤）

完整規格請見 [辯證圖邊](./dialectical-graph-edges)，並參考
[關係類型 vs 相似度](./relation-typing-vs-similarity)
以了解為何帶類型的邊很重要。
