---
title: Op grafen gebaseerde gespreide herhaling
description: "Claimleeftijd of weerlegging-leeftijd gebruiken om herverificatie te activeren"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

Op grafen gebaseerde gespreide herhaling past principes van
[gespreide herhaling](./spaced-repetition) toe op kennisonderhoud:
[claims](./claim) die recent niet zijn geverifieerd, of waarvan het
ondersteunende bewijs al een tijd niet is betwist, worden naar voren gehaald
voor herbeoordeling.

Het inzicht is dat kennis, net als geheugen, wegzakt zonder actieve
betrokkenheid. Een claim die drie jaar geleden is geverifieerd, kan niet langer
kloppen als de wereld is veranderd, als definities zijn verschoven, of als
er nieuwe [tegenvoorbeelden](./counterexample) zijn opgedoken.

In een [Dialectische Graaf](./dialectical-graph) kan dit worden geïmplementeerd
door voor elke claim en de bijbehorende ondersteunende paden de tijdstempel van
de laatste verificatie bij te houden. De [Operator](./operator) krijgt een
seintje om claims volgens een schema opnieuw te verifiëren, met intervallen die
langer worden voor robuuste claims en korter voor betwiste.