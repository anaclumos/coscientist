---
title: Synteza wiedzy
description: Czym synteza różni się od uśredniania w dialektycznych systemach wiedzy
---

Synteza wiedzy to to, co dzieje się po odzyskaniu informacji (retrieval), gdy trzeba uczynić niekompatybilne źródła porównywalnymi. To nie jest uśrednianie. To dopasowywanie przesłanek, definicji i zakresu tak, aby niezgodności stawały się jawnymi obiektami, a nie szumem.

Standardowy [RAG](./rag-limitations) jest mocny w odzyskiwaniu i słaby w syntezie, ponieważ nie ma wewnętrznego obiektu zwanego [sporem](./contention). W [Grafie Dialektycznym](./dialectical-graph) spór jest elementem pierwszej klasy, więc system może rozłożyć niekompatybilność na jej przyczyny: różnice definicji, różnice w próbkowaniu, różnice metod, różnice zakresu albo napędzaną czasem [niestacjonarność](./nonstationarity).

Rozstrzygnięcie nie jest więc jednym zdaniem. To rozgałęziona mapa: jeśli ten sam termin prowadzi do różnych wniosków przy różnych definicjach, system zapisuje rozgałęzienie na warstwie definicji, zanim potraktuje to jako sprzeczność we wnioskach. [Węzły problemów](./dialectical-graph-nodes) grupują, co jest z czym w konflikcie, i zapisują warunki, pod którymi problem może zostać rozwiązany.

Celem jest mapa sprzeczności plus jawne warunki rozstrzygnięcia, aby przyszłe prace mogły aktualizować wiedzę przez przestawianie, a nie przepisywanie. Dlatego kontemplacyjne AI w [Coscientist](./coscientist) ma na celu doprowadzanie do zderzeń dokumentów: tworzenie klastrów problemów, doprecyzowanych warunków, ustrukturyzowanych kontrargumentów oraz jawnych układów współrzędnych do porównywania.