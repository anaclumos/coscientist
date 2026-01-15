---
title: İddia Durumu Taksonomisi
description: Bir iddianın bir diyalektik graf içinde bulunabileceği durumlar
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

İddia durumu taksonomisi, bir [iddianın](./claim) bir
[Diyalektik Graf](./dialectical-graph) içinde bulunabileceği durumları tanımlar. Bir
iddianın zaman içinde tipik olarak bu durumlar arasında nasıl hareket ettiğini görmek
için [İddia Yaşam Döngüsü](./claim-lifecycle) sayfasına bakın.

## Yaygın Durumlar

- `tentative` — hipotez aşaması
- `contested` — aktif tartışma
- `conditionally supported` — belirtilen koşullar altında doğru
- `robust` — birden fazla bağımsız yol üzerinden desteklenmiş
- `refuted` — bir [karşı örnek](./counterexample) tarafından çürütülmüş
- `obsolete` — [tanım kayması](./definition-drift) veya yöntem değişimi
  nedeniyle anlamını yitirmiş

Durum, tek bir güven puanı değildir. Bir iddia, kanıt çeşitliliği açısından
sağlam olabilir ama kapsam açısından tartışmalı olabilir; bir bağlamda koşullu
olarak desteklenirken başka bir bağlamda çürütülmüş olabilir. Çok boyutlu durum,
bu karmaşıklığı yakalar.

Durumlar arasındaki geçişler, nicelikten ziyade çürütmenin türü tarafından
belirlenir. Tek bir iyi temellendirilmiş [karşı örnek](./counterexample), bir
iddiayı sağlamdan çürütülmüşe taşıyabilir; çok sayıda zayıf itiraz ise çözüm
getirmeden onu tartışmalı durumda bırakabilir. Biçimsel geçiş mantığı için
[Durum Geçiş Kuralları](./status-transition-rules) sayfasına bakın.
