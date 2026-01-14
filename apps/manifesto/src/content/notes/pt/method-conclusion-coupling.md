---
title: Acoplamento Método-Conclusão
description: Padrão de análise que agrupa alegações pelo método em vez da conclusão
---

O acoplamento método-conclusão é um padrão de análise que agrupa [alegações](./claim) pelo [método](./method) que as produziu, em vez de pela conclusão a que chegam. O insight é que conclusões diferentes podem compartilhar a mesma falha, e conclusões idênticas podem se apoiar em fundamentos muito diferentes.

Se três estudos usam a mesma metodologia falha e chegam à mesma conclusão, isso não é uma evidência forte; é uma falha correlacionada. Por outro lado, se dois estudos usam métodos independentes e chegam à mesma conclusão, isso é mais forte do que três estudos usando um único método.

Esse padrão sustenta a [separação de caminhos de replicação](./replication-path-separation): perguntar se o aparente acordo vem de evidências independentes ou do uso repetido da mesma abordagem. No [Cocientista](./coscientist), ele é implementado como um agente especializado para agrupar alegações por método.