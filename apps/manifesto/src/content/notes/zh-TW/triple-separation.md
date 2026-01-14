---
title: 三重分離
description: 將原始文本、正規化主張與明確關係分開的架構規則
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

三重分離是在 [辯證圖譜](./dialectical-graph)
中的一項架構規則，用來保持三個層次彼此獨立：原始文本會被保留為可引用的[證據片段](./evidence-span)；[主張](./claim)會被拆解為[正規化命題](./normalized-proposition)；而各種關係則以明確的論證式綁定（見[辯證圖譜邊](./dialectical-graph-edges)）來儲存。

這種分離可避免在 [RAG](./rag-limitations)
中常見的一種失敗模式：摘錄截斷。當文本被檢索並摘要、卻未保留原始措辭時，歸因（attribution）可能會在不知不覺中消失。三重分離確保你始終能把一項主張追溯回產生它的精確原文措辭，以及對應的[來源](./source)。

它也透過讓結構可被查詢，來支援[知識綜整](./knowledge-synthesis)。你可以問「什麼在攻擊這個主張？」或「這依賴哪些定義？」因為這些關係是被儲存下來的，而不是僅僅被暗示。
