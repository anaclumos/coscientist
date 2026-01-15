---
title: Nó de Questão
description: "Um feixe de aglomerados de alegações em colisão em um grafo dialético"
sourceLocale: en
sourceHash: daca26b69d5d
translatedAt: 2026-01-14
---

Um nó de questão é um objeto de grafo que agrupa [alegações](./claim) em colisão
em um objeto coerente de investigação. Ele nomeia a pergunta, registra quais
alegações entram em conflito e acompanha as condições sob as quais o conflito
pode se resolver.

Nós de questão transformam contenção em estrutura. Em vez de espalhar ataques e
contraexemplos pelo grafo, o sistema os agrupa: "Estas quatro alegações não
podem ser todas verdadeiras sob estas condições; aqui estão os caminhos de
resolução." É por isso que a [síntese de conhecimento](./knowledge-synthesis)
produz aglomerados de questões em vez de resumos médios.

Em um [Grafo Dialético](./dialectical-graph), nós de questão são objetos de
primeira classe (veja [Nós do Grafo Dialético](./dialectical-graph-nodes)) que
se conectam à [contenção](./contention) e às alegações envolvidas. Resolver uma
questão significa ou refutar algumas alegações, restringir seu [escopo](./scope)
ou desambiguar [definições](./definition-drift).
