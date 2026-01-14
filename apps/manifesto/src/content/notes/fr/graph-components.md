---
title: Composants du graphe
description: Les types de nœuds et d’arêtes qui composent un graphe dialectique
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

Les composants du graphe sont les éléments constitutifs d’un
[Graphe dialectique](./dialectical-graph) : les types de nœuds qui représentent
des objets épistémiques et les types d’arêtes qui représentent les relations
entre eux.

**Types de nœuds** (voir
[Nœuds du graphe dialectique](./dialectical-graph-nodes)) :

- [Assertion](./claim) — propositions vérifiables
- [Extrait de preuve](./evidence-span) — texte cité exactement à partir des
  sources
- [Portée](./scope) — conditions d’applicabilité
- [Hypothèse](./assumption) — prémisses implicites
- [Méthode](./method) — procédures de production de preuves
- [Source](./source) — ancrages de provenance
- [Contre-exemple](./counterexample) — cas qui invalident des assertions
- [Nœud de question](./issue-node) — regroupements d’assertions en collision

**Types d’arêtes** (voir
[Arêtes du graphe dialectique](./dialectical-graph-edges)) :

- [Attaque](./attack) — contestations directes de la vérité
- [Réfutation indirecte](./undercut) — contestations des fondements
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contention](./contention) — marqueurs structurés de conflit
