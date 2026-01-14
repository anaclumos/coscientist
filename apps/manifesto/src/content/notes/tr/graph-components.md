---
title: Graf Bileşenleri
description: Diyalektik bir grafı oluşturan düğüm ve kenar türleri
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

Graf bileşenleri, bir [Diyalektik Grafın](./dialectical-graph) yapı taşlarıdır:
epistemik nesneleri temsil eden düğüm türleri ve bunlar arasındaki ilişkileri
temsil eden kenar türleri.

**Düğüm türleri** (bkz. [Diyalektik Graf Düğümleri](./dialectical-graph-nodes)):

- [İddia](./claim) — doğrulanabilir önermeler
- [Kanıt Alıntısı](./evidence-span) — kaynaklardan birebir alıntılanmış metin
- [Kapsam](./scope) — uygulanabilirlik koşulları
- [Varsayım](./assumption) — örtük öncüller
- [Yöntem](./method) — kanıt üretmeye yönelik prosedürler
- [Kaynak](./source) — köken dayanakları
- [Karşı Örnek](./counterexample) — iddiaları bozan durumlar
- [Sorun Düğümü](./issue-node) — çarpışan iddiaların demetleri

**Kenar türleri** (bkz. [Diyalektik Graf Kenarları](./dialectical-graph-edges)):

- [Saldırı](./attack) — doğruluğa yönelik doğrudan itirazlar
- [Altını Oyma](./undercut) — gerekçelere yönelik itirazlar
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Çekişme](./contention) — yapılandırılmış çatışma işaretleyicileri
