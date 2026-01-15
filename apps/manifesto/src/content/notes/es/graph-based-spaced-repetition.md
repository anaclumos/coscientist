---
title: Repetición espaciada basada en grafos
description:
  "Uso de la antigüedad de una afirmación o de la antigüedad de la refutación
  para activar la reverificación"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

La repetición espaciada basada en grafos aplica los principios de la
[repetición espaciada](./spaced-repetition) al mantenimiento del conocimiento:
se hacen visibles las [afirmaciones](./claim) que no se han verificado
recientemente, o cuya evidencia de respaldo no se ha cuestionado en un tiempo,
para volver a examinarlas.

La idea es que el conocimiento, al igual que la memoria, se degrada sin
participación activa. Una afirmación verificada hace tres años puede dejar de
ser válida si el mundo ha cambiado, si las definiciones se han desplazado, o
si han surgido nuevos [contraejemplos](./counterexample).

En un [Grafo dialéctico](./dialectical-graph), esto puede implementarse
registrando la marca de tiempo de la última verificación para cada afirmación y
sus rutas de apoyo. Se solicita al [Operador](./operator) que vuelva a verificar
las afirmaciones según un calendario, con intervalos que se amplían para
afirmaciones robustas y se contraen para las controvertidas.
