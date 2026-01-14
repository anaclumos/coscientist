---
title: Taxonomie des statuts d’une affirmation
description: Les états possibles d’une affirmation au sein d’un graphe dialectique
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

La taxonomie des statuts d’une [affirmation](./claim) définit les états qu’une
[affirmation](./claim) peut occuper dans un
[Graphe dialectique](./dialectical-graph).

## États courants

- `tentative` — stade d’hypothèse
- `contested` — débat actif
- `conditionally supported` — vrai sous des conditions spécifiées
- `robust` — soutenu via plusieurs chemins indépendants
- `refuted` — invalidé par un [contre-exemple](./counterexample)
- `obsolete` — sens perdu en raison d’une
  [dérive de définition](./definition-drift) ou d’un changement de méthode

Le statut n’est pas un score unique de confiance. Une affirmation peut être
robuste quant à la diversité des preuves tout en étant contestée quant à sa
portée ; elle peut être conditionnellement étayée dans un contexte et réfutée
dans un autre. Un statut multidimensionnel rend compte de cette complexité.

Les transitions entre états sont déterminées par le type de réfutation, et non
par la quantité. Un seul [contre-exemple](./counterexample) solidement étayé
peut faire passer une affirmation de robuste à réfutée ; de nombreuses
objections faibles peuvent la laisser contestée sans trancher.
