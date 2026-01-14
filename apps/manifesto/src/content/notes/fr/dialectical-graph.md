---
title: Graphe dialectique
description: "Un modèle de graphe de connaissances qui stocke les affirmations et les relations plutôt que le contenu des documents"
sourceLocale: en
sourceHash: 7de42f075323
translatedAt: 2026-01-14
---

Un graphe dialectique est un graphe de connaissances qui stocke la structure argumentative plutôt que de traiter les documents comme du texte indifférencié.
L’intuition centrale est simple : ne confondez pas le texte avec la connaissance.
Le texte est un emballage ; la connaissance est la structure de contraintes qui permet aux affirmations de se soutenir, de s’attaquer et de se raffiner mutuellement.
Pour le contexte sur la façon dont cette approche évolue au-delà des systèmes centrés sur les documents, voir [De Memex au graphe dialectique](./from-memex-to-dialectical-graph).

[Coscientifique](./coscientist) impose une triple séparation : le texte original est conservé sous forme de segments de preuve citables ; les affirmations sont décomposées en propositions normalisées ; et les relations sont stockées comme des liaisons argumentatives explicites. C’est une correction structurelle d’un mode d’échec fréquent en [RAG](./rag) : la troncature des extraits. Le segment de preuve conserve la formulation exacte et la source, l’affirmation enregistre qui a affirmé quoi, et une arête `cites` rend l’attribution explicite au lieu d’être implicite dans la prose.

Le graphe sépare aussi une couche d’inférence d’une couche narrative (une projection horodatée adaptée à la lecture). Un document n’est pas une vérité finale ; c’est un instantané du graphe. Chaque phrase devrait pouvoir remonter, en retraçant la chaîne, à l’affirmation, au périmètre, à l’hypothèse, à la méthode, aux données, au segment de preuve et à la source. Sans cette chaîne, une phrase n’est qu’une phrase, pas une connaissance.

Pour servir de frein à la [Fonte encyclopédique](./encyclopedia-meltdown), le système privilégie les contradictions et les contre-exemples plutôt que le consensus (voir [Le graphe comme défense contre la fonte](./graph-as-meltdown-defense)). Lorsqu’une affirmation entre dans le graphe, la posture par défaut est adversariale : rechercher tôt les attaques et les réfutations partielles afin que la structure se mette à jour par réfutation plutôt que de dériver par répétition. Pour des types concrets de nœuds et de relations, voir [Nœuds du graphe dialectique](./dialectical-graph-nodes) et [Arêtes du graphe dialectique](./dialectical-graph-edges), ainsi que [Composants du graphe](./graph-components).