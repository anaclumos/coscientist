---
title: Hallucinatie
description: AI-uitvoer die plausibel is maar feitelijk onjuist of verzonnen
sourceLocale: en
sourceHash: 35a042b51f6a
translatedAt: 2026-01-14
---

Een hallucinatie is AI-uitvoer die zelfverzekerd en coherent leest, maar
feitelijke fouten, verzonnen informatie of bedachte verwijzingen bevat. Het
gevaar is niet willekeur: het is plausibiliteit. Gehallucineerde tekst doorstaat
vaak een vluchtige controle omdat ze de statistische patronen van
waarheidsgetrouwe proza volgt.

Hallucinatie is een symptoom van hoe [Grote taalmodellen](./llm) werken: ze
voorspellen waarschijnlijke volgende tokens, niet ware. Wanneer de trainingsdata
over een onderwerp schaars of tegenstrijdig is, interpoleert het model, en het
resultaat kan soepel fout zijn. Daarom is de [vloeiendheidsval](./fluency-trap)
zo gevaarlijk: vloeiendheid impliceert geen nauwkeurigheid.

In [Cowetenschapper](./coscientist) wordt het hallucinatie-risico beheerd via de
[epistemische protokollaag](./epistemic-protocol-layer):
[traceerbaarheid](./traceability) vereist dat beweringen aansluiten op
[evidence spans](./evidence-span),
[weerlegging-eerst zoeken](./rebuttal-first-search) voert stresstests uit vóór
acceptatie, en het [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol)
gebruikt model-onenigheid als signaal voor nadere inspectie.
