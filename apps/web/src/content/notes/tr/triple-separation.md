---
title: Üçlü Ayrım
description: "Ham metni, normalize edilmiş iddiaları ve açık ilişkileri birbirinden ayıran mimari kural"
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Üçlü ayrım, bir [Diyalektik Graf](./dialectical-graph) içinde üç katmanı
birbirinden ayrı tutan mimari kuraldır: özgün metin, alıntılanabilir
[kanıt aralıkları](./evidence-span) olarak korunur; [iddialar](./claim)
[normalize edilmiş önermelere](./normalized-proposition) ayrıştırılır; ilişkiler
ise açık tartışmacı bağlar olarak saklanır (bkz.
[Diyalektik Graf Kenarları](./dialectical-graph-edges)).

Bu ayrım, [RAG](./rag-limitations) içinde yaygın bir arıza modunu önler: alıntı
kesilmesi. Metin, özgün ifade biçimi korunmadan geri getirilip özetlendiğinde,
atıf sessizce ortadan kaybolabilir. Üçlü ayrım, bir iddiayı her zaman onu üreten
tam kelimelere ve onları üreten [kaynağa](./source) geri izleyebilmenizi sağlar.

Ayrıca yapıyı sorgulanabilir kilarak [bilgi sentezini](./knowledge-synthesis)
mümkün kılar. "Bu iddiaya ne saldırıyor?" veya "Bu hangi tanımlara dayanıyor?"
diye sorabilirsiniz; çünkü bu ilişkiler ima edilmez, saklanır.
