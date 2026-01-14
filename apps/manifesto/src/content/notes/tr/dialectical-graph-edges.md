---
title: Diyalektik Grafik Kenarları
description: Diyalektik bir bilgi grafiğinde düğümleri bağlayan ilişki türleri
---

Bir [Diyalektik Grafikte](./dialectical-graph), kenarlar benzerlik skorları yerine ilişki türlerini kodlar. Bunun değeri, yalnızca "bunlar aynı konu hakkında mı?" demek yerine "bu, şuna nasıl etki ediyor?" diye sorabilmenizdir.

Yaygın ilişki türleri şunları içerir:

- Destek: `supports`
- İtiraz: `attacks`, `undercuts`, `contradicts`
- İyileştirme ve kapsam: `refines`, `generalizes`, `specializes`, `depends_on`
- Kaynak gösterme ve ölçüm: `cites`, `defines`, `measures`
- Replikasyon : `replicates`, `fails_to_replicate`
- İsteğe bağlı topikal bağlantılar: `is_about` (faydalı, ancak tek başına epistemik değil)

Türlü  kenarlar; çürütme zincirleri üzerinden bilginin güncellenmesini, tanım çatışmalarının tespitini ve replikasyon durumunun izlenmesini mümkün kılar. Bunlar, benzerlik tabanlı geri getirmenin temsil etmekte zorlandığı yeteneklerdir (bkz. [RAG sınırlamaları](./rag-limitations)). Ayrıca kalite değerlendirmesini de destekler: bilgi kalitesi, bir sonucun yönünden ziyade onu üreten yolun  dayanıklılığına daha çok bağlıdır ve kenarlar bu yol yapısını kodlar.
