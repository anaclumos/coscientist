---
title: Beperkingen van RAG
description: Waarom standaard retrieval-augmented generation geen echte ontdekking kan opleveren
---

[RAG](./rag)  verbetert de feitelijkheid door relevante documenten op te halen, maar standaard RAG heeft nog steeds structurele beperkingen voor kennisproductie. Het haalt tekstfragmenten op en produceert vloeiende proza; het representeert niet de objecten die je nodig hebt voor ontdekking: beweringen, tegenbeweringen, definities, methoden en de relaties die ze verbinden.

Een faalmodus is kwantitatieve bias. Als veel bronnen een bewering herhalen en een klein aantal doorslaggevende weerleggingen of tegenvoorbeelden bevat, dan heeft similarity-based retrieval de neiging de meerderheid te versterken en de keerpunten glad te strijken. Eén tegenvoorbeeld of herziening van een definitie kan meer epistemisch gewicht dragen dan honderd herhalingen, maar het is niet per se "meer vergelijkbaar".

Een andere beperking is het ontbreken van expliciete relaties. RAG kan fragmenten uit studie A en studie B ophalen, maar kan meestal niet representeren dat B A weerlegt, de methode ondergraaft of de reikwijdte ervan beperkt; het zet fragmenten alleen maar bij elkaar in de buurt. Dat vervangt de kwaliteit van onderbouwing door de kwantiteit aan tekst.

Ten slotte is provenance  kwetsbaar onder truncatie. Wanneer een fragment de toeschrijving weglaat ("B rapporteert dat A beweerde…") en alleen de conclusie bewaart , kan het model stilletjes de verantwoordelijkheidslijn herschrijven. Citaten veranderen in vibes, en "wie wat beweerde" wordt moeilijk te reconstrueren.

Daardoor heeft standaard RAG moeite met kennisupdates en synthese in de aanwezigheid van echte [twist](./contention). Een alternatief is te verschuiven van "hoe vergelijkbaar is het" naar "welke relatie is het", zoals in een [Dialectische Graaf](./dialectical-graph) die beweringen en relatietypen opslaat en tegenstrijdigheden en tegenvoorbeelden prioriteert in plaats van consensus.
