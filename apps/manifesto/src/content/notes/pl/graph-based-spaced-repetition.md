---
title: Powtórki rozłożone w czasie oparte na grafach
description: "Wykorzystywanie wieku twierdzenia lub wieku kontrargumentu do uruchamiania ponownej weryfikacji"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

Powtórki rozłożone w czasie oparte na grafach stosują zasady
[powtórek rozłożonych w czasie](./spaced-repetition) do utrzymania wiedzy:
[twierdzenia](./claim), które nie były ostatnio weryfikowane, lub których
wspierające dowody nie były od dawna kwestionowane, są wyłaniane do ponownego
sprawdzenia.

Sedno polega na tym, że wiedza, podobnie jak pamięć, zanika bez aktywnego
zaangażowania. Twierdzenie zweryfikowane trzy lata temu może już nie być
prawdziwe, jeśli świat się zmienił ([niestacjonarność](./nonstationarity)),
jeśli przesunęły się definicje, albo jeśli pojawiły się nowe
[kontrprzykłady](./counterexample).

W [Grafie dialektycznym](./dialectical-graph) można to zaimplementować, śledząc
znacznik czasu ostatniej weryfikacji dla każdego twierdzenia i jego ścieżek
wspierających. [Operator](./operator) otrzymuje monit o ponowną weryfikację
twierdzeń zgodnie z harmonogramem, przy czym odstępy wydłużają się dla twierdzeń
solidnych i skracają dla tych kwestionowanych.