---
title: Provenance
description: L’origine et la chaîne de conservation des affirmations et des preuves
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

La provenance est l’origine et la chaîne de conservation d’une affirmation ou
d’un élément de preuve : qui l’a avancé, quand, sur quelles bases, et comment
cela a atteint sa forme actuelle. Sans provenance, vous ne pouvez pas distinguer
les sources primaires des résumés reconditionnés, et vous ne pouvez pas savoir
si un accord apparent reflète des preuves indépendantes ou des citations
circulaires.

Dans un [Graphe dialectique](./dialectical-graph), la provenance est encodée au
moyen de nœuds de [source](./source), de [segments de preuve](./evidence-span)
et d’arêtes `cites` qui rendent l’attribution explicite plutôt que laissée à
l’implicite de la prose. Cela évite le problème de troncature des extraits,
courant dans le [RAG](./rag-limitations), où la citation fait disparaître le
contexte et où la [ligne de responsabilité](./responsibility-line) disparaît.

La provenance est un prérequis à la [traçabilité](./traceability) : si vous ne
pouvez pas remonter d’une affirmation à son origine, vous ne pouvez pas la
corriger lorsque le monde change.
