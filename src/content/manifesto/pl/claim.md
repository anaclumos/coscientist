---
title: Teza
description: Weryfikowalne twierdzenie przechowywane jako węzeł w grafie dialektycznym
sourceLocale: en
sourceHash: a3b6f4399179
translatedAt: 2026-01-14
---

Teza to weryfikowalne twierdzenie wyodrębnione z tekstu i przechowywane jako
pierwszej klasy [węzeł Grafu dialektycznego](./dialectical-graph-nodes) w
[Grafie dialektycznym](./dialectical-graph). (Zob. [Węzły grafu dialektycznego](./dialectical-graph-nodes).) Tezy nie
są surowymi zdaniami; to znormalizowane stwierdzenia z jawnie określonymi
zależnościami od [zakresu](./scope), [założeń](./assumption) i
[metody](./method).

Tezy mogą być powiązane z [fragmentami dowodów](./evidence-span), które je
wspierają, [kontrprzykładami](./counterexample), które je zawężają,
[atakami](./attack), które je kwestionują, oraz [podważeniami](./undercut),
które poddają w wątpliwość ich podstawy. Ta struktura relacyjna umożliwia
aktualizowanie wiedzy poprzez obalenie, a nie zastępowanie.

Każda teza ma status: może być wstępna, sporna, warunkowo wsparta, solidnie
wsparta, obalona lub nieaktualna. Status zmienia się w zależności od rodzaju
obalenia, a nie od ich liczby, i może ulec regresji, jeśli struktura wspierająca
osłabnie.
