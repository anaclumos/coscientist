---
title: Ograniczenia RAG
description: Dlaczego standardowe generowanie wspomagane wyszukiwaniem nie potrafi prowadzić do prawdziwych odkryć
---

Generowanie wspomagane wyszukiwaniem (RAG) poprawia zgodność z faktami, pobierając odpowiednie dokumenty, ale standardowe RAG nadal ma strukturalne ograniczenia w wytwarzaniu wiedzy. Pobiera fragmenty tekstu i produkuje płynną prozę; nie reprezentuje jednak obiektów potrzebnych do odkrywania: twierdzeń, kontrtwierdzeń, definicji, metod oraz relacji, które je wiążą.

Jednym z trybów awarii jest stronniczość ilościowa. Jeśli wiele źródeł powtarza jakieś twierdzenie, a niewielka liczba zawiera rozstrzygające obalenia lub kontrprzykłady, wyszukiwanie oparte na podobieństwie ma tendencję do wzmacniania większości i wygładzania punktów zwrotnych. Pojedynczy kontrprzykład lub rewizja definicji może mieć większą wagę epistemiczną niż sto powtórzeń, ale niekoniecznie jest „bardziej podobny”.

Kolejnym ograniczeniem jest brak jawnych relacji. RAG może pobrać fragmenty z badania A i badania B, ale zazwyczaj nie potrafi przedstawić, że B obala A, podważa jego metodę lub zawęża zakres jego stosowalności; po prostu umieszcza fragmenty obok siebie. To zastępuje jakość uzasadnień ilością tekstu.

Wreszcie, pochodzenie (proweniencja) jest kruche przy ucinaniu (truncation). Gdy z wycinka wypada atrybucja („B donosi, że A twierdził…”) i pozostaje tylko wniosek („X działa”), model może po cichu przepisać linię odpowiedzialności. Cytowania zamieniają się w przeczucia, a „kto co stwierdził” staje się trudne do odtworzenia.

Z tego powodu standardowe RAG ma trudności z aktualizacją wiedzy i syntezą w obliczu realnego [sporu](./contention). Alternatywą jest przesunięcie akcentu z „na ile to jest podobne” na „jaka to relacja”, jak w [Grafie Dialektycznym](./dialectical-graph), który przechowuje twierdzenia i typy relacji oraz priorytetyzuje sprzeczności i kontrprzykłady zamiast konsensusu.