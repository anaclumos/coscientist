---
title: Wyszukiwanie najpierw kontrprzykładów
description: Strategia priorytetyzująca kontrprzykłady ponad dowody wspierające
sourceLocale: en
sourceHash: 2b3848f34451
translatedAt: 2026-01-14
---

Wyszukiwanie najpierw kontrprzykładów to
[strategia eksploracji](./exploration-strategies), która traktuje popularność
jako sygnał ryzyka, a nie dowód jakości. Im szerzej jakaś [teza](./claim) jest
powtarzana, tym cenniejsze staje się znajdowanie
[kontrprzykładów](./counterexample) i warunków brzegowych, ponieważ błędy w
popularnych tezach mają większy promień rażenia w
[Załamanie Encyklopedii](./encyclopedia-meltdown).

Ta strategia odwraca normalny priorytet wyszukiwania. Standardowe wyszukiwanie
szereguje wyniki według trafności lub częstości, co zwykle wydobywa zgodę.
Wyszukiwanie najpierw kontrprzykładów celowo szuka niezgody, przypadków
skrajnych i porażek, ponieważ są one bardziej informacyjne dla aktualizowania
wiedzy.

Jest to podejście powiązane, ale odmienne od
[wyszukiwania najpierw obaleń](./rebuttal-first-search), które jest protokołem
walidacji przy akceptowaniu tez. Wyszukiwanie najpierw kontrprzykładów to
strategia odkrywania: aktywne szukanie tego, co się psuje, zamiast tego, co
potwierdza.
