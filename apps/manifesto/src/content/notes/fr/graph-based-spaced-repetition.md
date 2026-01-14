---
title: Répétition espacée basée sur un graphe
description: "Utiliser l’âge de la revendication ou l’âge de la réfutation pour déclencher une re-vérification"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

La répétition espacée basée sur un graphe applique les principes de la
[répétition espacée](./spaced-repetition) à la maintenance des connaissances :
les [revendications](./claim) qui n’ont pas été vérifiées récemment, ou dont les
preuves à l’appui n’ont pas été contestées depuis un certain temps, sont
remontées pour être réexaminées.

L’idée clé est que la connaissance, comme la mémoire, se dégrade sans engagement
actif. Une revendication vérifiée il y a trois ans peut ne plus être valable si
le monde a changé ([non-stationnarité](./nonstationarity)), si les définitions
ont évolué ([dérive définitionnelle](./definition-drift)), ou si de nouveaux
[contre-exemples](./counterexample) sont apparus.

Dans un [Graphe dialectique](./dialectical-graph), on peut l’implémenter en
suivant l’horodatage de la dernière vérification pour chaque revendication et
ses chemins de soutien. L’[Opérateur](./operator) est invité à re-vérifier les
revendications selon un calendrier, avec des intervalles qui s’allongent pour
les revendications robustes et se raccourcissent pour celles qui sont
contestées.