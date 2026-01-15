---
title: Ingestion à confiance zéro
description: Protocole exigeant une provenance explicite avant d’accepter des affirmations
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

L’ingestion à confiance zéro est un protocole qui considère par défaut que toute
information entrante n’est pas vérifiée. Chaque [affirmation](./claim) doit
comporter une [provenance](./provenance) explicite et passer par une
[vérification](./verification) avant d’acquérir de l’autorité dans le système de
connaissance.

Le nom est emprunté à la sécurité « zero-trust » : ne rien considérer comme sûr
tant que ce n’est pas prouvé. En pratique, cela signifie que les nouvelles
affirmations arrivent avec le statut `tentative`, doivent être traçables jusqu’à
des [sources](./source) et des [segments de preuve](./evidence-span), et
devraient être soumises à une
[recherche d’abord axée sur la réfutation](./rebuttal-first-search) avant d’être
considérées comme établies.

L’ingestion à confiance zéro est une défense contre la [bouillie IA](./ai-slop)
et la [Fusion de l’Encyclopédie](./encyclopedia-meltdown). Lorsque
l’environnement est inondé de contenu plausible mais non vérifié, la seule
posture sûre consiste à exiger une preuve d’origine et à résister aux
contestations avant acceptation.
