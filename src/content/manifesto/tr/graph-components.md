---
title: Graf Bileşenleri
description: Bir diyalektik grafı oluşturan düğüm ve kenar türleri
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

Graf bileşenleri, bir
[Diyalektik Grafın](./dialectical-graph) yapı taşlarıdır: epistemik nesneleri temsil eden [Diyalektik Graf Düğümleri](./dialectical-graph-nodes) ve bunlar arasındaki [Tartışmacı İlişkileri](./argumentative-relations) temsil eden [Diyalektik Graf Kenarları](./dialectical-graph-edges).

**Düğüm türleri** ):

- [İddia](./claim) — doğrulanabilir önermeler
- [Kanıt Alıntısı](./evidence-span) — kaynaklardan birebir alıntılanmış metin
- [Kapsam](./scope) — uygulanabilirlik koşulları
- [Varsayım](./assumption) — örtük öncüller
- [Yöntem](./method) — kanıt üretmeye yönelik prosedürler
- [Kaynak](./source) — köken dayanakları
- [Karşı Örnek](./counterexample) — iddiaları bozan durumlar
- [Sorun Düğümü](./issue-node) — çarpışan iddiaların demetleri

**Kenar türleri** ):

- [Saldırı](./attack) — doğruluğa yönelik doğrudan itirazlar
- [Altını Oyma](./undercut) — gerekçelere yönelik itirazlar
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Çekişme](./contention) — yapılandırılmış çatışma işaretleyicileri
