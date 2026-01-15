---
title: Provenans
description: İddialar ve kanıtlar için köken ve zilyetlik zinciri
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

Provenans, bir iddianın veya bir kanıt parçasının kökeni ve zilyetlik
zinciridir: onu kimin ileri sürdüğü, ne zaman, neye dayanarak ve mevcut biçimine
nasıl ulaştığı. Provenans olmadan, birincil kaynakları yeniden paketlenmiş
özetlerden ayırt edemezsiniz ve görünen uzlaşmanın bağımsız kanıtı mı yoksa
döngüsel atıfı mı yansıttığını bilemezsiniz.

Bir [Diyalektik Graf](./dialectical-graph) içinde provenans; [kaynak](./source)
düğümleri, [kanıt aralıkları](./evidence-span) ve atfı düzyazının ima etmesine
bırakmak yerine açık hâle getiren `cites` kenarları üzerinden kodlanır. Bu,
[RAG](./rag-limitations) bağlamında yaygın olan alıntı kırpma sorununu önler;
çünkü alıntı yapmak bağlamı düşürür ve
[sorumluluk çizgisi](./responsibility-line) ortadan kaybolur.

Provenans, [izlenebilirlik](./traceability) için bir önkoşuldur: bir iddiayı
kökenine kadar izleyemiyorsanız, dünya değiştiğinde onu düzeltemezsiniz.
