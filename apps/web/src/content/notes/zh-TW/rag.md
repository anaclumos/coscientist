---
title: RAG
description:
  檢索增強生成（Retrieval-Augmented Generation），一種透過檢索文件來讓 AI
  輸出有所依據的技術
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG（Retrieval-Augmented
Generation，檢索增強生成）是一種透過從語料庫中檢索相關文件，並將其作為生成時的上下文，來提升 AI 輸出準確性的技術。模型不再只依賴訓練期間學到的參數，而是可以參照外部來源，降低[幻覺](./hallucination)，並引入訓練資料中未包含的知識。

標準的 RAG 流水線如下運作：先將查詢嵌入（embed）到向量空間中，接著根據向量相似度檢索相似文件，最後將檢索到的文本提供給[LLM](./llm)作為上下文以生成回應。這種方法已廣泛用於問答、搜尋，以及知識密集型任務。

然而，RAG 在知識生產方面存在結構性限制。它是根據相似度來檢索文本片段，而不是根據論證關係。它無法區分支持與攻擊、證據與意見、第一手來源與轉述。當來源彼此衝突時，RAG 往往會把它們混合成流暢的摘要，而不是凸顯[爭點](./contention)。完整批判請參見
[RAG 的限制](./rag-limitations)。

[共科學家](./coscientist)
透過維持一個[辯證圖（Dialectical Graph）](./dialectical-graph)（用以儲存[主張](./claim)、[證據片段](./evidence-span)以及帶型別的關係），超越了 RAG。此時的檢索變成「哪些內容與這個主張相關？」而不是「哪些內容與這個查詢相似？」
