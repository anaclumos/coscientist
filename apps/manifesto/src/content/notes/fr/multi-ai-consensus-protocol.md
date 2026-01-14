---
title: Protocole de consensus multi-IA
description: Le système d’écriture et de vérification 1+4
sourceLocale: en
sourceHash: b49299d152fa
translatedAt: 2026-01-14
---

Le Protocole de consensus multi-IA est un flux de travail collaboratif dans
lequel l’[Opérateur](./operator) coordonne plusieurs systèmes d’IA afin de
réduire le risque d’hallucination d’un modèle unique et d’aider à se prémunir
contre la [Fonte de l’Encyclopédie](./encyclopedia-meltdown).

Dans la variante « 1+4 », un humain coordonne quatre assistants IA (en date de
décembre 2025 : ChatGPT, Gemini, Claude et Grok). L’objectif n’est pas « plus de
mémoire » ; c’est un désaccord structuré et de la traçabilité.

## Règles de fonctionnement

- N’accepter des révisions que lorsqu’elles atteignent l’unanimité (voir
  [Exigence d’unanimité](./unanimity-requirement)).
- Garder l’incertitude explicite ; ne pas la lisser dans la prose.
- Exiger une provenance traçable pour les affirmations (voir
  [Ligne de responsabilité](./responsibility-line) et
  [Provenance](./provenance)).
- Effectuer une recherche délibérée de réfutation plutôt qu’une recherche de
  confirmation (voir
  [Recherche d’abord de réfutation](./rebuttal-first-search)).

Le protocole est aussi culturel : il entraîne l’habitude de demander « qu’est-ce
qui me ferait changer d’avis ? »

## Limites

L’unanimité n’est pas une preuve de vérité. Les modèles partagent des données
d’entraînement et peuvent converger vers des modes d’échec corrélés ; l’accord
peut donc refléter un biais partagé plutôt qu’une [vérification](./verification)
indépendante (voir [Indépendance des preuves](./evidence-independence)).
L’unanimité peut aussi pousser l’écriture vers des formulations prudentes ou des
affirmations au plus petit dénominateur commun.

Lors d’une revue multi-IA du protocole, il a reçu 2 approbations, 1 objection et
1 mise en attente, ce qui suggère qu’il a besoin de procédures de réfutation
plus solides et de règles concernant l’indépendance des preuves.
