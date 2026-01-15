---
title: Contaminación de los datos de entrenamiento
description: Contenido generado por IA que contamina los corpus usados para entrenar modelos futuros
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

La contaminación de los datos de entrenamiento ocurre cuando texto generado por IA entra en la web, se recopila mediante scraping en los corpus de entrenamiento y moldea a la siguiente generación de modelos. El resultado es un bucle de retroalimentación: los modelos entrenados con las salidas de sus predecesores heredan sus sesgos, amplifican sus errores y pierden acceso a la señal humana independiente que hacía útiles a los originales.

Esto es distinto de la contaminación de benchmarks , aunque ambas comparten el término. La contaminación de los datos de entrenamiento trata sobre la procedencia del corpus subyacente: una vez que la [basura de IA](./ai-slop) se mezcla con texto escrito por humanos a gran escala, distinguirlos se vuelve caro o imposible. Los scrapes de la web posteriores a 2022 son cada vez más sospechosos.

Las consecuencias se acumulan. El [colapso del modelo](./model-collapse) describe la degradación de la calidad cuando los modelos se entrenan con datos sintéticos: las distribuciones se estrechan, los modos raros desaparecen y la salida converge hacia una media homogeneizada. El [colapso de la enciclopedia](./encyclopedia-meltdown) describe el fallo del sistema de conocimiento cuando las salidas de IA se citan como fuentes, creando una autoridad circular. La contaminación de los datos de entrenamiento es la causa aguas arriba de ambas.

El paralelismo con el [acero de bajo fondo radiactivo](./low-background-steel) aclara el problema. Las pruebas nucleares contaminaron todo el acero posterior a 1945; la proliferación de los LLM contaminó todo el texto web posterior a 2020. Ambos eventos de contaminación fueron irreversibles, ambos crearon demanda de [recursos previos a la contaminación](./pre-contamination-resource), y ambos implican que, para avanzar la tecnología, se requieren materiales producidos antes de que la tecnología existiera.

Las soluciones implican verificación de la [procedencia](./provenance), archivos con acceso condicionado por marca temporal y prácticas de curación de datos que privilegien fuentes con cadenas claras de autoría humana. La MIT Data Provenance Initiative y esfuerzos similares buscan aportar transparencia al origen de los datos de entrenamiento, un paso necesario para que los modelos futuros eviten entrenarse con sus propios reflejos.
