---
title: Taxonomie des Anspruchsstatus
description: Die Zustände, die ein Anspruch innerhalb eines dialektischen Graphen einnehmen kann
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

Die Taxonomie des Anspruchsstatus definiert die Zustände, die ein
[Anspruch](./claim) in einem [Dialektischen Graphen](./dialectical-graph)
einnehmen kann. Wie ein Anspruch sich typischerweise im Laufe der Zeit durch
diese Zustände bewegt, siehe den [Anspruchslebenszyklus](./claim-lifecycle).

## Häufige Zustände

- `tentative` — Hypothesenstadium
- `contested` — aktive Debatte
- `conditionally supported` — unter bestimmten Bedingungen wahr
- `robust` — über mehrere unabhängige Pfade gestützt
- `refuted` — durch ein [Gegenbeispiel](./counterexample) zu Fall gebracht
- `obsolete` — Bedeutung verloren durch [Definitionsdrift](./definition-drift)
  oder Methodenwechsel

Status ist kein einzelner Konfidenzwert. Ein Anspruch kann hinsichtlich der
Evidenzdiversität robust sein, aber hinsichtlich des Geltungsbereichs
umstritten; er kann in einem Kontext bedingt gestützt und in einem anderen
widerlegt sein. Mehrdimensionale Statusmodelle erfassen diese Komplexität.

Übergänge zwischen Zuständen werden durch die Art der Widerlegung bestimmt,
nicht durch die Menge. Ein einzelnes gut belegtes
[Gegenbeispiel](./counterexample) kann einen Anspruch von robust zu widerlegt
verschieben; viele schwache Einwände können ihn umstritten lassen, ohne ihn zu
klären. Siehe [Regeln für Statusübergänge](./status-transition-rules) für die
formale Übergangslogik.
