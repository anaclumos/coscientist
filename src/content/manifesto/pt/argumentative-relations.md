---
title: Relações Argumentativas
description: "Tipos de arestas em um grafo dialético organizados por função"
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Relações argumentativas são os tipos de arestas em um
[Grafo Dialético](./dialectical-graph) (veja também [Componentes do Grafo](./graph-components)) que codificam como objetos epistêmicos se
relacionam entre si. Elas são o que distingue um grafo dialético de um grafo de
similaridade de tópicos.

## Relações de Contestação

- [Ataque](./attack) — contestação direta da veracidade de uma afirmação
- [Refutação por subversão](./undercut) — contestação do método, pressuposto ou
  definição
- [Contraexemplo](./counterexample) — um caso que quebra a afirmação
- `contradicts` — incompatibilidade explícita

## Relações de Suporte

- `supports` — evidência ou raciocínio que fortalece uma afirmação
- `cites` — atribuição explícita a uma [fonte](./source)
- `replicates` / `fails_to_replicate` — status de replicação

## Relações de Refinamento

- `refines` — restringe ou esclarece uma afirmação
- `generalizes` / `specializes` — ajustes de escopo
- `depends_on` — vincula afirmações às suas [pressuposições](./assumption)
- `defines` — conecta termos às suas definições

Veja [Arestas do Grafo Dialético](./dialectical-graph-edges) para a
especificação completa e
[Tipagem de Relações vs Similaridade](./relation-typing-vs-similarity) para
entender por que arestas tipadas importam.
