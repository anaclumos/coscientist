---
title: Strategie eksploracji
description: Strategie przemierzania grafu dla ciągłego odkrywania wiedzy
---

[Współnaukowiec](./coscientist) potrzebuje czegoś więcej niż wyszukiwania: potrzebuje eksploracji, która aktywnie ujawnia sprzeczności, warunki brzegowe oraz zależność od metody w [Grafie Dialektycznym](./dialectical-graph).

Kluczowe strategie obejmują:

- [Wyszukiwanie najpierw kontrprzykładów](./counterexample-first-search) — traktuj popularność jako sygnał ryzyka; priorytetyzuj kontrprzykłady i warunki brzegowe
- [Minimalne cięcie](./minimum-cut) — wyizoluj minimalną strukturę, która generuje sprzeczność, a następnie skup uwagę na [minimalnym zbiorze sprzeczności](./minimum-contradiction-set)
- [Dryf definicji](./definition-drift) — wykrywaj przesunięcia znaczeń zamiast zakładać wspólne pojęcia
- [Sprzężenie metody z wnioskiem](./method-conclusion-coupling) — grupuj twierdzenia według metody, aby znaleźć wspólne błędy
- [Separacja ścieżek replikacji](./replication-path-separation) — odróżniaj niezależne dowody od powtarzanych parafraz

W implementacji przejawia się to jako wyspecjalizowani agenci do normalizacji, wydobywania założeń, wyszukiwania kontrprzykładów, rekonstrukcji zakresu oraz projektowania strategii weryfikacji.