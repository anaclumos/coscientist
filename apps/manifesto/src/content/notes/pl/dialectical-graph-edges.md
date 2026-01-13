---
title: Krawędzie grafu dialektycznego
description: Typy relacji łączące węzły w dialektycznym grafie wiedzy
---

W [Grafie Dialektycznym](./dialectical-graph) krawędzie kodują typy relacji, a nie wyniki podobieństwa. Dzięki temu możesz pytać „jak to się ma do tamtego?”, zamiast wyłącznie „czy to jest o tym samym temacie?”.

Typowe relacje obejmują `supports`, `attacks` oraz `undercuts` (wyzwania na poziomie metody/założeń/definicji); relacje doprecyzowania i zakresu, takie jak `refines`, `generalizes`, `specializes` i `depends_on`; powiązania proweniencyjne (provenance), takie jak `cites`, `defines`, `measures`, `replicates` oraz `fails_to_replicate`; a także jawne konflikty, takie jak `contradicts`. Niektóre grafy używają też luźnych linków tematycznych typu `is_about`, ale praca epistemiczna wynika z typowanych, argumentacyjnych krawędzi.

Typowane krawędzie umożliwiają aktualizację wiedzy poprzez łańcuchy rebuttali (rebuttal chains), wykrywanie konfliktów definicyjnych oraz śledzenie statusu replikacji. To możliwości, które wyszukiwanie oparte na podobieństwie ma trudność reprezentować (zob. [ograniczenia RAG](./rag-limitations)). Wspierają też ocenę jakości: jakość wiedzy zależy mniej od kierunku wniosku, a bardziej od trwałości ścieżki, która do niego doprowadziła — a krawędzie kodują strukturę tej ścieżki.