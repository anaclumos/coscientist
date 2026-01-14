---
title: Typage des relations vs similarité
description:
  Pourquoi les arêtes typées résolvent ce que la récupération fondée sur la
  similarité ne peut pas
sourceLocale: en
sourceHash: ae787ed89f61
translatedAt: 2026-01-14
---

Le typage des relations vs la similarité oppose deux façons de connecter des
connaissances : la récupération fondée sur la similarité ) demande « de quoi
s’agit-il ? », tandis que les graphes à relations typées ) demandent « qu’est-ce
que cela fait à cela ? »

La récupération par similarité fait remonter des documents qui utilisent des
mots similaires. Elle ne peut pas vous dire si ces documents sont d’accord, en
conflit, ou s’ils traitent de questions différentes. Les arêtes
typées—[soutient](./dialectical-graph-edges), [attaque](./attack),
[réfute](./undercut), [cite](./source)—capturent la relation argumentative, ce
qui permet des questions comme « qu’est-ce qui conteste cette affirmation ? » ou
« de quelles hypothèses cela dépend-il ? »

Cette distinction est cruciale pour la
[synthèse de connaissances](./knowledge-synthesis). Si vous récupérez deux
sources qui « semblent liées » mais sans pouvoir dire si elles sont d’accord ou
en conflit, la synthèse s’effondre en simple résumé. Les arêtes typées font du
conflit un objet explicite qui peut être cartographié, résolu ou consigné.
