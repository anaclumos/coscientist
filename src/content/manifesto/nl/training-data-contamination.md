---
title: Contaminatie van trainingsdata
description: Door AI gegenereerde inhoud die de corpora vervuilt waarmee toekomstige modellen worden getraind
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Contaminatie van trainingsdata treedt op wanneer door AI gegenereerde tekst op het web belandt,
wordt gescrapet in trainingscorpora, en de volgende generatie modellen vormt.
Het resultaat is een terugkoppelingslus: modellen die zijn getraind op de output van hun voorgangers
erven hun biases, versterken hun fouten, en verliezen toegang tot het onafhankelijke
menselijke signaal dat de originelen nuttig maakte.

Dit verschilt van benchmark-contaminatie ,
al delen beide het woord. Contaminatie van trainingsdata gaat over de herkomst
van het onderliggende corpus: zodra [AI-slop](./ai-slop) zich op grote schaal mengt met
door mensen geschreven tekst, wordt het onderscheiden ervan duur of onmogelijk.
Webscrapes van na 2022 zijn in toenemende mate verdacht.

De gevolgen stapelen zich op. [Modelinstorting](./model-collapse) beschrijft de
kwaliteitsachteruitgang wanneer modellen trainen op synthetische data: distributies vernauwen,
zeldzame modi verdwijnen, en de output convergeert naar een gehomogeniseerd gemiddelde.
[Encyclopedie-meltdown](./encyclopedia-meltdown) beschrijft het falen van het kennissysteem
wanneer AI-output als bron wordt geciteerd, waardoor circulaire autoriteit ontstaat.
Contaminatie van trainingsdata is de bovenstroomse oorzaak van beide.

De parallel met [staal met lage achtergrondstraling](./low-background-steel) maakt het
probleem duidelijk. Kernproeven besmetten al het staal van na 1945; de proliferatie van LLM's
vervuilde alle webtekst van na 2020. Beide contaminatiegebeurtenissen waren onomkeerbaar,
beide creëerden vraag naar [hulpbronnen van vóór de contaminatie](./pre-contamination-resource),
en beide betekenen dat het voortstuwen van de technologie materialen vereist die zijn geproduceerd voordat
de technologie bestond.

Oplossingen omvatten verificatie van [herkomst](./provenance) , archieven met
tijdstempelpoorten, en datacuratiepraktijken die bronnen met duidelijke ketens van menselijk auteurschap
voorrekken. Het MIT Data Provenance Initiative en vergelijkbare inspanningen beogen
transparantie te brengen in de herkomst van trainingsdata—een noodzakelijke stap als toekomstige modellen
willen voorkomen dat ze op hun eigen reflecties worden getraind.
