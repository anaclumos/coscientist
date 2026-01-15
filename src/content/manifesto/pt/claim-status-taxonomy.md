---
title: Taxonomia de Status de Afirmações
description: Os estados em que uma afirmação pode estar dentro de um grafo dialético
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

A taxonomia de status de afirmações define os estados que uma
[afirmação](./claim) pode ocupar em um [Grafo Dialético](./dialectical-graph).
Para como uma afirmação normalmente se move através desses estados ao longo do
tempo, veja o [Ciclo de Vida da Afirmação](./claim-lifecycle).

## Estados Comuns

- `tentative` — estágio de hipótese
- `contested` — debate ativo
- `conditionally supported` — verdadeiro sob condições especificadas
- `robust` — sustentado por múltiplos caminhos independentes
- `refuted` — derrubado por um [contraexemplo](./counterexample)
- `obsolete` — significado perdido devido à
  [deriva de definição](./definition-drift) ou mudança de método

Status não é uma única pontuação de confiança. Uma afirmação pode ser robusta em
diversidade de evidências, mas contestada em escopo; pode ser condicionalmente
sustentada em um contexto e refutada em outro. Um status multidimensional
captura essa complexidade.

As transições entre estados são impulsionadas pelo tipo de refutação, não pela
quantidade. Um único [contraexemplo](./counterexample) bem fundamentado pode
mover uma afirmação de robusta para refutada; muitas objeções fracas podem
deixá-la contestada sem resolver. Veja as [Regras de Transição de Status](./status-transition-rules) para a lógica formal de transição.
