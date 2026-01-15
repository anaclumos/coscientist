---
title: 辯證圖的邊
description: 連接辯證知識圖中節點的關係類型
sourceLocale: en
sourceHash: 82c6fd07bccd
translatedAt: 2026-01-14
---

在[辯證圖（Dialectical Graph）](./dialectical-graph)中，邊所編碼的是關係類型，而不是相似度分數（見[論證關係](./argumentative-relations)）。其價值在於，你可以問「這如何影響那個？」而不只是問「這些是否在談同一個主題？」

常見的關係類型包括：

- 支持：`supports`
- 挑戰：`attacks`、`undercuts`、`contradicts`
- 精煉與範疇：`refines`、`generalizes`、`specializes`、`depends_on`
- 來源與測量：`cites`、`defines`、`measures`
- 重現：`replicates`、`fails_to_replicate`
- 可選的主題連結：`is_about`

具類型的邊能透過反駁鏈（rebuttal
chains）來更新知識、偵測定義衝突，並追蹤重現狀態。這些都是以相似度為基礎的檢索難以表達的能力。它們也支援品質評估：知識品質較少取決於結論的方向，而更取決於產生該結論之路徑的持久性；而邊正是用來跨節點編碼該路徑結構（見[辯證圖的節點](./dialectical-graph-nodes)）以及其他[圖元件](./graph-components)。
