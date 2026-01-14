---
title: 幻覺（Hallucination）
description: AI 輸出看似可信，但在事實上不正確或捏造的內容
sourceLocale: en
sourceHash: 35a042b51f6a
translatedAt: 2026-01-14
---

幻覺（hallucination）是指 AI 的輸出讀起來自信且連貫，但包含事實錯誤、捏造資訊或杜撰引用來源。危險之處不在於隨機性，而在於「看起來很合理」。幻覺文本常能通過粗略檢視，因為它符合真實敘述在統計上的語言模式。

幻覺是 [LLMs](./llm)
運作方式的症狀：它們預測的是「最可能的下一個 token」，而不是「真正正確的 token」。當訓練資料在某個主題上稀疏或彼此矛盾時，模型會進行插值（interpolate），結果可能是流暢但錯得很順。這也是為什麼
[流暢度陷阱](./fluency-trap) 如此危險：流暢不代表準確。

在 [共科學家](./coscientist) 中，幻覺風險透過
[認識論協定層](./epistemic-protocol-layer) 來管理：[可追溯性](./traceability)
要求主張必須連結到
[證據片段](./evidence-span)，[先反駁搜尋](./rebuttal-first-search)
在接受之前進行壓力測試，而 [多 AI 共識協定](./multi-ai-consensus-protocol)
則把模型間的分歧作為需要更仔細檢查的訊號。
