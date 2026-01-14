---
title: Verkenningsstrategieën
description: Strategieën voor graf-traversal voor continue kennisontdekking
sourceLocale: en
sourceHash: e9c34bc73e32
translatedAt: 2026-01-14
---

[Cowetenschapper](./coscientist) heeft meer nodig dan retrieval: het heeft
verkenning nodig die actief tegenstrijdigheden, randvoorwaarden en
methode-afhankelijkheid in de [Dialectische Graaf](./dialectical-graph) naar
boven haalt.

Belangrijke strategieën zijn:

- [Counterexample-First Search](./counterexample-first-search) — behandel
  populariteit als een risicosignaal; geef prioriteit aan tegenvoorbeelden en
  randvoorwaarden
- [Minimum Cut](./minimum-cut) — isoleer de minimale structuur die een
  tegenstrijdigheid veroorzaakt, en richt vervolgens de aandacht op de
  [minimale tegenspraakset](./minimum-contradiction-set)
- [Definition Drift](./definition-drift) — detecteer betekenisverschuivingen in
  plaats van gedeelde concepten te veronderstellen
- [Method-Conclusion Coupling](./method-conclusion-coupling) — cluster
  beweringen per methode om gedeelde gebreken te vinden
- [Replication Path Separation](./replication-path-separation) — onderscheid
  onafhankelijk bewijs van herhaalde herformuleringen

In de implementatie verschijnen deze als gespecialiseerde agents voor
normalisatie, aannames-extractie, tegenvoorbeeld-zoektocht, scope-reconstructie
en het ontwerpen van verificatiestrategieën.
