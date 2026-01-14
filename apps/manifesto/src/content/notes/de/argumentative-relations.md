---
title: Argumentative Relationen
description: Kantentypen in einem dialektischen Graphen, geordnet nach Funktion
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

Argumentative Relationen sind die Kantentypen in einem
[Dialektischen Graphen](./dialectical-graph), die kodieren, wie epistemische
Objekte zueinander in Beziehung stehen. Sie sind es, was einen dialektischen
Graphen von einem Topic-Ähnlichkeits-Graphen unterscheidet.

## Challenge-Relationen

- [Angriff](./attack) — direkte Anfechtung des Wahrheitsgehalts einer Behauptung
- [Untergrabung](./undercut) — Anfechtung von Methode, Annahme oder Definition
- [Gegenbeispiel](./counterexample) — ein Fall, der die Behauptung widerlegt
- `contradicts` — explizite Unvereinbarkeit

## Support-Relationen

- `supports` — Evidenz oder Begründung, die eine Behauptung stärkt
- `cites` — explizite Zuschreibung zu einer [Quelle](./source)
- `replicates` / `fails_to_replicate` — Replikationsstatus

## Refinement-Relationen

- `refines` — grenzt eine Behauptung ein oder präzisiert sie
- `generalizes` / `specializes` — Anpassungen des Geltungsbereichs
- `depends_on` — verknüpft Behauptungen mit ihren [Annahmen](./assumption)
- `defines` — verbindet Begriffe mit ihren Definitionen (über die Zeit
  nachverfolgt via [Definition Drift](./definition-drift))

Siehe [Kanten im Dialektischen Graphen](./dialectical-graph-edges) für die
vollständige Spezifikation und
[Relationstypisierung vs. Ähnlichkeit](./relation-typing-vs-similarity) dafür,
warum typisierte Kanten wichtig sind.
