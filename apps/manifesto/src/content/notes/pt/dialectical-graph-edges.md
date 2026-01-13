---
title: Arestas do Grafo Dialético
description: Os tipos de relações que conectam nós em um grafo de conhecimento dialético
---

Em um [Grafo Dialético](./dialectical-graph), as arestas codificam tipos de relação, em vez de pontuações de similaridade. O valor disso é que você pode perguntar “como isso se relaciona com aquilo?” em vez de apenas “isso trata do mesmo tema?”

Relações típicas incluem `supports`, `attacks` e `undercuts` (desafios no nível de método/pressuposto/definição); relações de refinamento e escopo como `refines`, `generalizes`, `specializes` e `depends_on`; links de proveniência como `cites`, `defines`, `measures`, `replicates` e `fails_to_replicate`; e conflitos diretos como `contradicts`. Alguns grafos também usam links tópicos mais frouxos como `is_about`, mas o trabalho epistêmico vem de arestas argumentativas tipadas.

Arestas tipadas permitem a atualização do conhecimento por meio de cadeias de refutação, a detecção de conflitos de definição e o acompanhamento do status de replicação. Essas são capacidades que a recuperação baseada em similaridade tem dificuldade em representar (ver [limitações do RAG](./rag-limitations)). Elas também sustentam a avaliação de qualidade: a qualidade do conhecimento depende menos da direção de uma conclusão e mais da durabilidade do caminho que a produziu — e as arestas codificam a estrutura desse caminho.