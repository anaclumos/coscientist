---
title: 主張狀態分類法
description: 一個主張在辯證圖中可能佔據的狀態
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

主張狀態分類法定義了一個[主張](./claim)在[辯證圖](./dialectical-graph)中可能佔據的狀態。關於主張通常如何隨時間在這些狀態之間移動，請參見[主張生命週期](./claim-lifecycle)。

## 常見狀態

- `tentative` — 假說階段
- `contested` — 積極辯論中
- `conditionally supported` — 在特定條件下為真
- `robust` — 透過多條相互獨立的路徑獲得支持
- `refuted` — 被[反例](./counterexample)推翻
- `obsolete` — 因[定義漂移](./definition-drift)或方法轉移而失去意義

狀態不是單一的信心分數（confidence
score）。一個主張可能在證據多樣性上很穩健（robust），但在適用範圍（scope）上仍具爭議（contested）；它也可能在某個情境下是條件性支持（conditionally
supported），在另一個情境下則被推翻（refuted）。多維度的狀態能捕捉這種複雜性。

狀態之間的轉換取決於反駁的種類，而非數量。單一個證據充分的[反例](./counterexample)就能使主張從穩健（robust）轉為被推翻（refuted）；許多薄弱的反對意見可能只會讓它維持在具爭議（contested）的狀態，而無法定論。關於形式化的轉換邏輯，請參見[狀態轉換規則](./status-transition-rules)。
