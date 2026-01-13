---
title: Arêtes de graphe dialectique
description: Les types de relations reliant les nœuds dans un graphe de connaissances dialectique
---

Dans un [Graphe dialectique](./dialectical-graph), les arêtes encodent des types de relations plutôt que des scores de similarité. L’intérêt est que vous pouvez demander « en quoi cela a-t-il un impact sur ceci ? » plutôt que seulement « est-ce que cela traite du même sujet ? »

Les relations typiques incluent `supports`, `attacks` et `undercuts` (des contestations au niveau de la méthode/des hypothèses/des définitions) ; des relations de raffinement et de portée telles que `refines`, `generalizes`, `specializes` et `depends_on` ; des liens de provenance tels que `cites`, `defines`, `measures`, `replicates` et `fails_to_replicate` ; et des conflits directs tels que `contradicts`. Certains graphes utilisent aussi des liens thématiques plus lâches comme `is_about`, mais le travail épistémique provient d’arêtes argumentatives typées.

Les arêtes typées permettent la mise à jour des connaissances via des chaînes de réfutation, la détection de conflits de définition et le suivi du statut de réplication. Ce sont des capacités que la recherche fondée sur la similarité peine à représenter (voir les [limites du RAG](./rag-limitations)). Elles soutiennent également l’évaluation de la qualité : la qualité des connaissances dépend moins du sens d’une conclusion que de la robustesse du chemin qui l’a produite, et les arêtes encodent la structure de ce chemin.