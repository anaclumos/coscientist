---
title: Estrategias de exploración
description: Estrategias de recorrido de grafos para el descubrimiento continuo de conocimiento
---

[Coscientist](./coscientist) necesita un motor que haga más que recuperar; busca continuamente nuevos enfoques al sacar activamente a la superficie contradicciones, condiciones de frontera y dependencia del método en el [Grafo dialéctico](./dialectical-graph).

Una estrategia es la búsqueda con contraejemplos primero: la popularidad se trata menos como evidencia de calidad y más como evidencia de riesgo. Cuanto más ampliamente se repite una afirmación, más valioso se vuelve recopilar contraejemplos y condiciones de frontera, porque la contaminación de afirmaciones populares tiene un mayor radio de explosión en el [Colapso de la enciclopedia](./encyclopedia-meltdown).

Otra estrategia es la búsqueda de corte mínimo de contradicción. Cuando los clústeres de afirmaciones entran en conflicto, el sistema busca el conjunto mínimo de premisas y relaciones que generan el conflicto, y luego dirige esa estructura a la contemplación. El tiempo humano se invierte en el [conjunto mínimo de contradicción](./minimum-contradiction-set), mientras que la IA se encarga de la búsqueda amplia, la generación de candidatos y el cálculo de [corte mínimo](./minimum-cut).

La detección de deriva de definición trata el significado como un objeto en movimiento. Cuando la definición de un término cambia a lo largo del tiempo o entre comunidades, el grafo registra el cambio explícitamente (véase [deriva de definición](./definition-drift)) en lugar de asumir un concepto compartido, lo que contrarresta un modo de fallo común de [RAG](./rag-limitations).

La verificación del acoplamiento método–conclusión agrupa las afirmaciones por método en lugar de por conclusión, porque conclusiones diferentes pueden compartir el mismo fallo y conclusiones idénticas pueden apoyarse en fundamentos muy distintos. La separación de rutas de replicación evita de manera similar el «voto de la mayoría» al preguntar si el respaldo proviene de rutas independientes en lugar de reiteraciones repetidas.

Estos comportamientos se implementan como agentes especializados, incluidos la normalización de afirmaciones, la extracción de supuestos ocultos, la detección de conflictos de definición, la búsqueda de contraejemplos, la minimización de rutas argumentativas, la reconstrucción del alcance, la generación de hipótesis alternativas y el diseño de estrategias de verificación. Esta descomposición hace que el trabajo de contemplación sea explícito y comprobable.