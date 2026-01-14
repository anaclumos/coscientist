---
title: Potrójna separacja
description:
  Reguła architektoniczna rozdzielająca surowy tekst, znormalizowane twierdzenia
  i jawne relacje
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Potrójna separacja to reguła architektoniczna w
[Grafie Dialektycznym](./dialectical-graph), która utrzymuje trzy warstwy jako
rozłączne: oryginalny tekst jest zachowywany jako cytowalne
[fragmenty dowodowe](./evidence-span); [twierdzenia](./claim) są rozkładane na
[znormalizowane propozycje](./normalized-proposition); a relacje są
przechowywane jako jawne wiązania argumentacyjne (zob.
[Krawędzie Grafu Dialektycznego](./dialectical-graph-edges)).

Ten rozdział zapobiega typowemu trybowi awarii w [RAG](./rag-limitations):
ucinaniu fragmentów . Gdy tekst jest pobierany i streszczany bez zachowania
oryginalnego brzmienia, przypisanie źródła może po cichu zniknąć. Potrójna
separacja zapewnia, że zawsze możesz prześledzić twierdzenie do dokładnych słów
oraz [źródła](./source), które je wytworzyło.

Umożliwia też [syntezę wiedzy](./knowledge-synthesis), czyniąc strukturę podatną
na zapytania. Możesz zapytać: „co atakuje to twierdzenie?" albo „na jakich
definicjach to się opiera?", ponieważ te relacje są przechowywane, a nie tylko
domniemane.
