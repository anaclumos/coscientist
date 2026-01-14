---
title: Limitações do RAG
description: Por que a geração aumentada por recuperação padrão não consegue produzir descoberta genuína
---

[RAG](./rag)  melhora a factualidade ao recuperar documentos relevantes, mas o RAG padrão ainda tem limitações estruturais para a produção de conhecimento. Ele recupera trechos de texto e produz prosa fluente; não representa os objetos de que você precisa para a descoberta: afirmações, contra-afirmações, definições, métodos e as relações que os conectam.

Um modo de falha é o viés quantitativo. Se muitas fontes repetem uma afirmação e um pequeno número contém refutações decisivas ou contraexemplos, a recuperação baseada em similaridade tende a amplificar a maioria e a suavizar os pontos de virada. Um único contraexemplo ou uma revisão de definição pode carregar mais peso epistêmico do que cem repetições, mas não é necessariamente "mais similar".

Outra limitação é a ausência de relações explícitas. O RAG pode recuperar excertos do estudo A e do estudo B, mas geralmente não consegue representar que B refuta A, invalida seu método ou estreita seu escopo; ele apenas coloca trechos perto uns dos outros. Isso substitui a qualidade das justificativas pela quantidade de texto.

Por fim, a proveniência é frágil sob truncamento. Quando um excerto perde a atribuição  e preserva apenas a conclusão , o modelo pode reescrever silenciosamente a linha de responsabilidade. As citações viram "sensações", e "quem afirmou o quê" fica difícil de reconstruir.

Por isso, o RAG padrão tem dificuldade com atualização e síntese de conhecimento na presença de verdadeira [contenda](./contention). Uma alternativa é mudar de "quão similar é" para "que relação é", como em um [Grafo Dialético](./dialectical-graph) que armazena afirmações e tipos de relação e prioriza contradições e contraexemplos em vez de consenso.
