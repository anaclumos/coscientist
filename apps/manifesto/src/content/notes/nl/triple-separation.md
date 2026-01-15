---
title: Drievoudige scheiding
description: "Architectuurregel die ruwe tekst, genormaliseerde claims en expliciete relaties van elkaar scheidt"
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Drievoudige scheiding is de architectuurregel in een [Dialectische Graaf](./dialectical-graph) die drie lagen strikt gescheiden houdt: de oorspronkelijke tekst blijft bewaard als citeerbare [evidence spans](./evidence-span); [claims](./claim) worden opgesplitst in [genormaliseerde proposities](./normalized-proposition); en relaties worden opgeslagen als expliciete argumentatieve koppelingen.

Deze scheiding voorkomt een veelvoorkomende faalmodus in [RAG](./rag-limitations): fragmentafkapping. Wanneer tekst wordt opgehaald en samengevat zonder de originele bewoording te bewaren, kan attributie ongemerkt verdwijnen. Drievoudige scheiding zorgt ervoor dat je een claim altijd kunt herleiden tot de exacte woorden en de [bron](./source) die ze heeft voortgebracht.

Het maakt ook [kennis-synthese](./knowledge-synthesis) mogelijk door de structuur bevraagbaar te maken. Je kunt vragen: "wat valt deze claim aan?" of "op welke definities steunt dit?" omdat die relaties zijn opgeslagen, niet slechts geïmpliceerd.
