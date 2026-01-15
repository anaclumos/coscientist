---
title: Repetição espaçada baseada em grafos
description: "Usar a idade da afirmação ou a idade da refutação para acionar a revalidação"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

A repetição espaçada baseada em grafos aplica os princípios de
[repetição espaçada](./spaced-repetition) à manutenção do conhecimento:
[afirmações](./claim) que não foram verificadas recentemente, ou cuja evidência
de suporte não foi contestada há algum tempo, são destacadas para reexame.

A percepção central é que o conhecimento, assim como a memória, se deteriora sem
envolvimento ativo. Uma afirmação verificada há três anos pode já não se
sustentar se o mundo mudou ([não estacionariedade](./nonstationarity)), se as
definições se alteraram ([deriva de definição](./definition-drift)), ou se
surgiram novos [contraexemplos](./counterexample).

Em um [Grafo Dialético](./dialectical-graph), isso pode ser implementado
acompanhando o carimbo de tempo da última verificação de cada afirmação e de
seus caminhos de suporte. O [Operador](./operator) é solicitado a revalidar
afirmações em um cronograma, com intervalos se expandindo para afirmações
robustas e se contraindo para as contestadas.
