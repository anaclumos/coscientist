---
title: Grafo Dialético
description: Um modelo de grafo de conhecimento que armazena afirmações e relações em vez do conteúdo de documentos
---

Um grafo dialético é um grafo de conhecimento que armazena a estrutura argumentativa (afirmações, definições, pressupostos, métodos, trechos de evidência e as relações entre eles) em vez de tratar documentos como texto indiferenciado. A ideia central é simples: não confunda texto com conhecimento. Texto é embalagem; conhecimento é a estrutura de restrições que permite que afirmações apoiem, ataquem e refinem umas às outras.

[Coscientist](./coscientist) impõe uma separação tripla: o texto original é preservado como trechos de evidência citáveis; as afirmações são decompostas em proposições normalizadas; e as relações são armazenadas como vínculos argumentativos explícitos. Isso é uma correção estrutural para um modo comum de falha em RAG (Retrieval-Augmented Generation): truncamento de excertos. O trecho de evidência mantém a redação exata e a fonte, a afirmação registra quem afirmou o quê, e uma aresta `cites` torna a atribuição explícita em vez de implícita no texto corrido.

O grafo também separa uma camada de inferência (a rede de afirmações em evolução) de uma camada narrativa (uma projeção com carimbo de tempo adequada para leitura). Um documento não é a verdade final; é um instantâneo do grafo. Toda frase deveria conseguir retroceder por afirmação, escopo, pressuposto, método, dados, trecho de evidência e fonte. Sem essa cadeia, uma frase é só uma frase, não conhecimento.

Para atuar como um freio à [Encyclopedia Meltdown](./encyclopedia-meltdown), o sistema prioriza contradições e contraexemplos em vez de consenso. Quando uma afirmação entra no grafo, a postura padrão é adversarial: buscar ataques e refutações (undercuts) cedo, para que a estrutura se atualize por refutação em vez de derivar por repetição. Para tipos concretos de nós e relações, veja [Nós do Grafo Dialético](./dialectical-graph-nodes) e [Arestas do Grafo Dialético](./dialectical-graph-edges).