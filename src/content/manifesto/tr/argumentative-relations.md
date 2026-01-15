---
title: Tartışmacı İlişkiler
description: Bir diyalektik graf içindeki kenar türleri, işlevlerine göre düzenlenmiştir
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Tartışmacı ilişkiler, bir [Diyalektik Graf](./dialectical-graph) içindeki
([Graf Bileşenleri](./graph-components)ne de bakın),
epistemik nesnelerin birbirleriyle nasıl ilişkilendiğini kodlayan kenar
türleridir. Bir diyalektik grafi, konu-benzerliği grafından ayıran şey de
bunlardır.

## İtiraz İlişkileri

- [Saldırı](./attack) — bir iddianın doğruluğuna doğrudan itiraz
- [Altını Oyma](./undercut) — yönteme, varsayıma veya tanıma itiraz
- [Karşı Örnek](./counterexample) — iddiayı bozan bir durum
- `contradicts` — açık uyumsuzluk

## Destek İlişkileri

- `supports` — bir iddiayı güçlendiren kanıt veya akıl yürütme
- `cites` — bir [kaynağa](./source) açık atıf
- `replicates` / `fails_to_replicate` — replikasyon durumu

## Arıtma İlişkileri

- `refines` — bir iddiayı daraltır veya netleştirir
- `generalizes` / `specializes` — kapsam ayarlamaları
- `depends_on` — iddiaları [varsayımlarına](./assumption) bağlar
- `defines` — terimleri tanımlarına bağlar )

Tam belirtim için [Diyalektik Graf Kenarları](./dialectical-graph-edges)na ve
türlendirilmiş kenarların neden önemli olduğu için
[İlişki Türlendirme ve Benzerlik](./relation-typing-vs-similarity)e bakın.
