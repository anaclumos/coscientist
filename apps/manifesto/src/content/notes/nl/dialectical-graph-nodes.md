---
title: Knooppunten in een Dialectische Graaf
description: "De knooppunttypen in een dialectische kennisgraaf"
sourceLocale: en
sourceHash: 007206ea7078
translatedAt: 2026-01-14
---

In een [Dialectische Graaf](./dialectical-graph) vertegenwoordigen knooppunten
epistemische objecten in plaats van ruwe tekst. Voor een overzicht van hoe deze
stukken in elkaar passen, zie [Grafcomponenten](./graph-components).
Veelvoorkomende knooppunttypen zijn:

- [Claim](./claim) — verifieerbare proposities
- [Scope](./scope) — voorwaarden voor toepasbaarheid
- [Assumption](./assumption) — impliciete premissen
- Definities — termbetekenissen
- [Method](./method) — procedures die bewijs of conclusies genereren
- Data — metingen of resultaten
- [Evidence Span](./evidence-span) — exacte geciteerde passages
- [Source](./source) — herkomstan­kers
- [Counterexample](./counterexample) — gevallen die claims breken of inperken
- [Issue Node](./issue-node) — bundels van botsende claimclusters

Deze decompositie voorkomt een veelvoorkomende verwarring: een document is niet
één ding. Datzelfde paper kan een definitie introduceren, een claim poneren,
bewijs aanhalen en een eerder resultaat weerleggen; elk van die onderdelen moet
adresseerbaar blijven als je wilt dat kennis wordt bijgewerkt in plaats van
louter geaccumuleerd.

Claimstatus is multidimensionaal in plaats van één enkele vertrouwensscore.
Overgangen worden minder gedreven door het aantal weerleggingen en meer door het
soort weerlegging en of die slaagt op het niveau van scope, aanname, definitie
of methode; zie [Dialectische Graaf-randen](./dialectical-graph-edges).