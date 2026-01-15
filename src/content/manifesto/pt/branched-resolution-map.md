---
title: Mapa de Resolução Ramificada
description:
  Estrutura que mostra múltiplas conclusões válidas com base em diferentes
  definições ou métodos
sourceLocale: en
sourceHash: c387f6c101ba
translatedAt: 2026-01-14
---

Um mapa de resolução ramificada é uma estrutura que apresenta múltiplas
conclusões válidas como ramos a partir de diferentes pontos de partida:
definições, métodos ou pressupostos. Em vez de forçar uma única resposta, ele
mostra: "se você definir X desta forma, então A; se você definir X daquela
forma, então B".

Este é o formato de saída para [síntese de conhecimento](./knowledge-synthesis)
quando a incompatibilidade não pode ser resolvida em uma única verdade. O mapa
torna explícito que a discordância não é sobre fatos, mas sobre premissas, e os
leitores conseguem ver exatamente onde as conclusões divergem.

Mapas ramificados contrapõem a pressão por fazer uma média. No [RAG](./rag)
padrão, fontes conflitantes são mescladas em um resumo fluido que oculta a
discordância. Um mapa ramificado preserva a estrutura do conflito e permite que
o [Operador](./operator) decida qual ramo se aplica ao seu contexto.
