---
title: Sistem Sürüklenmesi
description: Bilgi sistemlerinin kendi kendini kirletme veya ihmal yoluyla bozulması
---

Sistem sürüklenmesi, anlamsal ya da çevresel değişimlerden bağımsız olarak, bilgi sisteminin bizzat kendisinin zaman içinde bozulduğu [sürüklenme olguları](./drift-phenomena) kategorisidir.

## Biçimler

- [Model Çöküşü](./model-collapse) — yapay zekâ tarafından üretilmiş verilerle eğitimden kaynaklanan bozulma
- [Düzeltme ve Sürüklenme](./correction-vs-drift) — hataları düzeltmenin, yayılmalarına izin vermekten daha maliyetli hâle gelmesi

## Neden Önemli?

Sistem sürüklenmesi, bir bilgi sisteminin "yaklaşık olarak sürdürülen" sahte bir durağan durum etrafında istikrar kazandığı arıza kipidir. Hatalar kalıcı olur çünkü düzeltme pahalıdır; yapay zekâ üretimi içerik eğitim verisini kirletir; ve sistem giderek temel gerçeklikle  temasını kaybeder.

[Ansiklopedi Erimesi](./encyclopedia-meltdown) bunun uç biçimidir: yazma inisiyatifini yapay zekâ aldığında [sorumluluk hattı](./responsibility-line) ortadan kalkar ve sistem öz-referanslı bir çöküşe doğru sürüklenir. Savunma, [epistemik protokol katmanı](./epistemic-protocol-layer)dır: [izlenebilirlik](./traceability), [sıfır-güvenli alım](./zero-trust-ingestion) ve [çürütme-önce arama](./rebuttal-first-search) yoluyla düzeltmeyi sürüklenmeden daha ucuz tutmak.

## İlgili

- [Sürüklenme Olguları](./drift-phenomena) — üst kategori
- [Anlamsal Sürüklenme](./semantic-drift) — anlamların değişmesi
- [Çevresel Sürüklenme](./environmental-drift) — dünyanın değişmesi
- [Kurumsal Beyin Çürümesi](./institutional-brain-rot) — örgütsel analoji
