---
title: Synthèse des connaissances
description: En quoi la synthèse diffère de la moyenne dans les systèmes de connaissance dialectiques
---

La synthèse des connaissances est ce qui se passe après la récupération (retrieval), lorsque vous devez rendre des sources incompatibles comparables. Ce n’est pas une moyenne. C’est l’alignement des prémisses, des définitions et du périmètre afin que les désaccords deviennent des objets explicites plutôt que du bruit.

Le [RAG](./rag-limitations) standard est performant pour la récupération et faible pour la synthèse, car il ne possède pas d’objet interne appelé [contention](./contention). Dans un [Graphe dialectique](./dialectical-graph), la contention est de première classe (first-class), de sorte que le système peut décomposer l’incompatibilité en ses causes : divergences de définition, divergences d’échantillonnage, divergences de méthode, divergences de périmètre, ou [non-stationnarité](./nonstationarity) pilotée par le temps.

La résolution n’est donc pas une phrase unique. C’est une carte à embranchements : si un même terme conduit à des conclusions différentes selon des définitions différentes, le système enregistre l’embranchement au niveau des définitions avant de le traiter comme une contradiction dans les conclusions. Les [nœuds de problème](./dialectical-graph-nodes) regroupent ce qui entre en conflit avec quoi et consignent les conditions dans lesquelles le problème peut être résolu.

L’objectif est une carte des contradictions assortie de conditions de résolution explicites, afin que les travaux futurs puissent mettre à jour la connaissance par réagencement plutôt que par réécriture. C’est pourquoi l’IA de contemplation dans [Coscientist](./coscientist) vise à faire entrer les documents en collision : produire des clusters de problèmes, des conditions affinées, des réfutations structurées et des systèmes de coordonnées explicites pour la comparaison.