---
title: Strategie eksploracji
description: Strategie przeszukiwania grafu dla ciągłego odkrywania wiedzy
---

[Coscientist](./coscientist) potrzebuje silnika, który robi więcej niż tylko odzyskuje informacje; nieustannie poszukuje nowych podejść, aktywnie wydobywając sprzeczności, warunki brzegowe oraz zależność od metody w [Grafie Dialektycznym](./dialectical-graph).

Jedną ze strategii jest wyszukiwanie w trybie „najpierw kontrprzykłady” (counterexample-first search): popularność traktuje się tu mniej jako dowód jakości, a bardziej jako dowód ryzyka. Im szerzej dane twierdzenie jest powtarzane, tym cenniejsze staje się zbieranie kontrprzykładów i warunków brzegowych, ponieważ skażenie wynikające z popularnych twierdzeń ma większy promień rażenia w [Encyclopedia Meltdown](./encyclopedia-meltdown).

Inną strategią jest wyszukiwanie sprzeczności metodą minimalnego cięcia (contradiction minimum-cut search). Gdy klastry twierdzeń są ze sobą w konflikcie, system szuka minimalnego zbioru przesłanek i relacji, które generują konflikt, a następnie kieruje kontemplację na tę strukturę. Czas człowieka inwestuje się w [minimalny zbiór sprzeczności](./minimum-contradiction-set), podczas gdy SI zajmuje się szerokim przeszukiwaniem, generowaniem kandydatów oraz obliczaniem [minimalnego cięcia](./minimum-cut).

Wykrywanie dryfu definicyjnego traktuje znaczenie jako obiekt w ruchu. Gdy definicja terminu przesuwa się w czasie lub między społecznościami, graf zapisuje tę zmianę wprost (zob. [definition drift](./definition-drift)) zamiast zakładać wspólne pojęcie, co przeciwdziała częstemu trybowi awarii [RAG](./rag-limitations).

Weryfikacja sprzężenia metoda–wniosek grupuje twierdzenia według metody, a nie według wniosku, ponieważ różne wnioski mogą dzielić tę samą wadę, a identyczne wnioski mogą opierać się na bardzo różnych podstawach. Podobnie separacja ścieżek replikacji unika „głosowania większościowego”, pytając, czy wsparcie pochodzi z niezależnych ścieżek, a nie z powtarzanych parafraz.

Te zachowania są implementowane jako wyspecjalizowane agenty, m.in. normalizacja twierdzeń, ekstrakcja ukrytych założeń, wykrywanie konfliktów definicyjnych, wyszukiwanie kontrprzykładów, minimalizacja ścieżek argumentacyjnych, rekonstrukcja zakresu, generowanie alternatywnych hipotez oraz projektowanie strategii weryfikacji. Taka dekompozycja sprawia, że praca kontemplacyjna staje się jawna i możliwa do sprawdzenia.