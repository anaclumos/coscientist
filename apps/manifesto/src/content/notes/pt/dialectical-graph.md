---
title: Grafo Dialético
description: "Um modelo de grafo de conhecimento que armazena afirmações e relações em vez do conteúdo de documentos"
sourceLocale: en
sourceHash: 7de42f075323
translatedAt: 2026-01-14
---

Um grafo dialético é um grafo de conhecimento que armazena a estrutura argumentativa em vez de tratar documentos como texto indiferenciado. A percepção central é simples: não confunda texto com conhecimento. Texto é embalagem; conhecimento é a estrutura de restrições que permite que afirmações se apoiem, ataquem e refinem umas às outras. Para contexto sobre como essa abordagem evolui além de sistemas centrados em documentos, veja [De Memex a Grafo Dialético](./from-memex-to-dialectical-graph).

O [Cocientista](./coscientist) impõe uma separação tripla: o texto original é preservado como trechos de evidência citáveis; as afirmações são decompostas em proposições normalizadas; e as relações são armazenadas como vínculos argumentativos explícitos. Isso é uma correção estrutural para um modo comum de falha em [RAG](./rag): truncamento de trechos. O trecho de evidência mantém a redação exata e a fonte, a afirmação registra quem afirmou o quê, e uma aresta `cites` torna a atribuição explícita em vez de implícita na prosa.

O grafo também separa uma camada de inferência de uma camada narrativa. Um documento não é a verdade final; é um retrato do grafo. Cada frase deveria ser capaz de retroceder por afirmação, escopo, pressuposto, método, dados, trecho de evidência e fonte. Sem essa cadeia, uma frase é apenas uma frase, não conhecimento.

Para atuar como um freio contra o [Colapso da Enciclopédia](./encyclopedia-meltdown), o sistema prioriza contradições e contraexemplos em vez de consenso (veja [Grafo como Defesa contra o Colapso](./graph-as-meltdown-defense)). Quando uma afirmação entra no grafo, a postura padrão é adversarial: buscar ataques e enfraquecimentos cedo para que a estrutura se atualize por meio de refutações em vez de derivar por repetição. Para tipos concretos de nós e relações, veja [Nós do Grafo Dialético](./dialectical-graph-nodes) e [Arestas do Grafo Dialético](./dialectical-graph-edges), bem como [Componentes do Grafo](./graph-components).