---
title: Dialectische Graaf
description:
  Een kennisgraafmodel dat beweringen en relaties opslaat in plaats van
  documentinhoud
sourceLocale: en
sourceHash: cd2021478e98
translatedAt: 2026-01-14
---

Een dialectische graaf is een kennisgraaf die argumentatieve structuur opslaat ,
in plaats van documenten te behandelen als ongedifferentieerde tekst. Het
kerninzicht is eenvoudig: verwar tekst niet met kennis. Tekst is verpakking;
kennis is de beperkingenstructuur die beweringen elkaar laat ondersteunen,
aanvallen en verfijnen.

[Cowetenschapper](./coscientist) dwingt een drievoudige scheiding af: originele
tekst blijft bewaard als citeerbare evidence spans; beweringen worden ontleed
tot genormaliseerde proposities; en relaties worden opgeslagen als expliciete
argumentatieve bindings. Dit is een structurele oplossing voor een
veelvoorkomende [RAG](./rag)-faalmodus: afkapping van fragmenten. De evidence
span bewaart de exacte bewoording en bron, de bewering registreert wie wat heeft
beweerd, en een `cites`-edge maakt toeschrijving expliciet in plaats van
impliciet via proza.

De graaf scheidt ook een inferentielaag van een narratieve laag . Een document
is geen definitieve waarheid; het is een momentopname van de graaf. Elke zin
moet kunnen terugsporen via bewering, scope, aanname, methode, data, evidence
span en bron. Zonder die keten is een zin gewoon een zin, geen kennis.

Om te fungeren als rem op [Encyclopedie-ineenstorting](./encyclopedia-meltdown),
geeft het systeem prioriteit aan tegenstrijdigheden en tegenvoorbeelden boven
consensus. Wanneer een bewering de graaf binnenkomt, is de standaardhouding
adversarieel: zoek vroeg naar aanvallen en ondermijningen, zodat de structuur
wordt bijgewerkt via weerlegging in plaats van af te drijven door herhaling.
Voor concrete node- en relatietypen, zie
[Dialectische Graaf-nodes](./dialectical-graph-nodes) en
[Dialectische Graaf-edges](./dialectical-graph-edges).
