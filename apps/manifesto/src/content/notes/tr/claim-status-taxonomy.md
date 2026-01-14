---
title: İddia Durumu Taksonomisi
description: Diyalektik bir graf içinde bir iddianın bulunabileceği durumlar
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

İddia durumu taksonomisi, bir [iddianın](./claim) bir
[Diyalektik Graf](./dialectical-graph) içinde bulunabileceği durumları tanımlar.

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
getirmeden onu tartışmalı durumda bırakabilir.
