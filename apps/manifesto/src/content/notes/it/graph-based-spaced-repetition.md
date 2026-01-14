---
title: Ripetizione dilazionata basata su grafi
description: "Usare l’età della tesi o l’età della confutazione per attivare una nuova
  verifica"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

La ripetizione dilazionata basata su grafi applica i principi della
[ripetizione dilazionata](./spaced-repetition) alla manutenzione della
conoscenza: le [tesi](./claim) che non sono state verificate di recente, o le
cui evidenze di supporto non sono state messe in discussione da un po’, vengono
riportate in evidenza per un nuovo esame.

L’intuizione è che la conoscenza, come la memoria, si deteriora senza un
coinvolgimento attivo. Una tesi verificata tre anni fa potrebbe non essere più
valida se il mondo è cambiato ([non stazionarietà](./nonstationarity)), se le
definizioni si sono spostate, o se sono emersi nuovi
[controesempi](./counterexample).

In un [Grafo dialettico](./dialectical-graph), questo può essere implementato
tracciando l’ultimo timestamp di verifica per ogni tesi e per i suoi percorsi di
supporto. L’[Operatore](./operator) viene sollecitato a ri-verificare le tesi
secondo una pianificazione, con intervalli che si espandono per le tesi robuste
e si contraggono per quelle contestate.