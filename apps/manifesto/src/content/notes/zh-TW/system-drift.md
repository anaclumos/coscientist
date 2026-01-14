---
title: 系統漂移
description: 知識系統因自我污染或疏於維護而逐步劣化
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

系統漂移是[漂移現象](./drift-phenomena)的一種類別：知識系統本身會隨時間劣化，且不依賴語義或環境的變化。

## 形式

- [模型崩壞](./model-collapse) — 因以 AI 生成資料訓練而導致的劣化
- [修正 vs 漂移](./correction-vs-drift) — 當修正錯誤的成本高於放任其擴散時

## 為何重要

系統漂移是一種失效模式：知識系統會穩定在一個「大致維持」的錯誤穩態上。錯誤之所以持續，是因為修正代價高昂；AI 生成內容污染訓練資料；系統也逐漸失去與真實（ground
truth）的連結。

[百科熔毀](./encyclopedia-meltdown)是其極端形式：當 AI 主動發起撰寫時，[責任界線](./responsibility-line)消失，系統便朝向自我指涉的崩壞漂移。防禦手段是[知識論協定層](./epistemic-protocol-layer)：透過[可追溯性](./traceability)、[零信任攝取](./zero-trust-ingestion)與[反駁優先搜尋](./rebuttal-first-search)，讓修正的成本始終低於漂移。

## 相關

- [漂移現象](./drift-phenomena) — 上層類別
- [語義漂移](./semantic-drift) — 當意義改變時
- [環境漂移](./environmental-drift) — 當世界改變時
- [機構性腦腐](./institutional-brain-rot) — 組織層面的類比
