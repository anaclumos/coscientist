---
title: RAG-beperkingen
description: Waarom standaard retrieval-augmented generation geen echte ontdekkingen kan opleveren
---

Retrieval-augmented generation (RAG) verbetert de feitelijke betrouwbaarheid door relevante documenten op te halen, maar standaard RAG heeft nog steeds structurele beperkingen voor kennisproductie. Het haalt tekstfragmenten op en produceert vloeiende proza; het representeert niet de objecten die je nodig hebt voor ontdekking: beweringen, tegenbeweringen, definities, methoden en de relaties die ze met elkaar verbinden.

Een faalmodus is kwantitatieve bias. Als veel bronnen een bewering herhalen en een klein aantal beslissende weerleggingen of tegenvoorbeelden bevat, heeft similarity-based retrieval (op overeenkomst gebaseerde retrieval) de neiging de meerderheid te versterken en de kantelpunten glad te strijken. Eén tegenvoorbeeld of herziening van een definitie kan meer epistemisch gewicht dragen dan honderd herhalingen, maar het is niet per se „meer vergelijkbaar”.

Een andere beperking is het ontbreken van expliciete relaties. RAG kan fragmenten uit studie A en studie B ophalen, maar het kan doorgaans niet representeren dat B A weerlegt, de methode ervan ondermijnt of de reikwijdte ervan inperkt; het plaatst fragmenten alleen maar bij elkaar in de buurt. Dat vervangt de kwaliteit van onderbouwing door de kwantiteit van tekst.

Ten slotte is provenance (herkomst) fragiel onder truncation (afkapping). Wanneer een fragment de toeschrijving weglaat („B meldt dat A beweerde…”) en alleen de conclusie bewaart („X werkt”), kan het model stilletjes de verantwoordelijkheidslijn herschrijven. Citaten veranderen in vibes, en „wie wat beweerde” wordt moeilijk te reconstrueren.

Hierdoor heeft standaard RAG moeite met het actualiseren en synthetiseren van kennis in de aanwezigheid van echte [twist](./contention). Een alternatief is om te verschuiven van „hoe vergelijkbaar is het” naar „wat is de relatie,” zoals in een [Dialectische Graaf](./dialectical-graph) die beweringen en relatietypen opslaat en tegenstrijdigheden en tegenvoorbeelden prioriteert in plaats van consensus.