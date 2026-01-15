---
title: Graf dialektyczny
description: "Model grafu wiedzy, który przechowuje twierdzenia i relacje zamiast treści dokumentów"
sourceLocale: en
sourceHash: 7de42f075323
translatedAt: 2026-01-14
---

Graf dialektyczny to graf wiedzy, który przechowuje strukturę argumentacyjną
(twierdzenia, definicje, założenia, metody, zakresy dowodowe oraz relacje między
nimi), zamiast traktować dokumenty jako nierozróżnialny tekst. Kluczowa intuicja
jest prosta: nie myl tekstu z wiedzą. Tekst to opakowanie; wiedza to struktura
ograniczeń, która pozwala, by twierdzenia wspierały się, atakowały i
doprecyzowywały nawzajem. Aby dowiedzieć się, jak to podejście wykracza poza
systemy skoncentrowane na dokumentach, zob.
[Od Memexu do grafu dialektycznego](./from-memex-to-dialectical-graph).

[Współnaukowiec](./coscientist) wymusza potrójne rozdzielenie: oryginalny tekst
jest zachowywany jako cytowalne zakresy dowodowe; twierdzenia są rozkładane na
znormalizowane propozycje; a relacje są przechowywane jako jawne wiązania
argumentacyjne. To strukturalna poprawka dla częstego trybu awarii [RAG](./rag):
ucięcia fragmentu cytatu. Zakres dowodowy zachowuje dokładne brzmienie i źródło,
twierdzenie zapisuje, kto co stwierdził, a krawędź `cites` czyni atrybucję jawną
zamiast domyślnej w prozie.

Graf rozdziela też warstwę wnioskowania od warstwy narracyjnej. Dokument nie
jest ostateczną prawdą; jest migawką grafu. Każde zdanie powinno dać się
prześledzić wstecz przez twierdzenie, zakres, założenie, metodę, dane, zakres
dowodowy i źródło. Bez tego łańcucha zdanie jest tylko zdaniem, nie wiedzą.

Aby działać jak hamulec dla [Załamanie Encyklopedii](./encyclopedia-meltdown),
system priorytetyzuje sprzeczności i kontrprzykłady zamiast konsensusu (zob.
[Graf jako obrona przed Załamaniem](./graph-as-meltdown-defense)). Gdy twierdzenie trafia do grafu, domyślna postawa jest adversarialna: wcześnie
szukaj ataków i podcięć, aby struktura aktualizowała się poprzez odparcia,
zamiast dryfować wskutek powtórzeń. Konkretne typy węzłów i relacji znajdziesz w
[Węzły grafu dialektycznego](./dialectical-graph-nodes) oraz
[Krawędzie grafu dialektycznego](./dialectical-graph-edges), a także w
[Komponenty grafu](./graph-components).
