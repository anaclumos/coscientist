---
title: Ingesta de Confianza Cero
description: Protocolo que exige procedencia explícita antes de aceptar afirmaciones
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

La ingesta de confianza cero es un protocolo que trata la información entrante
como no verificada por defecto. Cada [afirmación](./claim) debe llevar
[procedencia](./provenance) explícita y pasar por [verificación](./verification)
antes de adquirir autoridad en el sistema de conocimiento.

El nombre toma prestado de la seguridad de confianza cero: no des nada por
seguro hasta que se demuestre. En la práctica, esto significa que las nuevas
afirmaciones entran con estado `tentative`, deben ser rastreables hasta
[fuentes](./source) y [tramos de evidencia](./evidence-span), y deberían
exponerse a la [búsqueda con refutación primero](./rebuttal-first-search) antes
de ser tratadas como establecidas.

La ingesta de confianza cero es una defensa contra la [bazofia de IA](./ai-slop)
y el [Colapso de la Enciclopedia](./encyclopedia-meltdown). Cuando el entorno
está inundado de contenido plausible pero no verificado, la única postura segura
es exigir prueba de origen y sobrevivir a las impugnaciones antes de la
aceptación.
