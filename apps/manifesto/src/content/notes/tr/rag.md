---
title: RAG
description: Erişimle Zenginleştirilmiş Üretim, AI çıktılarının geri getirilen belgelere dayandırılması için bir teknik
---

RAG (Retrieval-Augmented Generation), bir derlemden (corpus) ilgili belgeleri geri getirip bunları üretim için bağlam olarak kullanarak AI çıktı doğruluğunu artıran bir tekniktir. Yalnızca eğitim sırasında öğrenilen parametrelere dayanmak yerine, model dış kaynaklara referans verebilir; bu da [halüsinasyon](./hallucination) oranını azaltır ve eğitim verisinde bulunmayan bilgilere erişimi mümkün kılar.

Standart RAG hattı (pipeline) şöyle işler: bir sorgu vektör uzayına gömülür (embedding), vektör benzerliğine göre benzer belgeler geri getirilir ve geri getirilen metin, yanıt üretmek için bir [LLM](./llm)’ye bağlam olarak sağlanır. Bu yaklaşım; soru-cevap, arama ve bilgi-yoğun görevler için yaygınlaşmıştır.

Ancak RAG’nin bilgi üretimi açısından yapısal sınırlamaları vardır. Benzerliğe dayalı olarak metin parçacıkları (snippets) geri getirir; argümantatif ilişkileri temel almaz. Desteği saldırıdan, kanıtı görüşten veya birincil kaynağı yeniden ifade edilenden ayırt edemez. Kaynaklar çatıştığında, RAG genellikle [ihtilafı](./contention) görünür kılmak yerine onları pürüzsüz özetler halinde harmanlama eğilimindedir. Tam eleştiri için [RAG Sınırlamaları](./rag-limitations)’na bakın.

[Eşbilimci](./coscientist), [iddiaları](./claim), [kanıt bölümlerini](./evidence-span) ve türlendirilmiş ilişkileri depolayan bir [Diyalektik Grafik](./dialectical-graph) tutarak RAG’nin ötesine geçer. Erişim, “bu iddiayla ilgili olan nedir?” haline gelir; “bu sorguya benzer olan nedir?” değil.