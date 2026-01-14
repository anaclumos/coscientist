---
title: Stratégies d’exploration
description: Stratégies de parcours de graphe pour une découverte continue des connaissances
---

[Coscientifique](./coscientist) a besoin de plus que de la récupération : il lui faut une exploration qui mette activement au jour les contradictions, les conditions aux limites et la dépendance à la méthode dans le [Graphe dialectique](./dialectical-graph).

Les principales stratégies incluent :

- [Recherche d’abord les contre-exemples](./counterexample-first-search) — traiter la popularité comme un signal de risque ; prioriser les contre-exemples et les conditions aux limites
- [Coupe minimale](./minimum-cut) — isoler la structure minimale qui produit une contradiction, puis concentrer l’attention sur l’[ensemble minimal de contradictions](./minimum-contradiction-set)
- [Dérive des définitions](./definition-drift) — détecter les glissements de sens plutôt que de supposer des concepts partagés
- [Couplage méthode–conclusion](./method-conclusion-coupling) — regrouper les affirmations par méthode afin de trouver des failles communes
- [Séparation des chemins de réplication](./replication-path-separation) — distinguer les preuves indépendantes des reformulations répétées

Dans la mise en œuvre, celles-ci se manifestent sous forme d’agents spécialisés pour la normalisation, l’extraction des hypothèses, la recherche de contre-exemples, la reconstruction de la portée et la conception de stratégies de vérification.