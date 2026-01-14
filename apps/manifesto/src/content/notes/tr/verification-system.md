---
title: Doğrulama Sistemi
description: İddiaları kanıt ve karşı kanıtlarla karşılaştırarak kontrol etme mekanizmaları
---

Doğrulama sistemi, [Eşbilimci](./coscientist)'in [iddiaları](./claim) kanıt, karşı kanıt ve alternatif açıklamalara karşı kontrol etmek için kullandığı mekanizmalar bütünüdür. Tek bir araç değil, uyum içinde çalışan bir protokol ve pratikler kümesidir.

## Temel Bileşenler

- [Doğrulama](./verification) — iddiaları kontrol etme süreci
- [Önce Çürütme Araması](./rebuttal-first-search) — kabulden önce karşı kanıt arama
- [Çoklu Yapay Zekâ Mutabakat Protokolü](./multi-ai-consensus-protocol) — model görüş ayrılığını bir sinyal olarak kullanma
- [Oybirliği Gerekliliği](./unanimity-requirement) — iddiaları yalnızca tüm gözden geçirenler hemfikir olduğunda kabul etme
- [Sorumluluk Hattı](./responsibility-line) — kimin neyi ileri sürdüğünü izleme
- [Karşı Örnek](./counterexample) — iddiaları bozan durumlar
- [Sıfır Güvenli İçeri Alma](./zero-trust-ingestion) — otoriteden önce kaynak/provenans gerektirme

Sistem, [düzeltmeyi sürüklenmeden daha ucuz](./correction-vs-drift) tutacak şekilde tasarlanmıştır ve [arzu edilen zorluğu](./desirable-difficulty-in-verification) destekleyerek [Operatör](./operator)'ün sürece bağlı kalmasını sağlar.