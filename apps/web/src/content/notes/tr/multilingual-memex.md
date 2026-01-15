---
title: Çokdilli Memex
description: Otomatik çeviri desteğine sahip, dile duyarlı kişisel bilgi sistemi
sourceLocale: en
sourceHash: 7f632fdf73b6
translatedAt: 2026-01-14
---

Çokdilli Memex, birden fazla dilde içeriği yerel olarak destekleyen; otomatik
dil algılama, çeviri ve diller arası bağlantılama sağlayan bir kişisel bilgi
sistemidir. [Vannevar Bush](./vannevar-bush)'un özgün [Memex](./memex)
vizyonunu, bilginin dil sınırlarına saygı duymadığı bir dünyaya genişletir ve
[Çokdilli Bilgi Örgüsü](./multilingual-knowledge-mesh)'ne yakından benzer.

[Sunghyun Cho](./sunghyun-cho)'nun [Extracranial](./extracranial) projesi bu
kavramın bir uygulamasıdır. Otomatik dil algılamayı, hreflang etiketleri
kullanarak yerel ayara özgü sunumu ve bir dilde yazarken diğer dillerde sunumu
çeviri sistemlerinin üstlenebilmesini içerir.

Mimari etkileri önemlidir. Arayüz öğeleri, arama ve bağlantılar dil faktörünü
hesaba katmak zorundadır:

- Korece bir sorgu, ister başlangıçta Korece yazılmış olsun ister İngilizceden
  çevrilmiş olsun, ilgili içeriği bulmalıdır.
- Geri bağlantılar diller arasında çalışmalıdır.
- [Sorumluluk çizgisi](./responsibility-line), yalnızca kimin neyi ileri
  sürdüğünü değil, bunun hangi dilde ve hangi çeviri yöntemiyle yapıldığını da
  takip etmelidir.

Bu nedenle [Extracranial](./extracranial), çevirileri iyileştirmek için GitHub
üzerinden topluluk katkılarını dikkate alır: makine çevirisi çokdilli içeriği
mümkün kılar, ancak [çeviri sadakatini](./translation-fidelity) korumak için
insan incelemesi gerekir. Çokdilli Memex çözülmüş bir problem değil, otomatik
sistemler ile insan muhakemesi arasındaki süregelen bir iş birliğidir.

[Eşbilimci](./coscientist) için çokdilli Memex, çokdilli
[Diyalektik Grafik](./dialectical-graph) hâline gelir: dili temel bir sınır
olarak değil metadata olarak ele alarak, herhangi bir dilden
[iddiaları](./claim), [kanıt aralıklarını](./evidence-span) ve ilişkileri
depolayan bir yapı.

## İlgili

- [Çokdilli Bilgi Örgüsü](./multilingual-knowledge-mesh)
