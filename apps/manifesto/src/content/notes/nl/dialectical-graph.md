---
title: Dialectische Graaf
description: Een kennisgraafmodel dat beweringen en relaties opslaat in plaats van documentinhoud
---

Een dialectische graaf is een kennisgraaf die argumentatieve structuur opslaat (beweringen, definities, aannames, methoden, bewijssnippers, en de relaties daartussen) in plaats van documenten te behandelen als ongedifferentieerde tekst. Het kerninzicht is eenvoudig: verwissel tekst niet met kennis. Tekst is verpakking; kennis is de structuur van beperkingen die beweringen in staat stelt elkaar te ondersteunen, aan te vallen en te verfijnen.

[Coscientist](./coscientist) dwingt een drievoudige scheiding af: de oorspronkelijke tekst blijft behouden als citeerbare bewijssnippers; beweringen worden ontleed in genormaliseerde proposities; en relaties worden opgeslagen als expliciete argumentatieve bindingen. Dit is een structurele oplossing voor een veelvoorkomende RAG-faalmodus: afkapping van fragmenten. De bewijssnipper bewaart de exacte bewoording en bron, de bewering legt vast wie wat stelde, en een `cites`-edge maakt toeschrijving expliciet in plaats van impliciet via proza.

De graaf scheidt ook een inferentielaag (het evoluerende netwerk van beweringen) van een narratieve laag (een tijdgestempelde projectie die geschikt is om te lezen). Een document is geen uiteindelijke waarheid; het is een momentopname van de graaf. Elke zin zou moeten kunnen terugsporen via bewering, reikwijdte, aanname, methode, data, bewijssnipper en bron. Zonder die keten is een zin gewoon een zin, geen kennis.

Om te fungeren als rem op [Encyclopedia Meltdown](./encyclopedia-meltdown), geeft het systeem prioriteit aan tegenstrijdigheden en tegenvoorbeelden boven consensus. Wanneer een bewering de graaf binnenkomt, is de standaardhouding adversarieel: zoek vroegtijdig naar aanvallen en ondermijningen, zodat de structuur zich bijwerkt via weerlegging in plaats van af te drijven door herhaling. Voor concrete node- en relatietypen, zie [Dialectische Graafnodes](./dialectical-graph-nodes) en [Dialectische Graaf-edges](./dialectical-graph-edges).