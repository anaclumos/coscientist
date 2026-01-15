---
title: 溯源
description: 主張與證據的來源與保管鏈
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

溯源（Provenance）是指一項主張或一份證據的來源與保管鏈：誰提出的、何時提出、基於什麼，以及它如何演變到目前的形式。沒有溯源，你就無法區分第一手來源與重新包裝的摘要，也無法判斷表面上的一致究竟反映了獨立證據，還是循環引用。

在[辯證圖](./dialectical-graph)中，溯源會透過[來源](./source)節點、[證據跨度](./evidence-span)，以及讓歸屬（attribution）變得明確、而非由散文隱含的
`cites`
邊來編碼。這能避免在[RAG](./rag-limitations)中常見的節錄截斷問題：引用會丟失上下文，而[責任線](./responsibility-line)也隨之消失。

溯源是[可追溯性](./traceability)的前提：如果你無法把一項主張追溯到其起源，當世界改變時，你也就無法更正它。
