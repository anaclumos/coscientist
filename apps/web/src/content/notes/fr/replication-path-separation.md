---
title: Séparation des chemins de réplication
description: Se demander si le soutien provient de chemins indépendants ou de
  reformulations répétées
sourceLocale: en
sourceHash: b898029feac1
translatedAt: 2026-01-14
---

La séparation des chemins de réplication est la pratique consistant à se
demander si l’accord apparent entre des sources reflète des preuves
indépendantes ou des reformulations répétées d’une même affirmation
sous-jacente. L’accord majoritaire n’est pas une preuve solide si toutes les
sources concordantes remontent à une origine unique.

C’est une défense essentielle contre la
[Fusion de l’Encyclopédie](./encyclopedia-meltdown), où du contenu généré par
l’IA peut se citer lui-même via des intermédiaires, créant l’illusion d’un
consensus par amplification circulaire. La séparation des chemins pose la
question : « Combien de chemins réellement indépendants mènent à cette
conclusion ? »

Dans un [Graphe dialectique](./dialectical-graph), la séparation des chemins est
rendue possible par une [provenance](./provenance) explicite et des arêtes
`cites`. Le système peut remonter le soutien d’une affirmation jusqu’aux
[sources](./source) d’origine et détecter quand une réplication apparente est en
réalité une répétition.
