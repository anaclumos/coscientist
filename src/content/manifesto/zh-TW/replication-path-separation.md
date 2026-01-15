---
title: 複製路徑分離
description: 詢問支援是否來自獨立路徑或只是對同一主張的重複轉述
sourceLocale: en
sourceHash: b898029feac1
translatedAt: 2026-01-14
---

複製路徑分離（Replication path
separation）是一種做法：用來詢問多個來源之間看似一致的結論，究竟反映的是彼此獨立的證據，還是對同一個底層主張的反覆轉述。若所有同意的來源都可追溯到單一源頭，多數一致就不是強而有力的證據。

這是對抗[百科全書崩壞](./encyclopedia-meltdown)的一項關鍵防線：AI 生成內容可能透過中介引用自己，藉由循環式放大製造共識的假象。路徑分離會追問：「有多少條真正獨立的路徑通往這個結論？」

在[辯證圖](./dialectical-graph)中，路徑分離可透過明確的[來源沿革](./provenance)與
`cites`
邊來實現。系統可以將對主張的支援一路追溯回原始[來源](./source)，並偵測看似的複製其實只是重複。
