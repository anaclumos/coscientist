---
title: Couplage méthode-conclusion
description: Patron d’analyse regroupant les affirmations par méthode plutôt que par conclusion
---

Le couplage méthode-conclusion est un patron d’analyse qui regroupe les [affirmations](./claim) selon la [méthode](./method) qui les a produites, plutôt que selon la conclusion à laquelle elles aboutissent. L’idée clé est que des conclusions différentes peuvent partager le même défaut, et que des conclusions identiques peuvent reposer sur des bases très différentes.

Si trois études utilisent la même méthodologie défaillante et aboutissent à la même conclusion, ce n’est pas une preuve solide ; c’est un échec corrélé. À l’inverse, si deux études utilisent des méthodes indépendantes et aboutissent à la même conclusion, c’est plus probant que trois études n’utilisant qu’une seule méthode.

Ce patron soutient la [séparation des voies de réplication](./replication-path-separation) : se demander si l’accord apparent provient de preuves indépendantes ou de l’usage répété de la même approche. Dans [Coscientifique](./coscientist), il est mis en œuvre sous la forme d’un agent spécialisé pour regrouper les affirmations par méthode.