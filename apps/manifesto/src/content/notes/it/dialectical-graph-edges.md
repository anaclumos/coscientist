---
title: Archi dei Grafi Dialettici
description: I tipi di relazione che collegano i nodi in un grafo della conoscenza dialettico
---

In un [Grafo Dialettico](./dialectical-graph), gli archi codificano tipi di relazione piuttosto che punteggi di similarità. Il vantaggio è che puoi chiedere “in che modo questo incide su quello?” invece di limitarti a “questi parlano dello stesso argomento?”

Le relazioni tipiche includono `supports`, `attacks` e `undercuts` (contestazioni a livello di metodo/assunzioni/definizioni); relazioni di affinamento e di ambito come `refines`, `generalizes`, `specializes` e `depends_on`; collegamenti di provenienza come `cites`, `defines`, `measures`, `replicates` e `fails_to_replicate`; e conflitti espliciti come `contradicts`. Alcuni grafi usano anche collegamenti tematici più laschi come `is_about`, ma il lavoro epistemico deriva da archi argomentativi tipizzati.

Gli archi tipizzati consentono l’aggiornamento della conoscenza tramite catene di confutazione, l’individuazione di conflitti tra definizioni e il tracciamento dello stato di replicazione. Sono capacità che il recupero basato sulla similarità fatica a rappresentare (vedi [limiti di RAG](./rag-limitations)). Supportano anche la valutazione della qualità: la qualità della conoscenza dipende meno dalla direzione di una conclusione e più dalla solidità del percorso che l’ha prodotta, e gli archi codificano la struttura di quel percorso.