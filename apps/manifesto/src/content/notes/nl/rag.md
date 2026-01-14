---
title: RAG
description: Retrieval-Augmented Generation, een techniek om AI-uitvoer te verankeren in opgehaalde documenten
---

RAG (Retrieval-Augmented Generation) is een techniek die de nauwkeurigheid van AI-uitvoer verbetert door relevante documenten uit een corpus op te halen en die als context te gebruiken voor generatie. In plaats van uitsluitend te steunen op parameters die tijdens training zijn geleerd, kan het model externe bronnen raadplegen, wat [hallucinatie](./hallucination) vermindert en kennis mogelijk maakt die niet in de trainingsdata zat.

De standaard RAG-pipeline werkt als volgt: een query wordt ge-embed in een vectorruimte, vergelijkbare documenten worden opgehaald op basis van vectorsimilariteit, en de opgehaalde tekst wordt aan een [Groot taalmodel](./llm) gegeven als context om een antwoord te genereren. Deze aanpak is wijdverbreid geworden voor vraag-antwoord, zoeken en kennisintensieve taken.

RAG heeft echter structurele beperkingen voor kennisproductie. Het haalt tekstfragmenten op op basis van gelijkenis, niet op basis van argumentatieve relaties. Het kan geen onderscheid maken tussen ondersteuning en aanval, bewijs en mening, of primaire bron en herformulering. Wanneer bronnen conflicteren, heeft RAG de neiging ze te vermengen tot vloeiende samenvattingen in plaats van de [twist](./contention) zichtbaar te maken. Zie [Beperkingen van RAG](./rag-limitations) voor de volledige kritiek.

[Cowetenschapper](./coscientist) gaat verder dan RAG door een [Dialectische Graaf](./dialectical-graph) te onderhouden die [beweringen](./claim), [bewijsfragmenten](./evidence-span) en getypeerde relaties opslaat. Ophalen wordt dan: "wat raakt aan deze bewering?" in plaats van "wat is vergelijkbaar met deze query?"
