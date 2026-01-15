---
title: Nós do Grafo Dialético
description: "Os tipos de nós em um grafo de conhecimento dialético"
sourceLocale: en
sourceHash: 007206ea7078
translatedAt: 2026-01-14
---

Em um [Grafo Dialético](./dialectical-graph), os nós representam objetos
epistêmicos em vez de texto bruto. Para uma visão geral de como essas peças se
encaixam, veja [Componentes do Grafo](./graph-components). Tipos comuns de nós
incluem:

- [Alegação](./claim) — proposições verificáveis
- [Escopo](./scope) — condições de aplicabilidade
- [Pressuposto](./assumption) — premissas implícitas
- Definições — significados de termos.
- [Método](./method) — procedimentos que geram evidências ou conclusões
- Dados — medições ou resultados
- [Trecho de Evidência](./evidence-span) — intervalos citados exatamente
- [Fonte](./source) — âncoras de proveniência
- [Contraexemplo](./counterexample) — casos que refutam ou restringem alegações
- [Nó de Questão](./issue-node) — agrupamentos de clusters de alegações em
  colisão

Essa decomposição evita uma confusão comum: um documento não é uma coisa só. O
mesmo artigo pode introduzir uma definição, afirmar uma alegação, citar
evidências e refutar um resultado anterior; cada um desses elementos deve
permanecer endereçável se você quer que o conhecimento se atualize, em vez de
apenas se acumular.

O status de uma alegação é multidimensional, em vez de um único escore de
confiança. As transições são determinadas menos pelo número de refutações e
mais pelo tipo de refutação e se ela tem êxito no nível de escopo, pressuposto,
definição ou método; veja [Arestas do Grafo Dialético](./dialectical-graph-edges).
