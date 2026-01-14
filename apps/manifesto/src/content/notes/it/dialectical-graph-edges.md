---
title: Archi del Grafo Dialettico
description: "I tipi di relazione che connettono i nodi in un grafo della conoscenza dialettico"
sourceLocale: en
sourceHash: 82c6fd07bccd
translatedAt: 2026-01-14
---

In un [Grafo Dialettico](./dialectical-graph), gli archi codificano tipi di
relazione piuttosto che punteggi di similarità (vedi [Relazioni Argomentative](./argumentative-relations)). Il vantaggio è che puoi chiedere
«in che modo questo incide su quello?» invece di solo «questi parlano dello
stesso argomento?».

I tipi di relazione comuni includono:

- Supporto: `supports`
- Confutazione: `attacks`, `undercuts`, `contradicts`
- Raffinamento e ambito: `refines`, `generalizes`, `specializes`, `depends_on`
- Provenienza e misurazione: `cites`, `defines`, `measures`
- Replicazione: `replicates`, `fails_to_replicate`
- Collegamenti tematici opzionali: `is_about`

Gli archi tipizzati consentono l’aggiornamento della conoscenza tramite catene
di confutazione, l’individuazione di conflitti tra definizioni e il tracciamento
dello stato di replicazione. Sono capacità che il recupero basato sulla
similarità fatica a rappresentare. Supportano anche la valutazione della
qualità: la qualità della conoscenza dipende meno dalla direzione di una
conclusione e più dalla durabilità del percorso che l’ha prodotta, e gli archi
codificano la struttura di quel percorso attraverso i nodi (vedi [Nodi del Grafo Dialettico](./dialectical-graph-nodes)) e altre [Componenti del Grafo](./graph-components).