---
title: Argumentatieve relaties
description: "Randtypen in een dialectische graaf, geordend naar functie"
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Argumentatieve relaties zijn de randtypen in een
[Dialectische Graaf](./dialectical-graph) (zie ook [Graafcomponenten](./graph-components)) die coderen hoe epistemische objecten
zich tot elkaar verhouden. Ze zijn wat een dialectische graaf onderscheidt van
een onderwerp-similariteitsgraaf.

## Uitdagingsrelaties

- [Aanval](./attack) — directe betwisting van de waarheid van een bewering
- [Ondergraving](./undercut) — betwisting van methode, aanname of definitie
- [Tegenvoorbeeld](./counterexample) — een geval dat de bewering ondermijnt
- `contradicts` — expliciete onverenigbaarheid

## Ondersteuningsrelaties

- `supports` — bewijs of redenering die een bewering versterkt
- `cites` — expliciete toeschrijving aan een [bron](./source)
- `replicates` / `fails_to_replicate` — replicatiestatus

## Verfijningsrelaties

- `refines` — vernauwt of verduidelijkt een bewering
- `generalizes` / `specializes` — aanpassingen van de reikwijdte
- `depends_on` — koppelt beweringen aan hun [aannames](./assumption)
- `defines` — verbindt termen met hun definities

Zie [Randen van de Dialectische Graaf](./dialectical-graph-edges) voor de
volledige specificatie en
[Relatietypering vs Similariteit](./relation-typing-vs-similarity) voor waarom
getypeerde randen ertoe doen.
