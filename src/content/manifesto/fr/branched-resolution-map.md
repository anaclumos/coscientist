---
title: Carte de résolution ramifiée
description:
  Structure présentant plusieurs conclusions valides en fonction de définitions
  ou de méthodes différentes
sourceLocale: en
sourceHash: c387f6c101ba
translatedAt: 2026-01-14
---

Une carte de résolution ramifiée est une structure qui présente plusieurs
conclusions valides sous forme de branches, à partir de différents points de
départ : définitions, méthodes ou hypothèses. Au lieu d’imposer une réponse
unique, elle montre : « si vous définissez X de cette façon, alors A ; si vous
définissez X de cette autre façon, alors B ».

Il s’agit du format de sortie de la
[synthèse de connaissances](./knowledge-synthesis) lorsque l’incompatibilité ne
peut pas être résolue en une vérité unique. La carte explicite que le désaccord
ne porte pas sur les faits, mais sur les prémisses, et les lecteurs peuvent voir
précisément où les conclusions divergent.

Les cartes ramifiées s’opposent à la pression à faire une moyenne. Dans un
[RAG](./rag) standard, des sources contradictoires sont fusionnées en un résumé
lisse qui masque le désaccord. Une carte ramifiée préserve la structure du
conflit et permet à l’[Opérateur](./operator) de décider quelle branche
s’applique à son contexte.
