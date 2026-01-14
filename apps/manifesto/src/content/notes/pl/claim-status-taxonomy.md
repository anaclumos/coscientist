---
title: Taksonomia statusu twierdzeń
description: Stany, w jakich twierdzenie może się znajdować w ramach grafu dialektycznego
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

Taksonomia statusu twierdzeń definiuje stany, jakie [twierdzenie](./claim) może
zajmować w [Grafie Dialektycznym](./dialectical-graph).

## Typowe stany

- `tentative` — etap hipotezy
- `contested` — aktywny spór
- `conditionally supported` — prawdziwe przy spełnieniu określonych warunków
- `robust` — wsparte wieloma niezależnymi ścieżkami
- `refuted` — obalone przez [kontrprzykład](./counterexample)
- `obsolete` — znaczenie utracone wskutek [dryfu definicji](./definition-drift)
  lub zmiany metody

Status nie jest pojedynczym wynikiem pewności. Twierdzenie może być robust ze
względu na różnorodność dowodów, ale contested co do zakresu; może być
conditionally supported w jednym kontekście, a refuted w innym. Wielowymiarowy
status oddaje tę złożoność.

Przejścia między stanami są napędzane rodzajem riposty , a nie ich liczbą.
Pojedynczy, dobrze udokumentowany [kontrprzykład](./counterexample) może
przenieść twierdzenie z robust do refuted; wiele słabych zastrzeżeń może
pozostawić je contested bez rozstrzygnięcia.
