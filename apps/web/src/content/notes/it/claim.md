---
title: Affermazione
description: Una proposizione verificabile memorizzata come nodo in un grafo dialettico
sourceLocale: en
sourceHash: a3b6f4399179
translatedAt: 2026-01-14
---

Un’affermazione è una proposizione verificabile estratta dal testo e memorizzata
come [nodo del Grafo Dialettico](./dialectical-graph-nodes) di primo livello in un [Grafo Dialettico](./dialectical-graph). (Vedi [Nodi del Grafo Dialettico](./dialectical-graph-nodes).) Le
affermazioni non sono frasi grezze; sono enunciati normalizzati con dipendenze
esplicite da [ambito](./scope), [assunzioni](./assumption) e [metodo](./method).

Le affermazioni possono essere collegate a
[estratti di evidenza](./evidence-span) che le supportano, a
[controesempi](./counterexample) che le restringono, ad [attacchi](./attack) che
le mettono in discussione e a [confutazioni di base](./undercut) che ne
contestano i presupposti. Questa struttura relazionale consente alla conoscenza
di aggiornarsi tramite confutazione, anziché tramite sostituzione.

Ogni affermazione ha uno stato ): può essere provvisoria, contestata, supportata
condizionalmente, robusta, confutata o obsoleta. Lo stato cambia in base al tipo
di confutazione, non al numero, e può regredire se la struttura di supporto si
indebolisce.
