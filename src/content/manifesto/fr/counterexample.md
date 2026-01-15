---
title: Contre-exemple
description: Un cas qui invalide ou restreint une affirmation
sourceLocale: en
sourceHash: 6a23b6dcab90
translatedAt: 2026-01-14
---

Un contre-exemple est un cas qui viole la prédiction d’une
[affirmation](./claim), obligeant soit à la rejeter, soit à en restreindre la
[portée](./scope). C’est un type particulier d’[attaque](./attack) : non pas un
argument selon lequel l’affirmation est fausse en général, mais une preuve
qu’elle échoue dans une instance particulière.

Les contre-exemples sont épistémiquement puissants parce qu’ils sont concrets.
Un seul contre-exemple bien documenté peut l’emporter sur de nombreux cas
confirmatoires, surtout si l’affirmation était formulée comme universelle. C’est
pourquoi la
[recherche axée d’abord sur les réfutations](./rebuttal-first-search) et la
[recherche axée d’abord sur les contre-exemples](./counterexample-first-search)
privilégient le fait de les trouver tôt.

Dans un [graphe dialectique](./dialectical-graph), les contre-exemples sont des
nœuds reliés aux affirmations via une arête `attacks`. Ils portent leurs propres
[segments de preuve](./evidence-span), [portée](./scope) et [source](./source),
de sorte que l’attaque elle-même peut être examinée de près.
