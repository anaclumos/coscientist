---
title: Assertion
description: Une proposition vérifiable stockée comme un nœud dans un graphe dialectique
sourceLocale: en
sourceHash: a3b6f4399179
translatedAt: 2026-01-14
---

Une assertion est une proposition vérifiable extraite d’un texte et stockée
comme un [nœud du Graphe dialectique](./dialectical-graph-nodes) de première classe dans un
[Graphe dialectique](./dialectical-graph). (voir [Nœuds du graphe dialectique](./dialectical-graph-nodes).) Les assertions ne sont pas des
phrases brutes ; ce sont des énoncés normalisés avec des dépendances explicites
de [portée](./scope), d’[hypothèses](./assumption) et de [méthode](./method).

Les assertions peuvent être reliées à des [segments de preuve](./evidence-span)
qui les étayent, à des [contre-exemples](./counterexample) qui les restreignent,
à des [attaques](./attack) qui les contestent, et à des
[réfutations de fond](./undercut) qui mettent en question leurs fondements.
Cette structure relationnelle permet aux connaissances de se mettre à jour par
réfutation plutôt que par remplacement.

Chaque assertion a un statut : elle peut être
provisoire, contestée, soutenue sous conditions, robuste, réfutée ou obsolète.
Le statut change en fonction du type de réfutation, pas de leur nombre, et il
peut régresser si la structure de soutien s’affaiblit.
