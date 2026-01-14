---
title: Alucinación
description: Resultados de IA que son plausibles pero incorrectos en los hechos o inventados
---

Una alucinación es una salida de IA que se lee como segura y coherente, pero contiene errores fácticos, información fabricada o referencias inventadas. El peligro no es la aleatoriedad: es la plausibilidad. El texto alucinado a menudo supera un escrutinio casual porque sigue los patrones estadísticos de la prosa veraz.

La alucinación es un síntoma de cómo funcionan los [LLMs](./llm): predicen los siguientes tokens probables, no los verdaderos. Cuando los datos de entrenamiento son escasos o contradictorios sobre un tema, el modelo interpola, y el resultado puede estar suavemente equivocado. Por eso la [trampa de la fluidez](./fluency-trap) es tan peligrosa: la fluidez no implica exactitud.

En [Cocientífico](./coscientist), el riesgo de alucinación se gestiona mediante la [capa de protocolo epistémico](./epistemic-protocol-layer): la [trazabilidad](./traceability) exige que las afirmaciones se conecten con [fragmentos de evidencia](./evidence-span), la [búsqueda con refutación primero](./rebuttal-first-search) somete a pruebas de estrés antes de la aceptación, y el [Protocolo de Consenso Multi-IA](./multi-ai-consensus-protocol) utiliza el desacuerdo entre modelos como señal para una inspección más cercana.