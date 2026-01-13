---
title: Limitations du RAG
description: Pourquoi la génération augmentée par récupération standard ne peut pas produire de véritable découverte
---

La génération augmentée par récupération (RAG) améliore la factualité en récupérant des documents pertinents, mais le RAG standard présente encore des limitations structurelles pour la production de connaissances. Il récupère des extraits de texte et produit une prose fluide ; il ne représente pas les objets dont vous avez besoin pour la découverte : des affirmations, des contre-affirmations, des définitions, des méthodes, et les relations qui les lient.

Un mode d’échec est le biais quantitatif. Si de nombreuses sources répètent une affirmation et qu’un petit nombre contient des réfutations décisives ou des contre-exemples, la récupération fondée sur la similarité tend à amplifier la majorité et à lisser les points de bascule. Un seul contre-exemple ou une révision de définition peut porter plus de poids épistémique qu’une centaine de répétitions, mais ce n’est pas forcément « plus similaire ».

Une autre limitation est l’absence de relations explicites. Le RAG peut récupérer des extraits de l’étude A et de l’étude B, mais il ne peut généralement pas représenter que B réfute A, fragilise sa méthode, ou en restreint la portée ; il se contente de placer des extraits les uns à côté des autres. Cela remplace la qualité des justifications par la quantité de texte.

Enfin, la provenance est fragile en cas de troncature. Lorsqu’un extrait perd l’attribution (« B rapporte que A a affirmé… ») et ne conserve que la conclusion (« X fonctionne »), le modèle peut réécrire silencieusement la ligne de responsabilité. Les citations deviennent des impressions, et « qui a affirmé quoi » devient difficile à reconstituer.

Pour cette raison, le RAG standard a du mal avec la mise à jour des connaissances et la synthèse en présence de véritable [controverse](./contention). Une alternative consiste à passer de « à quel point est-ce similaire » à « quelle est la relation », comme dans un [Graphe dialectique](./dialectical-graph) qui stocke des affirmations et des types de relations, et qui priorise les contradictions et les contre-exemples plutôt que le consensus.