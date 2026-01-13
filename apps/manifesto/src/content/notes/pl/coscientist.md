---
title: Coscientist
description: System intelektualnego towarzysza do wytwarzania wiedzy w erze post-AI
---

Coscientist to usługa open-source zainspirowana fikcyjną [Encyclopedia Galactica](./encyclopedia-galactica) Isaaca Asimova. Ma być czymś więcej niż [arką wiedzy](./knowledge-ark) dla informacji: intelektualnym towarzyszem, który poszerza namysł wspólnie z ludzkim [Galarch](./galarch). Przede wszystkim jest to system do od-gnicia mózgu w erze post-AI.

Buduje go [Sunghyun Cho](./sunghyun-cho). Historia powstania jest prosta: zachowanie ma znaczenie, ale samo zachowanie nie wytwarza zrozumienia. Coscientist został zaprojektowany tak, by wiedzę dało się aktualizować, dzięki czemu sprzeczności, kontrprzykłady i dryf definicji stają się widoczne i możliwe do przepracowania, zamiast być wygładzane przez płynne podsumowania.

Pierwszą zasadą jest suwerenność: autorytet wiedzy musi pozostać po stronie [Galarch](./galarch). Ochrona przed [Encyclopedia Meltdown](./encyclopedia-meltdown) nie jest dodatkiem „na koniec”; to ograniczenie projektowe. AI może wykonywać pracę namysłu, ale nie powinna przejmować inicjatywy pisania i ogłaszania.

Dlatego Coscientist wykracza poza RAG w stylu Q&A (zob. [ograniczenia RAG](./rag-limitations)). Utrzymuje [Graf Dialektyczny](./dialectical-graph), który przechowuje [akty argumentacyjne](./argumentative-act), a nie surowy tekst dokumentów, dzięki czemu każde twierdzenie można powiązać z fragmentami dowodów, źródłami oraz jawnymi relacjami, takimi jak ataki, podcięcia (undercuts) i cytowania (zob. [Węzły Grafu Dialektycznego](./dialectical-graph-nodes) oraz [Krawędzie Grafu Dialektycznego](./dialectical-graph-edges)). Eksploracja jest prowadzona przez strategie, które priorytetyzują presję adwersarialną, w tym wyszukiwanie „najpierw kontrprzykład”, izolowanie sprzeczności za pomocą [minimalnego przekroju](./minimum-cut) oraz jawne wykrywanie [dryfu definicji](./definition-drift) (zob. [Strategie eksploracji](./exploration-strategies)).

Na poziomie protokołu system korzysta z procedur takich jak [Protokół Konsensusu Multi-AI](./multi-ai-consensus-protocol) oraz [synteza wiedzy](./knowledge-synthesis), aby doprowadzać do zderzania się dokumentów, zamiast jedynie je streszczać. Docelowy stan sukcesu to ekosystem argumentów: AI wykonuje pracę wyszukiwania i restrukturyzacji, podczas gdy Galarch nadzoruje strukturę i weryfikację, tak aby powstała narracja pozostawała możliwa do prześledzenia.

Odniesienie: https://cho.sh/r/6975BA.