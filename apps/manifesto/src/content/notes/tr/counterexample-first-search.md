---
title: Karşı-Örnek Öncelikli Arama
description: Destekleyici kanıtlar yerine karşı örneklere öncelik veren strateji
sourceLocale: en
sourceHash: 2b3848f34451
translatedAt: 2026-01-14
---

Karşı-örnek öncelikli arama, popülerliği kalite kanıtı olarak değil, bir risk
sinyali olarak ele alan bir [keşif stratejisidir](./exploration-strategies). Bir
[iddia](./claim) ne kadar yaygın biçimde tekrar ediliyorsa,
[karşı örnekleri](./counterexample) ve sınır koşullarını bulmak o kadar değerli
hale gelir; çünkü popüler iddialardaki hatalar,
[Ansiklopedi Çöküşü](./encyclopedia-meltdown) içinde daha büyük bir etki alanına
sahiptir.

Bu strateji, normal bilgi getirme önceliğini tersine çevirir. Standart arama,
alaka düzeyine veya sıklığa göre sıralar; bu da genellikle uzlaşıyı görünür
kılar. Karşı-örnek öncelikli arama ise bilerek uyuşmazlık, uç durumlar ve
başarısızlıkları arar; çünkü bunlar bilgiyi güncellemek için daha
bilgilendiricidir.

[Çürütme-öncelikli arama](./rebuttal-first-search) ile ilişkilidir, ancak ondan
farklıdır; çürütme-öncelikli arama iddiaları kabul etmek için bir doğrulama
protokolüdür. Karşı-örnek öncelikli arama ise bir keşif stratejisidir:
doğrulayanı aramak yerine, neyin bozduğunu aktif biçimde aramak.
