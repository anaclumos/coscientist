---
title: Stratégies d’exploration
description: Stratégies de parcours de graphe pour une découverte continue de connaissances
---

[Coscientist](./coscientist) a besoin d’un moteur qui fasse plus que récupérer ; il recherche en continu de nouvelles approches en mettant activement au jour les contradictions, les conditions aux limites et la dépendance à la méthode dans le [Graphe dialectique](./dialectical-graph).

Une stratégie est la recherche « d’abord les contre-exemples » : la popularité est considérée moins comme une preuve de qualité que comme un indice de risque. Plus une affirmation est répétée, plus il devient précieux de collecter des contre-exemples et des conditions aux limites, parce que la contamination provenant d’affirmations populaires a un rayon d’explosion plus large dans [Encyclopedia Meltdown](./encyclopedia-meltdown).

Une autre stratégie est la recherche de coupe minimale (minimum-cut) des contradictions. Lorsque des clusters d’affirmations entrent en conflit, le système cherche l’ensemble minimal de prémisses et de relations qui génèrent le conflit, puis cible cette structure pour la contemplation. Le temps humain est investi dans l’[ensemble minimal de contradictions](./minimum-contradiction-set), tandis que l’IA gère la recherche à grande échelle, la génération de candidats et le calcul de [minimum-cut](./minimum-cut).

La détection de dérive de définition traite le sens comme un objet en mouvement. Lorsqu’une définition de terme se déplace au fil du temps ou selon les communautés, le graphe enregistre explicitement le changement (voir [dérive de définition](./definition-drift)) au lieu de supposer un concept partagé, ce qui contre un mode d’échec courant de la [RAG](./rag-limitations).

La vérification du couplage méthode–conclusion regroupe les affirmations par méthode plutôt que par conclusion, car des conclusions différentes peuvent partager la même faille et des conclusions identiques peuvent reposer sur des fondements très différents. La séparation des chemins de réplication évite de la même manière le « vote majoritaire » en demandant si le soutien provient de chemins indépendants plutôt que de reformulations répétées.

Ces comportements sont implémentés sous forme d’agents spécialisés, notamment : normalisation des affirmations, extraction des hypothèses cachées, détection des conflits de définition, recherche de contre-exemples, minimisation des chemins argumentatifs, reconstruction du périmètre, génération d’hypothèses alternatives et conception de stratégies de vérification. Cette décomposition rend le travail de contemplation explicite et vérifiable.