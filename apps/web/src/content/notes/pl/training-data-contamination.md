---
title: Skażenie danych treningowych
description: Treści generowane przez AI zanieczyszczające korpusy używane do trenowania przyszłych modeli
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Skażenie danych treningowych zachodzi wtedy, gdy tekst generowany przez AI trafia do sieci, zostaje zeskrobany do korpusów treningowych i kształtuje kolejną generację modeli. Skutkiem jest pętla sprzężenia zwrotnego: modele trenowane na wyjściach swoich poprzedników dziedziczą ich uprzedzenia, wzmacniają ich błędy i tracą dostęp do niezależnego ludzkiego sygnału, który czynił pierwowzory użytecznymi.

To zjawisko różni się od skażenia benchmarków (przenikania danych testowych do zbiorów treningowych), choć oba używają tego samego określenia. Skażenie danych treningowych dotyczy pochodzenia bazowego korpusu: gdy [AI slop](./ai-slop) miesza się na dużą skalę z tekstem pisanym przez ludzi, ich rozróżnianie staje się kosztowne albo niemożliwe. Zeskrobywania sieci po 2022 roku są coraz bardziej podejrzane.

Konsekwencje się kumulują. [Załamanie modelu](./model-collapse) opisuje spadek jakości, gdy modele trenują na danych syntetycznych: rozkłady się zawężają, rzadkie mody zanikają, a wyjście zbiega w stronę ujednoliconej średniej. [Topnienie encyklopedii](./encyclopedia-meltdown) opisuje awarię systemu wiedzy, gdy wyjścia AI są cytowane jako źródła, tworząc kolistą (cyrkularną) autorytetność. Skażenie danych treningowych jest nadrzędną, wcześniejszą przyczyną obu tych zjawisk.

Analogią, która wyjaśnia problem, jest [stal niskotła](./low-background-steel). Testy jądrowe skaziły całą stal produkowaną po 1945 roku; proliferacja LLM skaziła cały tekst internetowy po 2020 roku. Oba zdarzenia skażenia były nieodwracalne, oba stworzyły popyt na [zasoby sprzed skażenia](./pre-contamination-resource), i oba oznaczają, że rozwijanie technologii wymaga materiałów wytworzonych zanim ta technologia w ogóle istniała.

Rozwiązania obejmują weryfikację [pochodzenia](./provenance), archiwa ograniczane znacznikami czasu oraz praktyki kuracji danych, które faworyzują źródła o jasnych łańcuchach ludzkiego autorstwa. MIT Data Provenance Initiative i podobne wysiłki mają na celu wprowadzenie przejrzystości do pochodzenia danych treningowych — to konieczny krok, jeśli przyszłe modele mają uniknąć trenowania na własnych odbiciach.
