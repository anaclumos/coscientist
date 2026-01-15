---
title: Componentes do Grafo
description: Os tipos de nós e arestas que compõem um grafo dialético
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

Os componentes do grafo são os blocos de construção de um
[Grafo Dialético](./dialectical-graph): os [Nós do Grafo Dialético](./dialectical-graph-nodes) que representam
objetos epistêmicos e as [Arestas do Grafo Dialético](./dialectical-graph-edges) que representam [Relações Argumentativas](./argumentative-relations) entre eles.

**Tipos de nós** ):

- [Alegação](./claim) — proposições verificáveis
- [Trecho de Evidência](./evidence-span) — texto exatamente citado de fontes
- [Escopo](./scope) — condições de aplicabilidade
- [Suposição](./assumption) — premissas implícitas
- [Método](./method) — procedimentos para gerar evidências
- [Fonte](./source) — âncoras de proveniência
- [Contraexemplo](./counterexample) — casos que quebram alegações
- [Nó de Questão](./issue-node) — agrupamentos de alegações em colisão

**Tipos de arestas** ):

- [Ataque](./attack) — desafios diretos à verdade
- [Refutação por Minar](./undercut) — desafios aos fundamentos
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contenção](./contention) — marcadores estruturados de conflito
