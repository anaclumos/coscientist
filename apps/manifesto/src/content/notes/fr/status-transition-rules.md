---
title: Règles de transition de statut
description: "Ce qui déclenche le passage entre les états d’une revendication dans un graphe dialectique"
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

Les règles de transition de statut définissent ce qui fait passer une
[revendication](./claim) d’un état à un autre dans la
[taxonomie des statuts de revendication](./claim-status-taxonomy). Les
transitions dépendent du type de contestation, pas de leur nombre : un seul
[contre-exemple](./counterexample) décisif compte davantage que de nombreuses
objections peu convaincantes.

Les transitions clés incluent : provisoire → contestée (lorsqu’une
[attaque](./attack) est enregistrée), contestée → soutenue conditionnellement
(lorsque l’attaque reçoit une réponse en restreignant la [portée](./scope) ou en
clarifiant les [hypothèses](./assumption)), soutenue conditionnellement →
robuste (lorsque plusieurs voies indépendantes confirment), robuste → réfutée
(lorsqu’un contre-exemple résiste à l’examen), et n’importe quel état → obsolète
(lorsqu’une [dérive de définition](./definition-drift) rompt le sens de la
revendication).

Ces règles font partie de la
[couche de protocole épistémique](./epistemic-protocol-layer) dans
[Coscientifique](./coscientist). Elles rendent la mise à jour des connaissances
explicite et vérifiable plutôt qu’implicite dans la prose.