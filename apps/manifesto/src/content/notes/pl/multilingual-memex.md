---
title: Wielojęzyczny Memex
description: Świadomy języka osobisty system wiedzy z obsługą automatycznego tłumaczenia
---

Wielojęzyczny Memex to osobisty system wiedzy, który natywnie wspiera treści w wielu językach, z automatycznym wykrywaniem języka, tłumaczeniem oraz łączeniem międzyjęzykowym. Rozszerza pierwotną wizję [Memexu](./memex) autorstwa [Vannevara Busha](./vannevar-bush) na świat, w którym wiedza nie respektuje granic językowych.

[Extracranial](./extracranial) autorstwa [Sunghyun Cho](./sunghyun-cho) jest implementacją tej koncepcji. Obejmuje automatyczne wykrywanie języka, dostarczanie treści specyficzne dla lokalizacji z użyciem tagów hreflang oraz możliwość pisania w jednym języku przy jednoczesnym pozostawieniu systemom tłumaczeń dostarczania treści w innych językach.

Konsekwencje architektoniczne są znaczące. Elementy interfejsu, wyszukiwanie i powiązania muszą uwzględniać język:

- Zapytanie po koreańsku powinno znajdować istotne treści niezależnie od tego, czy zostały pierwotnie napisane po koreańsku, czy przetłumaczone z angielskiego.
- Linki zwrotne  powinny działać między językami.
- [Linia odpowiedzialności](./responsibility-line) musi śledzić nie tylko to, kto co stwierdził, ale także w jakim języku i za pomocą jakiej metody tłumaczenia.

Dlatego [Extracranial](./extracranial) uwzględnia wkład społeczności poprzez GitHub, aby udoskonalać tłumaczenia: tłumaczenie maszynowe umożliwia wielojęzyczne treści, ale do utrzymania [wierności tłumaczenia](./translation-fidelity) potrzebna jest ludzka weryfikacja. Wielojęzyczny Memex nie jest rozwiązanym problemem, lecz trwającą współpracą między zautomatyzowanymi systemami a ludzką oceną.

Dla [Współnaukowiec](./coscientist) wielojęzyczny Memex staje się wielojęzycznym [Grafem Dialektycznym](./dialectical-graph): strukturą, która przechowuje [twierdzenia](./claim), [fragmenty dowodów](./evidence-span) oraz relacje z dowolnego języka, traktując język jako metadane, a nie fundamentalną granicę.
