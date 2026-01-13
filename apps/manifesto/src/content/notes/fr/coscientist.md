---
title: Coscientist
description: Un système de compagnon intellectuel pour la production de connaissances à l’ère post-IA
---

Coscientist est un service open source inspiré de l’[Encyclopedia Galactica](./encyclopedia-galactica) fictive d’Isaac Asimov. Il se veut plus qu’une [arche de connaissances](./knowledge-ark) d’information : un compagnon intellectuel qui approfondit la contemplation aux côtés du [Galarch](./galarch) humain. Surtout, c’est un système pour « défaire l’abrutissement mental » (un-brain-rotting) de nos esprits à l’ère post-IA.

Il est construit par [Sunghyun Cho](./sunghyun-cho). L’histoire d’origine est simple : la préservation compte, mais la préservation à elle seule ne produit pas de compréhension. Coscientist est conçu pour rendre la connaissance mise à jour (updateable) afin que les contradictions, les contre-exemples et la dérive des définitions deviennent visibles et exploitables, au lieu d’être lissés par des résumés trop fluides.

Le premier principe est la souveraineté : l’autorité sur le savoir doit rester entre les mains du [Galarch](./galarch). Se prémunir contre l’[Encyclopedia Meltdown](./encyclopedia-meltdown) n’est pas une considération secondaire ; c’est une contrainte de conception. L’IA peut faire le travail de contemplation, mais elle ne doit pas s’emparer de l’initiative d’écrire et de décréter.

C’est pourquoi Coscientist va au-delà du RAG de type questions-réponses (voir [limites du RAG](./rag-limitations)). Il maintient un [Graphe dialectique](./dialectical-graph) qui stocke des [actes argumentatifs](./argumentative-act) plutôt que du texte brut de documents, de sorte que chaque affirmation puisse être reliée à des segments de preuve, à des sources, et à des relations explicites telles que les attaques, les réfutations par sous-coupe (undercuts) et les citations (voir [Nœuds du Graphe dialectique](./dialectical-graph-nodes) et [Arêtes du Graphe dialectique](./dialectical-graph-edges)). L’exploration est guidée par des stratégies qui privilégient la pression adversariale, notamment la recherche « contre-exemple d’abord », l’isolation des contradictions via la [coupe minimale](./minimum-cut), et la détection explicite de la [dérive des définitions](./definition-drift) (voir [Stratégies d’exploration](./exploration-strategies)).

Au niveau du protocole, le système utilise des procédures comme le [Protocole de consensus multi-IA](./multi-ai-consensus-protocol) et la [synthèse de connaissances](./knowledge-synthesis) pour faire entrer les documents en collision plutôt que de simplement les résumer. L’état de réussite visé est un écosystème d’arguments : l’IA gère le travail de recherche et de restructuration, tandis que le Galarch supervise la structure et la vérification afin que le récit résultant demeure traçable.

Référence : https://cho.sh/r/6975BA.