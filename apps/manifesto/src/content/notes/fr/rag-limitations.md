---
title: Limites du RAG
description:
  Pourquoi la génération augmentée par récupération standard ne peut pas
  produire une véritable découverte
sourceLocale: en
sourceHash: 6ccba3a6818d
translatedAt: 2026-01-14
---

Le [RAG](./rag) améliore la factualité en récupérant des documents pertinents,
mais le RAG standard conserve des limitations structurelles pour la production
de connaissances. Il récupère des extraits de texte et produit une prose fluide
; il ne représente pas les objets nécessaires à la découverte : affirmations,
contre-affirmations, définitions, méthodes, et les relations qui les lient.

Un mode d’échec est le biais quantitatif. Si de nombreuses sources répètent une
affirmation et qu’un petit nombre contient des réfutations décisives ou des
contre-exemples, la récupération fondée sur la similarité tend à amplifier la
majorité et à lisser les points de bascule. Un seul contre-exemple ou une
révision de définition peut avoir plus de poids épistémique qu’une centaine de
répétitions, mais il n’est pas nécessairement « plus similaire ».

Une autre limitation est l’absence de relations explicites. Le RAG peut
récupérer des extraits de l’étude A et de l’étude B, mais il ne peut
généralement pas représenter que B réfute A, fragilise sa méthode, ou en
restreint la portée ; il se contente de placer des extraits les uns près des
autres. Cela remplace la qualité des fondements par la quantité de texte.

Enfin, la provenance est fragile en cas de troncature. Lorsqu’un extrait
supprime l’attribution (« B rapporte que A a affirmé… ») et ne conserve que la
conclusion (« X fonctionne »), le modèle peut réécrire silencieusement la ligne
de responsabilité. Les citations deviennent des impressions, et « qui a affirmé
quoi » devient difficile à reconstituer.

Pour cette raison, le RAG standard a du mal à mettre à jour et à synthétiser les
connaissances en présence de véritable [controverse](./contention). Une
alternative consiste à passer de « à quel point est-ce similaire » à « quelle
relation est-ce », comme dans un [Graphe dialectique](./dialectical-graph) qui
stocke des affirmations et des types de relations et priorise les contradictions
et les contre-exemples plutôt que le consensus.
