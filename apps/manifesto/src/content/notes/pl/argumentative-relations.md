---
title: Relacje argumentacyjne
description: Typy krawędzi w grafie dialektycznym uporządkowane według funkcji
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

Relacje argumentacyjne to typy krawędzi w
[Grafie dialektycznym](./dialectical-graph), które kodują, w jaki sposób obiekty
epistemiczne odnoszą się do siebie nawzajem. To one odróżniają graf dialektyczny
od grafu podobieństwa tematów.

## Relacje podważające

- [Atak](./attack) — bezpośrednie zakwestionowanie prawdziwości tezy
- [Podcięcie](./undercut) — zakwestionowanie metody, założenia lub definicji
- [Kontrprzykład](./counterexample) — przypadek, który obala tezę
- `contradicts` — jawna niezgodność

## Relacje wspierające

- `supports` — dowody lub rozumowanie wzmacniające tezę
- `cites` — jawne przypisanie do [źródła](./source)
- `replicates` / `fails_to_replicate` — status replikacji

## Relacje doprecyzowujące

- `refines` — zawęża lub doprecyzowuje tezę
- `generalizes` / `specializes` — korekty zakresu
- `depends_on` — wiąże tezy z ich [założeniami](./assumption)
- `defines` — łączy terminy z ich definicjami (śledzone w czasie poprzez
  [Dryf definicji](./definition-drift))

Zobacz [Krawędzie grafu dialektycznego](./dialectical-graph-edges), aby poznać
pełną specyfikację, oraz
[Typowanie relacji a podobieństwo](./relation-typing-vs-similarity), aby
dowiedzieć się, dlaczego typowane krawędzie mają znaczenie.
