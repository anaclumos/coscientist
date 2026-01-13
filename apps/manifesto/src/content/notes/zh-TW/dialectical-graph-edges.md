---
title: 辯證式圖的邊
description: 在辯證式知識圖中連結節點的關係類型
---

在[辯證式圖](./dialectical-graph)中，邊所編碼的是關係類型，而非相似度分數。其價值在於，你可以問「這如何影響那個？」而不只是問「這些是否在談同一個主題？」

常見的關係包括 `supports`、`attacks` 與 `undercuts`（在方法／假設／定義層級的挑戰）；以及如 `refines`、`generalizes`、`specializes`、`depends_on` 這類的細化與範圍關係；來源與溯源連結如 `cites`、`defines`、`measures`、`replicates`、`fails_to_replicate`；以及直接衝突如 `contradicts`。有些圖也會使用較鬆散的主題連結，如 `is_about`，但真正承擔認識論工作的是具類型的論證性邊。

具類型的邊能透過反駁鏈（rebuttal chains）促進知識更新、偵測定義衝突，並追蹤重現（replication）狀態。這些能力是以相似度為基礎的檢索較難表達的（見 [RAG 限制](./rag-limitations)）。它們也支援品質評估：知識品質較少取決於結論的方向，而更取決於產生該結論之路徑的耐久性，而邊正是對該路徑結構的編碼。