---
title: Phénomènes de dérive
description: Changements des systèmes de connaissance au fil du temps
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

Les phénomènes de dérive sont les manières dont les systèmes de connaissance
évoluent au fil du temps, souvent de façon invisible, ce qui entraîne des
erreurs qui ressemblent à des contradictions mais relèvent en réalité d’un
décalage temporel.

## [Dérive sémantique](./semantic-drift)

- [Dérive de définition](./definition-drift) — quand le sens d’un terme se
  déplace au fil du temps ou selon les communautés
- [Perte de sens](./meaning-loss) — quand des affirmations deviennent obsolètes
  parce que leurs termes ne s’appliquent plus

## [Dérive environnementale](./environmental-drift)

- [Non-stationnarité](./nonstationarity) — quand le processus sous-jacent qui
  produit les données change au fil du temps

## [Dérive du système](./system-drift)

- [Effondrement du modèle](./model-collapse) — dégradation due à l’entraînement
  sur des données générées par IA
- [Correction vs dérive](./correction-vs-drift) — ce qui se passe lorsque
  corriger les erreurs coûte plus cher que de les laisser se propager

## Défense

Le [Graphe dialectique](./dialectical-graph) suit explicitement la dérive en
séparant les [définitions](./definition-drift) des [affirmations](./claim) et en
enregistrant quand et où les affirmations étaient censées s’appliquer. Cela
évite les fausses contradictions dues à un décalage temporel.
