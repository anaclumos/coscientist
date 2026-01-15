---
title: Graph-Komponenten
description: Die Knoten- und Kantentypen, aus denen ein dialektischer Graph besteht
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

Graph-Komponenten sind die Bausteine eines
[Dialektischen Graphen](./dialectical-graph): die [Knoten des Dialektischen Graphen](./dialectical-graph-nodes), die epistemische
Objekte repräsentieren, und die [Kanten des Dialektischen Graphen](./dialectical-graph-edges), die [Argumentative Relationen](./argumentative-relations) zwischen ihnen
darstellen.

**Knotentypen** ):

- [Behauptung](./claim) — überprüfbare Aussagen
- [Evidenzspanne](./evidence-span) — exakt zitierter Text aus Quellen
- [Geltungsbereich](./scope) — Anwendungsbedingungen
- [Annahme](./assumption) — implizite Prämissen
- [Methode](./method) — Verfahren zur Erzeugung von Evidenz
- [Quelle](./source) — Provenienzanker
- [Gegenbeispiel](./counterexample) — Fälle, die Behauptungen widerlegen
- [Issue-Knoten](./issue-node) — Bündel kollidierender Behauptungen

**Kantentypen** ):

- [Angriff](./attack) — direkte Infragestellungen der Wahrheit
- [Untergrabung](./undercut) — Infragestellungen der Grundlage
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Kontention](./contention) — strukturierte Konfliktmarkierungen
