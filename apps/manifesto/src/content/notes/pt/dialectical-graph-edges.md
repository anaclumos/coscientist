---
title: Arestas do Grafo Dialético
description: Os tipos de relação que conectam nós em um grafo de conhecimento dialético
---

Em um [Grafo Dialético](./dialectical-graph), as arestas codificam tipos de relação em vez de pontuações de similaridade. O valor disso é que você pode perguntar "como isto afeta aquilo?" em vez de apenas "isto e aquilo são sobre o mesmo tópico?"

Tipos de relação comuns incluem:

- Suporte: `supports`
- Contestação: `attacks`, `undercuts`, `contradicts`
- Refinamento e escopo: `refines`, `generalizes`, `specializes`, `depends_on`
- Proveniência e medição: `cites`, `defines`, `measures`
- Replicação: `replicates`, `fails_to_replicate`
- Links tópicos opcionais: `is_about` (útil, mas não epistêmico por si só)

Arestas tipadas permitem atualização de conhecimento por meio de cadeias de refutação, detecção de conflitos de definição e acompanhamento do status de replicação. Essas são capacidades que a recuperação baseada em similaridade tem dificuldade de representar (veja [limitações do RAG](./rag-limitations)). Elas também dão suporte à avaliação de qualidade: a qualidade do conhecimento depende menos da direção de uma conclusão e mais da durabilidade do caminho que a produziu, e as arestas codificam essa estrutura de caminho.
