---
title: Relazioni argomentative
description: "Tipi di arco in un grafo dialettico organizzati per funzione"
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Le relazioni argomentative sono i tipi di arco in un
[Grafo dialettico](./dialectical-graph) (vedi anche [Componenti del grafo](./graph-components)) che codificano come gli oggetti
epistemici si relazionano tra loro. Sono ciò che distingue un grafo dialettico
da un grafo di somiglianza per tema.

## Relazioni di contestazione

- [Attacco](./attack) — contestazione diretta della verità di un'affermazione
- [Confutazione implicita](./undercut) — contestazione del metodo,
  dell’assunzione o della definizione
- [Controesempio](./counterexample) — un caso che rompe l’affermazione
- `contradicts` — incompatibilità esplicita

## Relazioni di supporto

- `supports` — evidenza o ragionamento che rafforza un’affermazione
- `cites` — attribuzione esplicita a una [fonte](./source)
- `replicates` / `fails_to_replicate` — stato di replicazione

## Relazioni di raffinamento

- `refines` — restringe o chiarisce un’affermazione
- `generalizes` / `specializes` — aggiustamenti dell’ambito
- `depends_on` — collega le affermazioni alle loro [assunzioni](./assumption)
- `defines` — collega i termini alle loro definizioni

Vedi [Archi del grafo dialettico](./dialectical-graph-edges) per la specifica
completa e
[Tipizzazione delle relazioni vs somiglianza](./relation-typing-vs-similarity)
per capire perché gli archi tipizzati contano.
