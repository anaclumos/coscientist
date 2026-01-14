---
title: Nodos del Grafo Dialéctico
description: Los tipos de nodos en un grafo de conocimiento dialéctico
sourceLocale: en
sourceHash: b451261d8474
translatedAt: 2026-01-14
---

En un [Grafo Dialéctico](./dialectical-graph), los nodos representan objetos
epistémicos en lugar de texto en bruto. Los tipos de nodos comunes incluyen:

- [Afirmación](./claim) — proposiciones verificables
- [Alcance](./scope) — condiciones de aplicabilidad
- [Suposición](./assumption) — premisas implícitas
- Definiciones — significados de términos (seguidos a lo largo del tiempo
  mediante [Deriva de Definición](./definition-drift))
- [Método](./method) — procedimientos que generan evidencia o conclusiones
- Datos — mediciones o resultados
- [Tramo de Evidencia](./evidence-span) — rangos citados textualmente con
  precisión
- [Fuente](./source) — anclajes de procedencia
- [Contraejemplo](./counterexample) — casos que refutan o acotan afirmaciones
- [Nodo de Cuestión](./issue-node) — paquetes de conglomerados de afirmaciones
  en colisión

Esta descomposición evita una confusión común: un documento no es una sola cosa.
El mismo artículo puede introducir una definición, sostener una afirmación,
citar evidencia y refutar un resultado previo; cada una de esas partes debería
seguir siendo abordable si quieres que el conocimiento se actualice en lugar de
simplemente acumularse.

El estado de una afirmación es multidimensional en lugar de un único puntaje de
confianza (véase
[Taxonomía del Estado de la Afirmación](./claim-status-taxonomy)). Las
transiciones están impulsadas menos por la cantidad de refutaciones y más por el
tipo de refutación y por si tiene éxito al nivel del alcance, la suposición, la
definición o el método.
