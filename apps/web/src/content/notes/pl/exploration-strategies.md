---
title: Strategie eksploracji
description: Strategie przeszukiwania grafu dla ciągłego odkrywania wiedzy
sourceLocale: en
sourceHash: b3abf2d73b65
translatedAt: 2026-01-14
---

[Współnaukowiec](./coscientist) potrzebuje czegoś więcej niż wyszukiwania:
potrzebuje [mechanizmów eksploracji](./exploration-mechanisms), które aktywnie ujawniają sprzeczności, warunki brzegowe
oraz zależność od metody w [Grafie Dialektycznym](./dialectical-graph).

Kluczowe strategie obejmują:

- [Wyszukiwanie najpierw kontrprzykładów](./counterexample-first-search) —
  traktuj popularność jako sygnał ryzyka; priorytetyzuj kontrprzykłady i warunki
  brzegowe
- [Minimalne cięcie](./minimum-cut) — wyizoluj minimalną strukturę, która
  generuje sprzeczność, a następnie skup uwagę na
  [minimalnym zbiorze sprzeczności](./minimum-contradiction-set)
- [Dryf definicji](./definition-drift) — wykrywaj przesunięcia znaczeń zamiast
  zakładać wspólne pojęcia
- [Sprzężenie metody z wnioskiem](./method-conclusion-coupling) — grupuj
  twierdzenia według metody, aby znaleźć wspólne błędy
- [Separacja ścieżek replikacji](./replication-path-separation) — odróżniaj
  niezależne dowody od powtarzanych przeformułowań

W implementacji przejawia się to jako wyspecjalizowani agenci do normalizacji,
wydobywania założeń, wyszukiwania kontrprzykładów, rekonstrukcji zakresu oraz
projektowania strategii weryfikacji.
