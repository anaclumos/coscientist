---
title: Contaminação de Dados de Treino
description: Conteúdo gerado por IA poluindo os corpora usados para treinar modelos futuros
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

A contaminação de dados de treino ocorre quando texto gerado por IA entra na web,
é raspado para corpora de treino e molda a próxima geração de modelos.
O resultado é um ciclo de retroalimentação: modelos treinados com as saídas de seus
predecessores herdam seus vieses, amplificam seus erros e perdem acesso ao sinal
humano independente que tornava os originais úteis.

Isso é diferente de contaminação de benchmarks (dados de teste vazando para conjuntos
de treino), embora ambos compartilhem o termo. A contaminação de dados de treino diz
respeito à proveniência do corpus subjacente: uma vez que [lixo de IA](./ai-slop) se mistura
com texto escrito por humanos em escala, distingui-los torna-se caro ou impossível.
Raspagens da web após 2022 são cada vez mais suspeitas.

As consequências se acumulam. [Colapso de modelo](./model-collapse) descreve a degradação
de qualidade quando modelos treinam com dados sintéticos: as distribuições se estreitam,
modos raros desaparecem e a saída converge para uma média homogeneizada.
[Fusão da Enciclopédia](./encyclopedia-meltdown) descreve a falha do sistema de conhecimento
quando saídas de IA são citadas como fontes, criando autoridade circular.
A contaminação de dados de treino é a causa a montante de ambos.

O paralelo com [aço de baixo fundo](./low-background-steel) esclarece o problema.
Testes nucleares contaminaram todo o aço pós-1945; a proliferação de LLMs
contaminou todo o texto da web pós-2020. Ambos os eventos de contaminação foram irreversíveis,
ambos criaram demanda por [recursos pré-contaminação](./pre-contamination-resource),
e ambos significam que avançar a tecnologia requer materiais produzidos antes de a tecnologia existir.

As soluções envolvem verificação de [proveniência](./provenance), arquivos com acesso condicionado por data
e práticas de curadoria de dados que privilegiem fontes com cadeias claras de autoria humana.
A MIT Data Provenance Initiative e esforços semelhantes buscam trazer transparência às origens dos dados de treino —
um passo necessário para que modelos futuros evitem treinar com seus próprios reflexos.
