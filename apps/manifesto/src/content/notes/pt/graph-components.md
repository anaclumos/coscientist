---
title: Componentes do Grafo
description: Os tipos de nós e arestas que compõem um grafo dialético
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

Os componentes do grafo são os blocos de construção de um
[Grafo Dialético](./dialectical-graph): os tipos de nós que representam objetos
epistêmicos e os tipos de arestas que representam relações entre eles.

**Tipos de nós** (ver [Nós do Grafo Dialético](./dialectical-graph-nodes)):

- [Alegação](./claim) — proposições verificáveis
- [Trecho de Evidência](./evidence-span) — texto exatamente citado de fontes
- [Escopo](./scope) — condições de aplicabilidade
- [Suposição](./assumption) — premissas implícitas
- [Método](./method) — procedimentos para gerar evidências
- [Fonte](./source) — âncoras de proveniência
- [Contraexemplo](./counterexample) — casos que invalidam alegações
- [Nó de Questão](./issue-node) — agrupamentos de alegações em colisão

**Tipos de arestas** (ver
[Arestas do Grafo Dialético](./dialectical-graph-edges)):

- [Ataque](./attack) — desafios diretos à verdade
- [Refutação por Minar ](./undercut) — desafios aos fundamentos
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contenção](./contention) — marcadores estruturados de conflito
