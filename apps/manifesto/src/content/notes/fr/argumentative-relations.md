---
title: Relations argumentatives
description: Types d’arêtes dans un graphe dialectique organisées par fonction
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

Les relations argumentatives sont les types d’arêtes dans un
[Graphe dialectique](./dialectical-graph) qui encodent la manière dont les
objets épistémiques se rapportent les uns aux autres. C’est ce qui distingue un
graphe dialectique d’un graphe de similarité thématique.

## Relations de contestation

- [Attaque](./attack) — contestation directe de la véracité d’une affirmation
- [Réfutation par affaiblissement](./undercut) — remise en cause de la méthode,
  d’une hypothèse ou d’une définition
- [Contre-exemple](./counterexample) — un cas qui invalide l’affirmation
- `contradicts` — incompatibilité explicite

## Relations de soutien

- `supports` — preuves ou raisonnement qui renforcent une affirmation
- `cites` — attribution explicite à une [source](./source)
- `replicates` / `fails_to_replicate` — statut de réplication

## Relations de raffinage

- `refines` — restreint ou clarifie une affirmation
- `generalizes` / `specializes` — ajustements de portée
- `depends_on` — relie des affirmations à leurs [hypothèses](./assumption)
- `defines` — relie des termes à leurs définitions (suivies dans le temps via la
  [Dérive des définitions](./definition-drift))

Voir [Arêtes du graphe dialectique](./dialectical-graph-edges) pour la
spécification complète et
[Typage des relations vs similarité](./relation-typing-vs-similarity) pour
comprendre pourquoi les arêtes typées comptent.
