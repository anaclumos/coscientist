---
title: Graf dialektyczny
description: Model grafu wiedzy, który przechowuje twierdzenia i relacje, a nie treść dokumentów
---

Graf dialektyczny to graf wiedzy, który przechowuje strukturę argumentacyjną (twierdzenia, definicje, założenia, metody, fragmenty dowodów oraz relacje między nimi), zamiast traktować dokumenty jako niejednorodny tekst. Kluczowy wgląd jest prosty: nie myl tekstu z wiedzą. Tekst to opakowanie; wiedza to struktura ograniczeń, która pozwala twierdzeniom wzajemnie się wspierać, atakować i doprecyzowywać.

[Coscientist](./coscientist) wymusza potrójne rozdzielenie: oryginalny tekst jest zachowany jako cytowalne fragmenty dowodowe; twierdzenia są rozkładane na znormalizowane propozycje; a relacje są przechowywane jako jawne wiązania argumentacyjne. To strukturalna poprawka dla typowego trybu awarii RAG: ucięcia cytatu (excerpt truncation). Fragment dowodowy zachowuje dokładne brzmienie i źródło, twierdzenie zapisuje, kto co stwierdził, a krawędź `cites` czyni atrybucję jawną zamiast domyślnej i ukrytej w prozie.

Graf rozdziela również warstwę wnioskowania (ewoluującą sieć twierdzeń) od warstwy narracyjnej (opatrzonej znacznikami czasu projekcji, nadającej się do czytania). Dokument nie jest ostateczną prawdą; jest migawką grafu. Każde zdanie powinno dać się prześledzić wstecz przez twierdzenie, zakres, założenie, metodę, dane, fragment dowodowy i źródło. Bez tego łańcucha zdanie jest tylko zdaniem, a nie wiedzą.

Aby działać jak hamulec dla [Encyklopedycznego rozpadu](./encyclopedia-meltdown), system priorytetyzuje sprzeczności i kontrprzykłady zamiast konsensusu. Gdy twierdzenie trafia do grafu, domyślna postawa jest adwersarialna: wcześnie szukaj ataków i podcięć (undercuts), aby struktura aktualizowała się poprzez obalenia, zamiast dryfować przez powtarzanie. Konkretne typy węzłów i relacji znajdziesz w [Węzłach grafu dialektycznego](./dialectical-graph-nodes) oraz [Krawędziach grafu dialektycznego](./dialectical-graph-edges).