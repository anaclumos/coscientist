---
title: Graf dialektyczny
description: Model grafu wiedzy, który przechowuje twierdzenia i relacje, zamiast treści dokumentów
---

Graf dialektyczny to graf wiedzy, który przechowuje strukturę argumentacyjną (twierdzenia, definicje, założenia, metody, zakresy dowodowe oraz relacje między nimi), zamiast traktować dokumenty jako nierozróżnialny tekst. Kluczowa intuicja jest prosta: nie myl tekstu z wiedzą. Tekst to opakowanie; wiedza to struktura ograniczeń, która pozwala, by twierdzenia wspierały się, atakowały i doprecyzowywały nawzajem.

[Współnaukowiec](./coscientist) wymusza potrójne rozdzielenie: oryginalny tekst jest zachowywany jako cytowalne zakresy dowodowe; twierdzenia są rozkładane na znormalizowane propozycje; a relacje są przechowywane jako jawne wiązania argumentacyjne. To strukturalna poprawka dla częstego trybu awarii [RAG](./rag): ucięcia fragmentu cytatu. Zakres dowodowy zachowuje dokładne brzmienie i źródło, twierdzenie zapisuje, kto co stwierdził, a krawędź `cites` czyni atrybucję jawną zamiast domyślnej w prozie.

Graf rozdziela też warstwę wnioskowania (ewoluującą sieć twierdzeń) od warstwy narracyjnej (opatrzonej znacznikiem czasu projekcji nadającej się do czytania). Dokument nie jest ostateczną prawdą; jest migawką grafu. Każde zdanie powinno dać się prześledzić wstecz przez twierdzenie, zakres, założenie, metodę, dane, zakres dowodowy i źródło. Bez tego łańcucha zdanie jest tylko zdaniem, nie wiedzą.

Aby działać jak hamulec dla [Załamanie Encyklopedii](./encyclopedia-meltdown), system priorytetyzuje sprzeczności i kontrprzykłady zamiast konsensusu. Gdy twierdzenie trafia do grafu, domyślna postawa jest adversarialna (adwersarialna): wcześnie szukaj ataków i podcięć (undercuts), aby struktura aktualizowała się poprzez odparcia, zamiast dryfować wskutek powtórzeń. Konkretne typy węzłów i relacji znajdziesz w [Węzły grafu dialektycznego](./dialectical-graph-nodes) oraz [Krawędzie grafu dialektycznego](./dialectical-graph-edges).