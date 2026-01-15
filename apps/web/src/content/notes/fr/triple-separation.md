---
title: Séparation triple
description: "Règle architecturale séparant le texte brut, les affirmations normalisées et les relations explicites"
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

La séparation triple est la règle architecturale d’un [Graphe dialectique](./dialectical-graph) qui maintient trois couches distinctes : le texte original est conservé sous forme de [segments de preuve](./evidence-span) citables ; les [affirmations](./claim) sont décomposées en [propositions normalisées](./normalized-proposition) ; et les relations sont stockées comme des liens argumentatifs explicites (voir [Arêtes du graphe dialectique](./dialectical-graph-edges)).

Cette séparation évite un mode d’échec courant en [RAG](./rag-limitations) : la troncature d’extraits. Lorsque le texte est récupéré et résumé sans préserver la formulation originale, l’attribution peut disparaître silencieusement. La séparation triple garantit que vous pouvez toujours remonter d’une affirmation aux mots exacts et à la [source](./source) qui les a produits.

Elle permet aussi la [synthèse de connaissances](./knowledge-synthesis) en rendant la structure interrogeable. Vous pouvez demander « qu’est-ce qui attaque cette affirmation ? » ou « sur quelles définitions cela s’appuie-t-il ? » parce que ces relations sont stockées, et non implicites.
