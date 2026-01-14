---
title: Driftfenomenen
description: Tijdgedreven veranderingen in kennissystemen
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

Driftfenomenen zijn de manieren waarop kennissystemen in de loop van de tijd
veranderen, vaak onzichtbaar, wat leidt tot fouten die op tegenspraak lijken
maar in feite gaan over een temporele mismatch.

## [Semantische drift](./semantic-drift)

- [Definitiedrift](./definition-drift) — wanneer de betekenis van een term
  verschuift door de tijd heen of tussen gemeenschappen
- [Betekenisverlies](./meaning-loss) — wanneer beweringen verouderen omdat hun
  termen niet langer van toepassing zijn

## [Omgevingsdrift](./environmental-drift)

- [Niet-stationariteit](./nonstationarity) — wanneer het onderliggende proces
  dat data produceert in de loop van de tijd verandert

## [Systeemdrift](./system-drift)

- [Modelinstorting](./model-collapse) — achteruitgang door trainen op door AI
  gegenereerde data
- [Correctie versus drift](./correction-vs-drift) — wat er gebeurt wanneer
  fouten herstellen meer kost dan ze laten doorwerken

## Verdediging

De [Dialectische graaf](./dialectical-graph) volgt drift expliciet door
[definities](./definition-drift) te scheiden van [beweringen](./claim) en vast
te leggen wanneer en waar beweringen bedoeld waren om van toepassing te zijn.
Dit voorkomt schijnbare tegenspraken door een temporele mismatch.
