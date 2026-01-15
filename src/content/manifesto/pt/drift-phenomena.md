---
title: Fenômenos de Deriva
description: Mudanças no tempo em sistemas de conhecimento
sourceLocale: en
sourceHash: daea382efa66
translatedAt: 2026-01-14
---

Fenômenos de deriva são as formas como sistemas de conhecimento mudam ao longo
do tempo, muitas vezes de modo invisível, levando a erros que parecem
contradições, mas que na verdade decorrem de um descompasso temporal.

## [Deriva Semântica](./semantic-drift)

- [Deriva de Definição](./definition-drift) — quando o significado de um termo
  muda ao longo do tempo ou entre comunidades
- [Perda de Significado](./meaning-loss) — quando afirmações se tornam obsoletas
  porque seus termos deixam de se aplicar

## [Deriva Ambiental](./environmental-drift)

- [Não Estacionariedade](./nonstationarity) — quando o processo subjacente que
  produz dados muda ao longo do tempo

## [Deriva do Sistema](./system-drift)

- [Colapso de Modelo](./model-collapse) — degradação decorrente de treinar com
  dados gerados por IA
- [Correção vs Deriva](./correction-vs-drift) — o que acontece quando corrigir
  erros custa mais do que deixá-los se propagar

## Defesa

O [Grafo Dialético](./dialectical-graph) rastreia a deriva explicitamente ao
separar [definições](./definition-drift) de [afirmações](./claim) e registrar
quando e onde as afirmações deveriam se aplicar. Isso evita falsas contradições
decorrentes de descompasso temporal.
