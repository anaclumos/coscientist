---
title: 證據片段
description: 來自來源的精確引文範圍，用於支持或挑戰一項主張
sourceLocale: en
sourceHash: a8833ec8512f
translatedAt: 2026-01-14
---

證據片段（evidence
span）是來自某個來源、用以支持或挑戰一項[主張](./claim)的精確引文文字。它保留原始措辭與脈絡，讓後續讀者能看見實際說了什麼，而不是可能已偏離原意的轉述或摘要。

在[辯證圖（Dialectical Graph）](./dialectical-graph)中，證據片段會以節點形式儲存，並連結到其[來源](./source)以及它所影響的主張。這是[三重分離](./triple-separation)的第一層：保留原始文本、將主張標準化、使關係明確化。

證據片段可避免[RAG](./rag-limitations)中的引文截斷問題：引用時可能會悄然省略歸屬資訊（「B 報導 A 聲稱……」），只留下結論，從而切斷[責任鏈](./responsibility-line)。
