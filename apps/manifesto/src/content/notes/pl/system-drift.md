---
title: Dryf systemowy
description: Degradacja systemów wiedzy przez samozanieczyszczenie lub zaniedbanie
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

Dryf systemowy to kategoria [zjawisk dryfu](./drift-phenomena), w której sam
system wiedzy degraduje się z czasem, niezależnie od zmian semantycznych lub
środowiskowych.

## Formy

- [Zapaść modelu](./model-collapse) — degradacja wynikająca z trenowania na
  danych generowanych przez AI
- [Korekta a dryf](./correction-vs-drift) — gdy naprawianie błędów kosztuje
  więcej niż pozwolenie im się rozprzestrzeniać

## Dlaczego to ma znaczenie

Dryf systemowy to tryb awarii, w którym system wiedzy stabilizuje się wokół „w
przybliżeniu utrzymywanego" fałszywego stanu stacjonarnego. Błędy utrzymują się,
ponieważ korekta jest kosztowna; treści generowane przez AI zanieczyszczają dane
treningowe; a system stopniowo traci kontakt z prawdą podstawową.

[Stopienie encyklopedii](./encyclopedia-meltdown) to forma skrajna: gdy AI
przejmuje inicjatywę pisania, znika
[linia odpowiedzialności](./responsibility-line), a system dryfuje w stronę
autoreferencyjnej zapaści. Obrona to
[warstwa protokołów epistemicznych](./epistemic-protocol-layer): utrzymywanie
korekty tańszej niż dryf dzięki [śledzalności](./traceability),
[ingestii zero trust](./zero-trust-ingestion) i
[wyszukiwaniu najpierw-kontrargumentów](./rebuttal-first-search).

## Powiązane

- [Zjawiska dryfu](./drift-phenomena) — kategoria nadrzędna
- [Dryf semantyczny](./semantic-drift) — gdy zmieniają się znaczenia
- [Dryf środowiskowy](./environmental-drift) — gdy zmienia się świat
- [Gnicie mózgu instytucji](./institutional-brain-rot) — analog organizacyjny
