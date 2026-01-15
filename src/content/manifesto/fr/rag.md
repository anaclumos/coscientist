---
title: RAG
description:
  Génération augmentée par récupération , une technique pour ancrer les sorties
  d’IA dans des documents récupérés
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

Le RAG est une technique qui améliore la précision des sorties d’IA en
récupérant des documents pertinents dans un corpus et en les utilisant comme
contexte pour la génération. Au lieu de s’appuyer uniquement sur les paramètres
appris pendant l’entraînement, le modèle peut se référer à des sources externes,
réduisant les [hallucinations](./hallucination) et permettant d’utiliser des
connaissances qui n’étaient pas présentes dans les données d’entraînement.

Le pipeline RAG standard fonctionne comme suit : une requête est encodée dans un
espace vectoriel, des documents similaires sont récupérés selon une similarité
vectorielle, et le texte récupéré est fourni à un [LLM](./llm) comme contexte
pour générer une réponse. Cette approche s’est largement répandue pour les
systèmes de questions-réponses, la recherche et les tâches intensives en
connaissances.

Cependant, le RAG présente des limitations structurelles pour la production de
connaissances. Il récupère des extraits de texte sur la base de la similarité,
et non sur la base de relations argumentatives. Il ne peut pas distinguer le
soutien de l’attaque, la preuve de l’opinion, ou la source primaire de la
reformulation. Lorsque les sources sont en conflit, le RAG a tendance à les
fondre dans des résumés fluides plutôt qu’à faire ressortir la
[controverse](./contention). Voir [Limitations du RAG](./rag-limitations) pour
la critique complète.

[Coscientifique](./coscientist) va au-delà du RAG en maintenant un
[Graphe dialectique](./dialectical-graph) qui stocke des
[affirmations](./claim), des [passages probants](./evidence-span) et des
relations typées. La récupération devient « qu’est-ce qui éclaire cette
affirmation ? » plutôt que « qu’est-ce qui est similaire à cette requête ? »
