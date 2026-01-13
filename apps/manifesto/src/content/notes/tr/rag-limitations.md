---
title: RAG Sınırlamaları
description: Standart geri getirmeli artırılmış üretimin neden gerçek keşif üretemediği
---

Geri getirmeli artırılmış üretim (retrieval-augmented generation, RAG), ilgili belgeleri geri getirerek olgusallığı artırır; ancak standart RAG, bilgi üretimi için hâlâ yapısal sınırlamalara sahiptir. Metin parçacıklarını geri getirir ve akıcı düzyazı üretir; keşif için ihtiyaç duyduğunuz nesneleri temsil etmez: iddialar, karşı iddialar, tanımlar, yöntemler ve bunları birbirine bağlayan ilişkiler.

Bir başarısızlık kiplerinden biri nicel yanlılıktır. Çok sayıda kaynak bir iddiayı tekrar ediyor ve az sayıda kaynak kesin çürütmeler ya da karşı örnekler içeriyorsa, benzerlik temelli geri getirme çoğunluğu büyütme ve dönüm noktalarını pürüzsüzleştirip silikleştirme eğilimindedir. Tek bir karşı örnek ya da tanım revizyonu, yüz tekrarın toplamından daha fazla epistemik ağırlık taşıyabilir; ancak bu, mutlaka “daha benzer” olduğu anlamına gelmez.

Bir diğer sınırlama, açık ilişkilerin yokluğudur. RAG, A çalışmasından ve B çalışmasından alıntılar geri getirebilir; ama genellikle B’nin A’yı çürüttüğünü, yöntemini zayıflattığını (undercut) ya da kapsamını daralttığını temsil edemez; yalnızca parçacıkları birbirine yakın yerleştirir. Bu da gerekçelerin niteliğini metin miktarıyla ikame eder.

Son olarak, köken (provenance) kırpma altında kırılgandır. Bir alıntı atfı düşürdüğünde (“B, A’nın … iddia ettiğini bildiriyor…”) ve yalnızca sonucu (“X işe yarıyor”) koruduğunda, model sorumluluk çizgisini sessizce yeniden yazabilir. Atıflar birer “his”e dönüşür ve “kim neyi ileri sürdü”yü yeniden kurmak zorlaşır.

Bu nedenle standart RAG, gerçek [ihtilaf](./contention) varlığında bilgi güncelleme ve sentez konusunda zorlanır. Bir alternatif, “ne kadar benzer”den “hangi ilişki”ye kaymaktır; iddiaları ve ilişki türlerini saklayan ve uzlaşıdan ziyade çelişkileri ve karşı örnekleri önceleyen bir [Diyalektik Grafik](./dialectical-graph) yaklaşımında olduğu gibi.