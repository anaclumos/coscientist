---
title: Nós de Grafo Dialético
description: Os tipos de nós em um grafo de conhecimento dialético
---

Em um [Grafo Dialético](./dialectical-graph), os nós representam objetos epistêmicos em vez de texto bruto. Tipos comuns de nós incluem alegações (proposições verificáveis), escopo (condições de aplicabilidade), pressupostos (premissas implícitas), definições (significados de termos), métodos (procedimentos), dados (medições ou resultados), trechos de evidência (intervalos exatos citados), fontes (âncoras de proveniência), contraexemplos (casos que quebram ou restringem alegações) e questões (conjuntos de aglomerados de alegações em colisão).

Essa decomposição evita uma confusão comum: um documento não é uma coisa só. O mesmo artigo pode introduzir uma definição, afirmar uma alegação, citar evidências e refutar um resultado anterior; cada um desses elementos deve permanecer endereçável se você quiser que o conhecimento se atualize em vez de apenas se acumular.

O status de uma alegação também é multidimensional, em vez de uma única pontuação de confiança. Uma alegação pode ser `tentative` (estágio de hipótese), `contested` (debate ativo), `conditionally supported` (verdadeira sob condições especificadas), `robust` (sustentada por múltiplos caminhos independentes), `refuted` (derrubada por um contraexemplo) ou `obsolete` (significado perdido devido a mudanças de definição ou método). As transições são impulsionadas menos pelo número de refutações e mais pelo tipo de refutação e por ela ter êxito no nível de escopo, pressuposto, definição ou método.