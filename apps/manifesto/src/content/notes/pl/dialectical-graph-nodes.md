---
title: Węzły grafu dialektycznego
description: Typy węzłów w dialektycznym grafie wiedzy
sourceLocale: en
sourceHash: b451261d8474
translatedAt: 2026-01-14
---

W [Grafie dialektycznym](./dialectical-graph) węzły reprezentują obiekty
epistemiczne, a nie surowy tekst. Typowe typy węzłów obejmują:

- [Teza](./claim) — weryfikowalne propozycje
- [Zakres](./scope) — warunki stosowalności
- [Założenie](./assumption) — implicytne przesłanki
- Definicje — znaczenia terminów (śledzone w czasie poprzez
  [Dryf definicji](./definition-drift))
- [Metoda](./method) — procedury generujące dowody lub wnioski
- Dane — pomiary lub wyniki
- [Zakres dowodu](./evidence-span) — dokładne cytowane fragmenty
- [Źródło](./source) — kotwice pochodzenia
- [Kontrprzykład](./counterexample) — przypadki, które obalają tezy lub zawężają
  ich zakres
- [Węzeł problemu](./issue-node) — pakiety zderzających się klastrów tez

Taki rozkład zapobiega częstemu nieporozumieniu: dokument nie jest jedną rzeczą.
Ten sam artykuł może wprowadzać definicję, stawiać tezę, cytować dowody i
odpierać wcześniejszy wynik; każdy z tych elementów powinien pozostać
adresowalny, jeśli chcesz, by wiedza się aktualizowała, zamiast jedynie się
kumulować.

Status tezy jest wielowymiarowy, a nie sprowadzony do pojedynczego wyniku
pewności (zob. [Taksonomia statusów tez](./claim-status-taxonomy)). Przejścia są
napędzane mniej liczbą obaleń, a bardziej rodzajem obalenia oraz tym, czy jest
ono skuteczne na poziomie zakresu, założenia, definicji lub metody.
