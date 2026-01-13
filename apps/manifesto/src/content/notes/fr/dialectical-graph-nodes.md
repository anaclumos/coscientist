---
title: Nœuds du graphe dialectique
description: Les types de nœuds dans un graphe de connaissances dialectique
---

Dans un [graphe dialectique](./dialectical-graph), les nœuds représentent des objets épistémiques plutôt que du texte brut. Les types de nœuds courants incluent les affirmations (propositions vérifiables), la portée (conditions d’applicabilité), les hypothèses (prémisses implicites), les définitions (sens des termes), les méthodes (procédures), les données (mesures ou résultats), les segments de preuve (plages citées textuellement à l’identique), les sources (ancres de provenance), les contre-exemples (cas qui invalident ou restreignent des affirmations) et les questions (ensembles de clusters d’affirmations en collision).

Cette décomposition évite une confusion fréquente : un document n’est pas une seule chose. Le même article peut introduire une définition, avancer une affirmation, citer des preuves et réfuter un résultat antérieur ; chacun de ces éléments doit rester adressable si vous voulez que la connaissance se mette à jour au lieu de simplement s’accumuler.

Le statut des affirmations est également multidimensionnel plutôt qu’un simple score de confiance. Une affirmation peut être `tentative` (stade d’hypothèse), `contestée` (débat actif), `soutenue sous condition` (vraie sous des conditions spécifiées), `robuste` (étayée par plusieurs voies indépendantes), `réfutée` (effondrée par un contre-exemple) ou `obsolète` (sens perdu en raison d’évolutions de définition ou de méthode). Les transitions sont moins déterminées par le nombre de réfutations que par la nature de la réfutation et par le fait qu’elle réussisse au niveau de la portée, des hypothèses, des définitions ou de la méthode.