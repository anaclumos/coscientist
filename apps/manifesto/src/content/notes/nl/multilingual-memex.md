---
title: Meertalige Memex
description: Een taalbewust persoonlijk kennissysteem met automatische vertaalondersteuning
sourceLocale: en
sourceHash: 4cbc551868c1
translatedAt: 2026-01-14
---

Een meertalige Memex is een persoonlijk kennissysteem dat van nature inhoud in
meerdere talen ondersteunt, met automatische taaldetectie, vertaling en
cross-linguale koppelingen. Het breidt de oorspronkelijke [Memex](./memex)-visie
van [Vannevar Bush](./vannevar-bush) uit naar een wereld waarin kennis geen
taalgrenzen respecteert.

[Sunghyun Cho](./sunghyun-cho)'s [Extracranial](./extracranial) is een
implementatie van dit concept. Het bevat automatische taaldetectie,
locale-specifieke levering met behulp van hreflang-tags, en de mogelijkheid om
in één taal te schrijven terwijl vertaalsystemen de levering in andere talen
afhandelen.

De architecturale implicaties zijn aanzienlijk. Interface-elementen, zoeken en
koppelingen moeten allemaal rekening houden met taal:

- Een zoekopdracht in het Koreaans zou relevante inhoud moeten vinden, ongeacht
  of die oorspronkelijk in het Koreaans is geschreven of uit het Engels is
  vertaald.
- Backlinks moeten over talen heen werken.
- De [responsibility line](./responsibility-line) moet niet alleen bijhouden wie
  wat heeft beweerd, maar ook in welke taal en via welke vertaalmethode.

Daarom beschouwt [Extracranial](./extracranial) communitybijdragen via GitHub om
vertalingen te verfijnen: machinevertaling maakt meertalige inhoud mogelijk,
maar menselijke beoordeling is nodig om de
[vertalingsgetrouwheid](./translation-fidelity) te behouden. De meertalige Memex
is geen opgelost probleem, maar een voortdurende samenwerking tussen
geautomatiseerde systemen en menselijk oordeel.

Voor [Cowetenschapper](./coscientist) wordt de meertalige Memex de meertalige
[Dialectische graaf](./dialectical-graph): een structuur die [claims](./claim),
[evidence spans](./evidence-span) en relaties uit elke taal opslaat, waarbij
taal als metadata wordt behandeld in plaats van als een fundamentele grens.
