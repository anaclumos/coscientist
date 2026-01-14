---
title: Arêtes du graphe dialectique
description:
  Les types de relations reliant les nœuds dans un graphe de connaissances
  dialectique
sourceLocale: en
sourceHash: e060cb9fd333
translatedAt: 2026-01-14
---

Dans un [Graphe dialectique](./dialectical-graph), les arêtes encodent des types
de relation plutôt que des scores de similarité. L’intérêt est que vous pouvez
demander « en quoi ceci influe-t-il sur cela ? » plutôt que seulement « est-ce
que ces éléments portent sur le même sujet ? »

Les types de relations courants incluent :

- Soutien : `supports`
- Contestation : `attacks`, `undercuts`, `contradicts`
- Raffinement et portée : `refines`, `generalizes`, `specializes`, `depends_on`
- Provenance et mesure : `cites`, `defines`, `measures`
- Réplication : `replicates`, `fails_to_replicate`
- Liens thématiques optionnels : `is_about` (utile, mais pas épistémique en soi)

Les arêtes typées permettent la mise à jour des connaissances via des chaînes de
réfutation, la détection de conflits de définition et le suivi du statut de
réplication. Ce sont des capacités que la recherche fondée sur la similarité a
du mal à représenter ). Elles soutiennent aussi l’évaluation de la qualité : la
qualité des connaissances dépend moins de l’orientation d’une conclusion que de
la robustesse du chemin qui l’a produite, et les arêtes encodent la structure de
ce chemin.
