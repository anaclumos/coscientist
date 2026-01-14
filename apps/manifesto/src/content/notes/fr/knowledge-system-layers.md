---
title: Couches du système de connaissance
description: Les couches architecturales de Coscientist
---

Les couches d’un système de connaissance sont les composants architecturaux distincts qui composent [Coscientifique](./coscientist). La séparation de ces couches permet à différentes préoccupations d’évoluer indépendamment.

## Couche de données

- [Extrait de preuve](./evidence-span) — texte cité brut, conservé mot pour mot
- [Source](./source) — ancres de provenance pour la traçabilité

## Couche d’inférence

- [Couche d’inférence](./inference-layer) — le réseau vivant et évolutif des affirmations et des relations
- [Affirmation](./claim), [Attaque](./attack), [Réfutation par sous-coupe](./undercut), et autres [Relations argumentatives](./argumentative-relations)

## Couche narrative

- [Couche narrative](./narrative-layer) — projections du graphe lisibles par des humains
- Les documents comme instantanés horodatés, pas comme vérité de référence

## Couche de protocole

- [Couche de protocole épistémique](./epistemic-protocol-layer) — règles définissant comment les affirmations entrent et gagnent en autorité
- [Constitution des connaissances](./knowledge-constitution) — le document de gouvernance des opérations de connaissance

## Principe de séparation

- [Triple séparation](./triple-separation) — maintenir distincts le texte brut, les affirmations normalisées et les relations