---
title: Mecanismos de Exploração
description: Estratégias para descoberta contínua de conhecimento em um grafo dialético
sourceLocale: en
sourceHash: 755f4cc80039
translatedAt: 2026-01-14
---

Mecanismos de exploração são as estratégias que o [Cocientista](./coscientist)
usa para descobrir continuamente contradições, condições de contorno e
dependências de método no [Grafo Dialético](./dialectical-graph).

## Estratégias de Busca

- [Estratégias de Exploração](./exploration-strategies) — visão geral de
  abordagens de travessia do grafo
- [Busca Primeiro por Contraexemplos](./counterexample-first-search) —
  priorizando quebras em vez de confirmações
- [Busca Primeiro por Refutação](./rebuttal-first-search) — buscando
  contraevidências antes da aceitação

## Análise de Conflitos

- [Corte Mínimo](./minimum-cut) — isolando as arestas que produzem uma
  contradição
- [Conjunto Mínimo de Contradição](./minimum-contradiction-set) — encontrando as
  premissas centrais em conflito

## Análise de Métodos

- [Acoplamento Método-Conclusão](./method-conclusion-coupling) — agrupando
  afirmações por método para encontrar falhas compartilhadas
- [Separação de Caminhos de Replicação](./replication-path-separation) —
  distinguindo caminhos independentes de reformulações

## Rastreamento Semântico

- [Deriva de Definição](./definition-drift) — detectando mudanças de significado
- [Não Estacionariedade](./nonstationarity) — reconhecendo mudanças
  impulsionadas pelo tempo
