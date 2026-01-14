---
title: Separação Tripla
description: Regra arquitetural que separa texto bruto, alegações normalizadas e relações explícitas
---

A separação tripla é a regra arquitetural em um [Grafo Dialético](./dialectical-graph) que mantém três camadas distintas: o texto original é preservado como trechos de [evidência](./evidence-span) citáveis; as [alegações](./claim) são decompostas em [proposições normalizadas](./normalized-proposition); e as relações são armazenadas como vínculos argumentativos explícitos (ver [Arestas do Grafo Dialético](./dialectical-graph-edges)).

Essa separação evita um modo de falha comum em [RAG](./rag-limitations): truncamento de trechos. Quando o texto é recuperado e resumido sem preservar a redação original, a atribuição pode desaparecer silenciosamente. A separação tripla garante que você sempre possa rastrear uma alegação até as palavras exatas e a [fonte](./source) que as produziu.

Ela também viabiliza a [síntese de conhecimento](./knowledge-synthesis) ao tornar a estrutura consultável. Você pode perguntar "o que ataca esta alegação?" ou "de quais definições isso depende?" porque essas relações são armazenadas, não apenas implícitas.
