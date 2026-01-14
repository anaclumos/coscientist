---
title: Zero-Trust-inname
description: Protocol dat expliciete herkomst vereist voordat beweringen worden
  geaccepteerd
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

Zero-trust-inname is een protocol dat binnenkomende informatie standaard als
niet-geverifieerd behandelt. Elke [bewering](./claim) moet expliciete
[herkomst](./provenance) dragen en door [verificatie](./verification) gaan
voordat zij autoriteit krijgt in het kennissysteem.

De naam is ontleend aan zero-trust-beveiliging: ga ervan uit dat niets veilig is
totdat het is bewezen. In de praktijk betekent dit dat nieuwe beweringen
binnenkomen met de status `tentative`, herleidbaar moeten zijn tot
[bronnen](./source) en [bewijsfragmenten](./evidence-span), en blootgesteld
moeten worden aan [weerlegging-eerst-zoeken](./rebuttal-first-search) voordat ze
als gevestigd worden behandeld.

Zero-trust-inname is een verdediging tegen [AI-slop](./ai-slop) en
[Encyclopedie-ineenstorting](./encyclopedia-meltdown). Wanneer de omgeving wordt
overspoeld met plausibele maar niet-geverifieerde inhoud, is de enige veilige
houding om bewijs van herkomst te eisen en uitdagingen te doorstaan voordat er
acceptatie volgt.
