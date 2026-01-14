---
title: Tassonomia dello stato delle affermazioni
description:
  Gli stati in cui un’affermazione può trovarsi all’interno di un grafo
  dialettico
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

La tassonomia dello stato delle [affermazioni](./claim) definisce gli stati che
un’[affermazione](./claim) può occupare in un
[Grafo Dialettico](./dialectical-graph).

## Stati comuni

- `tentative` — fase di ipotesi
- `contested` — dibattito attivo
- `conditionally supported` — vero a determinate condizioni specificate
- `robust` — supportato tramite molteplici percorsi indipendenti
- `refuted` — confutato da un [controesempio](./counterexample)
- `obsolete` — significato perso a causa di una
  [deriva definitoria](./definition-drift) o di un cambiamento di metodo

Lo stato non è un singolo punteggio di confidenza. Un’affermazione può essere
robusta per diversità delle evidenze ma contestata per quanto riguarda l’ambito;
può essere supportata condizionatamente in un contesto e confutata in un altro.
Uno stato multidimensionale cattura questa complessità.

Le transizioni tra gli stati sono guidate dal tipo di confutazione, non dalla
quantità. Un singolo [controesempio](./counterexample) ben corroborato può
spostare un’affermazione da robusta a confutata; molte obiezioni deboli possono
lasciarla contestata senza risoluzione.
