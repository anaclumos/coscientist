---
title: Diyalektik Grafik Kenarları
description: Diyalektik bir bilgi grafiğinde düğümleri bağlayan ilişki türleri
---

Bir [Diyalektik Grafik](./dialectical-graph) içinde kenarlar, benzerlik puanları yerine ilişki türlerini kodlar. Bunun değeri, yalnızca “bunlar aynı konu hakkında mı?” demek yerine “bu, şunu nasıl etkiliyor?” diye sorabilmenizdir.

Tipik ilişkiler arasında `supports`, `attacks` ve `undercuts` (yöntem/varsayım/tanım düzeyindeki itirazlar); `refines`, `generalizes`, `specializes` ve `depends_on` gibi iyileştirme (refinement) ve kapsam ilişkileri; `cites`, `defines`, `measures`, `replicates` ve `fails_to_replicate` gibi köken (provenance) bağlantıları; ayrıca `contradicts` gibi doğrudan çatışmalar yer alır. Bazı grafikler `is_about` gibi gevşek konu bağlantıları da kullanır, ancak epistemik işi yapan şey, türlendirilmiş tartışmacı kenarlardır.

Türlendirilmiş kenarlar, çürütme (rebuttal) zincirleri üzerinden bilginin güncellenmesini, tanım çatışmalarının tespitini ve replikasyon durumunun izlenmesini mümkün kılar. Bunlar, benzerlik tabanlı getirmenin temsil etmekte zorlandığı yeteneklerdir (bkz. [RAG sınırlamaları](./rag-limitations)). Ayrıca kalite değerlendirmesini de destekler: bilginin kalitesi, bir sonucun yönünden ziyade onu üreten yolun dayanıklılığına daha çok bağlıdır ve kenarlar bu yol yapısını kodlar.