---
title: Methode-conclusie-koppeling
description: Analysepatroon dat beweringen groepeert op methode in plaats van op conclusie
---

Methode-conclusie-koppeling is een analysepatroon dat [beweringen](./claim) clustert op basis van de [methode](./method) die ze heeft voortgebracht, in plaats van op de conclusie die ze trekken. Het inzicht is dat verschillende conclusies dezelfde fout kunnen delen, en dat identieke conclusies op heel verschillende gronden kunnen berusten.

Als drie studies dezelfde gebrekkige methodologie gebruiken en tot dezelfde conclusie komen, is dat geen sterk bewijs; het is gecorreleerd falen. Omgekeerd: als twee studies onafhankelijke methoden gebruiken en tot dezelfde conclusie komen, is dat sterker dan drie studies die één methode gebruiken.

Dit patroon ondersteunt [scheiding van replicatiepaden](./replication-path-separation): de vraag of schijnbare overeenstemming voortkomt uit onafhankelijk bewijs of uit herhaald gebruik van dezelfde aanpak. In [Cowetenschapper](./coscientist) is het geïmplementeerd als een gespecialiseerde agent voor het clusteren van beweringen op methode.