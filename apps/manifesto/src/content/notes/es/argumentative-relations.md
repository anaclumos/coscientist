---
title: Relaciones argumentativas
description: "Tipos de aristas en un grafo dialéctico organizados por función"
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Las relaciones argumentativas son los tipos de aristas en un
[Grafo dialéctico](./dialectical-graph) (ver también [Componentes del grafo](./graph-components)) que codifican cómo los objetos
epistémicos se relacionan entre sí. Son lo que distingue a un grafo dialéctico
de un grafo de similitud temática.

## Relaciones de desafío

- [Ataque](./attack) — desafío directo a la verdad de una afirmación
- [Socavamiento](./undercut) — cuestionamiento del método, supuesto o definición
- [Contraejemplo](./counterexample) — un caso que invalida la afirmación
- `contradicts` — incompatibilidad explícita

## Relaciones de apoyo

- `supports` — evidencia o razonamiento que refuerza una afirmación
- `cites` — atribución explícita a una [fuente](./source)
- `replicates` / `fails_to_replicate` — estado de replicación

## Relaciones de refinamiento

- `refines` — acota o aclara una afirmación
- `generalizes` / `specializes` — ajustes de alcance
- `depends_on` — vincula afirmaciones con sus [supuestos](./assumption)
- `defines` — conecta términos con sus definiciones

Consulta [Aristas del grafo dialéctico](./dialectical-graph-edges) para la
especificación completa y
[Tipado de relaciones vs similitud](./relation-typing-vs-similarity) para
entender por qué importan las aristas tipadas.