---
title: Componenti del grafo
description: I tipi di nodo e di arco che compongono un grafo dialettico
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

I componenti del grafo sono i mattoni di un
[Grafo Dialettico](./dialectical-graph): i [Nodi del Grafo Dialettico](./dialectical-graph-nodes) che rappresentano
oggetti epistemici e gli [Archi del Grafo Dialettico](./dialectical-graph-edges) che rappresentano le [Relazioni Argomentative](./argumentative-relations) tra di essi.

**Tipi di nodo** ):

- [Affermazione](./claim) — proposizioni verificabili
- [Estratto di evidenza](./evidence-span) — testo citato esatto dalle fonti
- [Ambito](./scope) — condizioni di applicabilità
- [Assunzione](./assumption) — premesse implicite
- [Metodo](./method) — procedure per generare evidenza
- [Fonte](./source) — ancoraggi di provenienza
- [Controesempio](./counterexample) — casi che smentiscono le affermazioni
- [Nodo di questione](./issue-node) — raggruppamenti di affermazioni in
  collisione

**Tipi di arco** ):

- [Attacco](./attack) — contestazioni dirette della verità
- [Undercut](./undercut) — contestazioni dei fondamenti
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contesa](./contention) — marcatori strutturati di conflitto
