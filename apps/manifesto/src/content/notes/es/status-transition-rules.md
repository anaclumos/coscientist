---
title: Reglas de transición de estado
description: Qué desencadena el movimiento entre estados de una afirmación en un grafo dialéctico
---

Las reglas de transición de estado definen qué hace que una [afirmación](./claim) pase de un estado a otro en la [taxonomía de estado de afirmaciones](./claim-status-taxonomy). Las transiciones dependen del tipo de desafío, no de la cantidad: un solo [contraejemplo](./counterexample) decisivo importa más que muchas objeciones poco convincentes.

Las transiciones clave incluyen: tentativo → impugnado (cuando se registra un [ataque](./attack)), impugnado → respaldado condicionalmente (cuando el ataque se responde acotando el [alcance](./scope) o aclarando [supuestos](./assumption)), respaldado condicionalmente → robusto (cuando múltiples vías independientes confirman), robusto → refutado (cuando un contraejemplo supera el escrutinio) y cualquier estado → obsoleto (cuando la [deriva definicional](./definition-drift) corta el significado de la afirmación).

Estas reglas forman parte de la [capa de protocolo epistémico](./epistemic-protocol-layer) en [Cocientífico](./coscientist). Hacen que la actualización del conocimiento sea explícita y auditable, en lugar de quedar implícita en la prosa.