---
title: Kennissynthese
description: Hoe synthese verschilt van middelen in dialectische kennissystemen
---

Kennissynthese is wat er na retrieval gebeurt wanneer je incompatibele bronnen vergelijkbaar moet maken. Het is geen middelen. Het is het op elkaar afstemmen van premissen, definities en reikwijdte, zodat meningsverschillen expliciete objecten worden in plaats van ruis.

Standaard [RAG](./rag-limitations) is sterk in retrieval en zwak in synthese, omdat het geen intern object heeft dat [contention](./contention) heet. In een [Dialectical Graph](./dialectical-graph) is contention van de eerste orde (first-class), zodat het systeem incompatibiliteit kan ontleden in de oorzaken: definitieverschillen, steekproefverschillen, methodeverschillen, reikwijdteverschillen, of door tijd gedreven [nonstationarity](./nonstationarity).

Oplossing is daarom niet één enkele zin. Het is een vertakte kaart: als dezelfde term onder verschillende definities tot verschillende conclusies leidt, legt het systeem de vertakking vast op het definitiesniveau voordat het dit als een tegenspraak in conclusies behandelt. [Issue nodes](./dialectical-graph-nodes) bundelen wat met wat conflicteert en leggen de voorwaarden vast waaronder het issue kan worden opgelost.

Het doel is een kaart van tegenspraken plus expliciete oplossingsvoorwaarden, zodat toekomstig werk kennis kan bijwerken door herordening in plaats van herschrijven. Daarom is de contemplation-AI in [Coscientist](./coscientist) erop gericht documenten met elkaar te laten botsen: het produceren van issue-clusters, verfijnde voorwaarden, gestructureerde weerleggingen, en expliciete coördinatenstelsels voor vergelijking.