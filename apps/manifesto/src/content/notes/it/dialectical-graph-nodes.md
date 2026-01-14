---
title: Nodi del Grafo Dialettico
description: I tipi di nodo in un grafo della conoscenza dialettico
sourceLocale: en
sourceHash: b451261d8474
translatedAt: 2026-01-14
---

In un [Grafo Dialettico](./dialectical-graph), i nodi rappresentano oggetti
epistemici piuttosto che testo grezzo. I tipi di nodo comuni includono:

- [Affermazione](./claim) — proposizioni verificabili
- [Ambito](./scope) — condizioni di applicabilità
- [Assunzione](./assumption) — premesse implicite
- Definizioni — significati dei termini )
- [Metodo](./method) — procedure che generano evidenze o conclusioni
- Dati — misurazioni o risultati
- [Intervallo di Evidenza](./evidence-span) — intervalli di citazione esatti
- [Fonte](./source) — ancoraggi di provenienza
- [Controesempio](./counterexample) — casi che smentiscono o restringono le
  affermazioni
- [Nodo di Problema](./issue-node) — raggruppamenti di cluster di affermazioni
  in collisione

Questa scomposizione previene una confusione comune: un documento non è una cosa
sola. Lo stesso articolo può introdurre una definizione, affermare una tesi,
citare evidenze e confutare un risultato precedente; ciascuno di questi elementi
dovrebbe rimanere indirizzabile se si vuole che la conoscenza si aggiorni invece
di limitarsi ad accumularsi.

Lo stato di un’affermazione è multidimensionale, invece di essere un singolo
punteggio di confidenza ). Le transizioni sono determinate meno dal numero di
confutazioni e più dal tipo di confutazione e dal fatto che essa abbia successo
a livello di ambito, assunzione, definizione o metodo.
