---
title: Nodi del Grafo Dialettico
description: I tipi di nodo in un grafo della conoscenza dialettico
---

In un [Grafo Dialettico](./dialectical-graph), i nodi rappresentano oggetti epistemici piuttosto che testo grezzo. I tipi di nodo più comuni includono affermazioni (proposizioni verificabili), ambito (condizioni di applicabilità), assunzioni (premesse implicite), definizioni (significati dei termini), metodi (procedure), dati (misurazioni o risultati), estratti di evidenza (intervalli citati esattamente), fonti (ancoraggi di provenienza), controesempi (casi che confutano o restringono le affermazioni) e questioni (insiemi di cluster di affermazioni in collisione).

Questa scomposizione evita una confusione comune: un documento non è una cosa sola. Lo stesso articolo può introdurre una definizione, sostenere un’affermazione, citare un’evidenza e confutare un risultato precedente; ciascuna di queste parti dovrebbe rimanere indirizzabile se vuoi che la conoscenza si aggiorni invece di limitarsi ad accumularsi.

Lo stato delle affermazioni è inoltre multidimensionale, non un singolo punteggio di fiducia. Un’affermazione può essere `tentative` (fase di ipotesi), `contested` (dibattito attivo), `conditionally supported` (vera sotto condizioni specificate), `robust` (supportata tramite molteplici percorsi indipendenti), `refuted` (crollata per via di un controesempio) o `obsolete` (significato perso a causa di cambiamenti nella definizione o nel metodo). Le transizioni sono guidate meno dal numero di confutazioni e più dal tipo di confutazione e dal fatto che abbia successo a livello di ambito, assunzione, definizione o metodo.