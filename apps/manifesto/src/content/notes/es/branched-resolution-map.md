---
title: Mapa de resolución ramificada
description:
  Estructura que muestra múltiples conclusiones válidas basadas en diferentes
  definiciones o métodos
sourceLocale: en
sourceHash: c387f6c101ba
translatedAt: 2026-01-14
---

Un mapa de resolución ramificada es una estructura que presenta múltiples
conclusiones válidas como ramas a partir de distintos puntos de partida:
definiciones, métodos o supuestos. En lugar de forzar una única respuesta,
muestra: «si defines X de esta manera, entonces A; si defines X de aquella
manera, entonces B».

Este es el formato de salida para la
[síntesis de conocimiento](./knowledge-synthesis) cuando la incompatibilidad no
puede resolverse en una sola verdad. El mapa hace explícito que el desacuerdo no
trata sobre hechos, sino sobre premisas, y los lectores pueden ver exactamente
dónde divergen las conclusiones.

Los mapas ramificados contrarrestan la presión de promediar. En el [RAG](./rag)
estándar, las fuentes en conflicto se mezclan en un resumen pulido que oculta el
desacuerdo. Un mapa ramificado conserva la estructura del conflicto y permite
que el [Operador](./operator) decida qué rama se aplica a su contexto.
