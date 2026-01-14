---
title: Hallucination
description: Sorties d’IA plausibles mais factuellement incorrectes ou fabriquées
---

Une hallucination est une sortie d’IA qui semble assurée et cohérente, mais qui contient des erreurs factuelles, des informations fabriquées ou des références inventées. Le danger ne vient pas du hasard : il vient de la plausibilité. Un texte halluciné échappe souvent à un examen superficiel parce qu’il suit les schémas statistiques d’une prose véridique.

L’hallucination est un symptôme de la façon dont fonctionnent les [LLM](./llm) : ils prédisent les jetons suivants probables, pas les vrais. Lorsque les données d’entraînement sont rares ou contradictoires sur un sujet, le modèle interpole, et le résultat peut être élégamment faux. C’est pourquoi le [piège de la fluidité](./fluency-trap) est si dangereux : la fluidité n’implique pas l’exactitude.

Dans [Coscientifique](./coscientist), le risque d’hallucination est géré via la [couche de protocole épistémique](./epistemic-protocol-layer) : la [traçabilité](./traceability) exige que les affirmations se rattachent à des [extraits de preuve](./evidence-span), la [recherche d’abord par réfutation](./rebuttal-first-search) soumet les propositions à des tests de résistance avant acceptation, et le [Protocole de consensus multi‑IA](./multi-ai-consensus-protocol) utilise les désaccords entre modèles comme signal justifiant une inspection plus attentive.