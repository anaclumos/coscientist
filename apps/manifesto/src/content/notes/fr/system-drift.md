---
title: Dérive du système
description: Dégradation des systèmes de connaissance par auto-contamination ou négligence
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

La dérive du système est la catégorie de
[phénomènes de dérive](./drift-phenomena) où le système de connaissance lui-même
se dégrade au fil du temps, indépendamment des changements sémantiques ou
environnementaux.

## Formes

- [Effondrement du modèle](./model-collapse) — dégradation due à l’entraînement
  sur des données générées par IA
- [Correction vs dérive](./correction-vs-drift) — lorsque corriger les erreurs
  coûte plus cher que de les laisser se propager

## Pourquoi c’est important

La dérive du système est le mode de défaillance où un système de connaissance se
stabilise autour d’un faux état stationnaire « maintenu à peu près ». Les
erreurs persistent parce que la correction est coûteuse ; le contenu généré par
IA contamine les données d’entraînement ; et le système perd progressivement le
contact avec la vérité terrain.

[Effondrement de l’encyclopédie](./encyclopedia-meltdown) en est la forme
extrême : lorsque l’IA prend l’initiative d’écrire, la
[ligne de responsabilité](./responsibility-line) disparaît, et le système dérive
vers un effondrement autoréférentiel. La défense est la
[couche de protocole épistémique](./epistemic-protocol-layer) : maintenir la
correction moins coûteuse que la dérive grâce à la
[traçabilité](./traceability), à
l’[ingestion zéro confiance](./zero-trust-ingestion) et à la
[recherche axée d’abord sur la réfutation](./rebuttal-first-search).

## Liés

- [Phénomènes de dérive](./drift-phenomena) — la catégorie parente
- [Dérive sémantique](./semantic-drift) — lorsque les significations changent
- [Dérive environnementale](./environmental-drift) — lorsque le monde change
- [Dégénérescence institutionnelle](./institutional-brain-rot) — analogue
  organisationnel
