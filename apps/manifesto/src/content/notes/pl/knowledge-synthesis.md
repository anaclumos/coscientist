---
title: Synteza wiedzy
description: Czym synteza różni się od uśredniania w dialektycznych systemach wiedzy
---

Synteza wiedzy to to, co dzieje się po wyszukaniu (retrieval), gdy trzeba uczynić niekompatybilne źródła porównywalnymi. To nie jest uśrednianie. To dopasowywanie przesłanek, definicji i zakresu (scope), tak aby niezgodności stały się jawnymi obiektami, a nie szumem.

Standardowy [RAG](./rag) jest mocny w wyszukiwaniu i słaby w syntezie, ponieważ nie ma wewnętrznego obiektu o nazwie [contention](./contention). W [Graf Dialektyczny](./dialectical-graph) contention jest bytem pierwszej klasy, więc system może rozłożyć niekompatybilność na jej przyczyny: różnice definicji, różnice doboru próby (sampling), różnice metod, różnice zakresu lub napędzaną czasem [niestacjonarność](./nonstationarity).

Rozstrzygnięcie rzadko bywa jednym zdaniem. Często ma postać [rozgałęzionej mapy rozstrzygnięć](./branched-resolution-map): jeśli różne definicje lub zakresy prowadzą do różnych wniosków, zapisz rozgałęzienie na właściwej warstwie, zamiast udawać, że istnieje jedna uśredniona odpowiedź. [Węzły problemu](./issue-node) grupują to, co z czym jest w konflikcie, oraz zapisują warunki, w których dany problem może zostać rozwiązany.

Celem jest mapa sprzeczności oraz jawne warunki rozstrzygnięcia, aby przyszłe prace mogły aktualizować wiedzę przez przestawianie, a nie przepisywanie. Dlatego kontemplacyjne AI w [Współnaukowiec](./coscientist) jest ukierunkowane na doprowadzanie dokumentów do zderzeń: wytwarzanie klastrów problemów, doprecyzowanych warunków, ustrukturyzowanych ripost oraz jawnych układów współrzędnych do porównań.

Ponieważ [LLM-y](./llm) potrafią czytać wiele języków, synteza obejmuje także [syntezę międzyjęzykową](./cross-linguistic-synthesis): pobieranie źródeł w różnych językach i dopasowywanie ich twierdzeń w [indeksie niezależnym od języka](./language-agnostic-indexing). [Utrata niuansów w tłumaczeniu](./translation-nuance-loss) staje się kolejną formą niekompatybilności, którą trzeba śledzić i rozwiązywać.