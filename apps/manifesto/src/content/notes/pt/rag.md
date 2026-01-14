---
title: RAG
description:
  Geração Aumentada por Recuperação, uma técnica para fundamentar as saídas de
  IA em documentos recuperados
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG é uma técnica que melhora a precisão das saídas de IA ao recuperar
documentos relevantes de um corpus e usá-los como contexto para a geração. Em
vez de depender apenas de parâmetros aprendidos durante o treinamento, o modelo
pode consultar fontes externas, reduzindo [alucinação](./hallucination) e
permitindo conhecimento que não estava nos dados de treinamento.

O pipeline padrão de RAG funciona assim: uma consulta é incorporada em um espaço
vetorial, documentos semelhantes são recuperados com base na similaridade
vetorial, e o texto recuperado é fornecido a um [LLM](./llm) como contexto para
gerar uma resposta. Essa abordagem se tornou amplamente difundida para perguntas
e respostas, busca e tarefas intensivas em conhecimento.

No entanto, o RAG tem limitações estruturais para a produção de conhecimento.
Ele recupera trechos de texto com base em similaridade, não em relações
argumentativas. Ele não consegue distinguir apoio de ataque, evidência de
opinião, ou fonte primária de reformulação. Quando as fontes entram em conflito,
o RAG tende a mesclá-las em resumos "suaves" em vez de expor a
[controvérsia](./contention). Veja [Limitações do RAG](./rag-limitations) para a
crítica completa.

O [Cocientista](./coscientist) vai além do RAG ao manter um
[Grafo Dialético](./dialectical-graph) que armazena [alegações](./claim),
[trechos de evidência](./evidence-span) e relações tipadas. A recuperação passa
a ser "o que incide sobre esta alegação?" em vez de "o que é semelhante a esta
consulta?"
