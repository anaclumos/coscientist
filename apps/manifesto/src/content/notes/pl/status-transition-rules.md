---
title: Reguły przejść statusu
description: "Co wyzwala przechodzenie między stanami roszczeń w grafie dialektycznym"
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

Reguły przejść statusu określają, co przenosi [roszczenie](./claim) z jednego
stanu do innego w [taksonomii statusu roszczeń](./claim-status-taxonomy).
Przejścia zależą od typu wyzwania, a nie od liczby: pojedynczy rozstrzygający
[kontrprzykład](./counterexample) ma większe znaczenie niż wiele
nieprzekonujących zastrzeżeń.

Kluczowe przejścia obejmują: wstępny → sporny, sporny → warunkowo wspierany
(gdy na atak odpowiada się poprzez zawężenie [zakresu](./scope) lub
doprecyzowanie [założeń](./assumption)), warunkowo wspierany → solidny (gdy
wiele niezależnych ścieżek potwierdza), solidny → obalony (gdy kontrprzykład
przechodzi weryfikację), oraz dowolny stan → nieaktualny zrywa znaczenie
roszczenia).

Reguły te są częścią
[warstwy protokołu epistemicznego](./epistemic-protocol-layer) w
[Współnaukowiec](./coscientist). Sprawiają, że aktualizowanie wiedzy jest jawne
i poddawalne audytowi, zamiast ukryte w prozie.