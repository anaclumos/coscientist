---
title: Verkenningsstrategieën
description: Strategieën voor grafdoorloop voor continue kennisontdekking
---

[Coscientist](./coscientist) heeft een engine nodig die meer doet dan ophalen; hij zoekt voortdurend naar nieuwe benaderingen door actief tegenstrijdigheden, randvoorwaarden en methode-afhankelijkheid naar boven te halen in de [Dialectische Graaf](./dialectical-graph).

Eén strategie is *counterexample-first* zoeken: populariteit wordt minder gezien als bewijs van kwaliteit en meer als bewijs van risico. Hoe breder een bewering wordt herhaald, hoe waardevoller het wordt om tegenvoorbeelden en randvoorwaarden te verzamelen, omdat besmetting door populaire claims een grotere impactradius heeft in [Encyclopedia Meltdown](./encyclopedia-meltdown).

Een andere strategie is *contradiction minimum-cut* zoeken. Wanneer claimclusters met elkaar botsen, zoekt het systeem naar de minimale set premissen en relaties die het conflict voortbrengen, en richt het vervolgens de aandacht op die structuur voor contemplatie. Menselijke tijd wordt geïnvesteerd in de [minimum contradiction set](./minimum-contradiction-set), terwijl AI brede zoekacties, kandidaatgeneratie en [minimum-cut](./minimum-cut)-berekening afhandelt.

Detectie van definitieverschuiving behandelt betekenis als een bewegend object. Wanneer de definitie van een term verschuift door de tijd heen of tussen gemeenschappen, registreert de graaf de verandering expliciet (zie [definition drift](./definition-drift)) in plaats van een gedeeld concept te veronderstellen, wat een veelvoorkomende faalmodus van [RAG](./rag-limitations) tegengaat.

Verificatie van methode–conclusie-koppeling groepeert claims op methode in plaats van op conclusie, omdat verschillende conclusies dezelfde tekortkoming kunnen delen en identieke conclusies op zeer verschillende gronden kunnen rusten. Scheiding van replicatiepaden vermijdt op vergelijkbare wijze “meerderheidsstemmen” door te vragen of steun uit onafhankelijke paden komt in plaats van uit herhaalde herformuleringen.

Deze gedragingen worden geïmplementeerd als gespecialiseerde agents, waaronder claimnormalisatie, extractie van verborgen aannames, detectie van definitieconflicten, zoeken naar tegenvoorbeelden, minimalisatie van argumentatieve paden, reconstructie van reikwijdte, generatie van alternatieve hypothesen en ontwerp van verificatiestrategieën. Deze decompositie maakt contemplatiewerk expliciet en controleerbaar.