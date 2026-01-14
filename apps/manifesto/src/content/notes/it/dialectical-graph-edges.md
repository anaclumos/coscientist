---
title: Archi del Grafo Dialettico
description: I tipi di relazione che connettono i nodi in un grafo di conoscenza dialettico
---

In un [Grafo Dialettico](./dialectical-graph), gli archi codificano tipi di relazione piuttosto che punteggi di similarità. Il vantaggio è che puoi chiedere «in che modo questo incide su quello?» invece di solo «questi parlano dello stesso argomento?».

I tipi di relazione comuni includono:

- Supporto: `supports`
- Confutazione: `attacks`, `undercuts`, `contradicts`
- Raffinamento e ambito: `refines`, `generalizes`, `specializes`, `depends_on`
- Provenienza e misurazione: `cites`, `defines`, `measures`
- Replicazione: `replicates`, `fails_to_replicate`
- Collegamenti tematici opzionali: `is_about` (utile, ma non epistemico di per sé)

Gli archi tipizzati consentono l’aggiornamento della conoscenza tramite catene di confutazione, l’individuazione di conflitti tra definizioni e il tracciamento dello stato di replicazione. Sono capacità che il recupero basato sulla similarità fatica a rappresentare ). Supportano anche la valutazione della qualità: la qualità della conoscenza dipende meno dalla direzione di una conclusione e più dalla robustezza del percorso che l’ha prodotta, e gli archi codificano la struttura di quel percorso.
