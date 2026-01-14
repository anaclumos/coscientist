---
title: Nœuds de graphe dialectique
description: Les types de nœuds dans un graphe de connaissances dialectique
---

Dans un [Graphe dialectique](./dialectical-graph), les nœuds représentent des objets épistémiques plutôt que du texte brut. Les types de nœuds courants incluent :

- [Assertion](./claim) — propositions vérifiables
- [Portée](./scope) — conditions d’applicabilité
- [Hypothèse](./assumption) — prémisses implicites
- Définitions — sens des termes (suivi au fil du temps via la [Dérive des définitions](./definition-drift))
- [Méthode](./method) — procédures qui produisent des preuves ou des conclusions
- Données — mesures ou résultats
- [Extrait de preuve](./evidence-span) — plages citées exactement
- [Source](./source) — ancres de provenance
- [Contre-exemple](./counterexample) — cas qui invalident ou restreignent des assertions
- [Nœud de problème](./issue-node) — regroupements de grappes d’assertions en collision

Cette décomposition évite une confusion fréquente : un document n’est pas une seule chose. Le même article peut introduire une définition, énoncer une assertion, citer des preuves et réfuter un résultat antérieur ; chacune de ces composantes doit rester adressable si vous voulez que la connaissance se mette à jour plutôt que de simplement s’accumuler.

Le statut d’une assertion est multidimensionnel plutôt qu’un simple score de confiance ). Les transitions sont moins déterminées par le nombre de réfutations que par le type de réfutation et par le fait qu’elle réussisse au niveau de la portée, de l’hypothèse, de la définition ou de la méthode.
