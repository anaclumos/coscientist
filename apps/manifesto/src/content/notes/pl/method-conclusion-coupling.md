---
title: Sprzężenie metody z konkluzją
description: Wzorzec analizy grupujący twierdzenia według metody, a nie konkluzji
---

Sprzężenie metody z konkluzją to wzorzec analizy, który grupuje [twierdzenia](./claim) według [metody](./method), która je wytworzyła, zamiast według konkluzji, do której prowadzą. Kluczowa obserwacja jest taka, że różne konkluzje mogą dzielić tę samą wadę, a identyczne konkluzje mogą opierać się na bardzo różnych podstawach.

Jeśli trzy badania używają tej samej wadliwej metodologii i dochodzą do tej samej konkluzji, nie jest to mocny dowód; to skorelowana porażka. Z kolei jeśli dwa badania stosują niezależne metody i dochodzą do tej samej konkluzji, jest to silniejsze niż trzy badania korzystające z jednej metody.

Ten wzorzec wspiera [separację ścieżek replikacji](./replication-path-separation): pytanie o to, czy pozorna zgodność wynika z niezależnych dowodów, czy z wielokrotnego użycia tego samego podejścia. W [Współnaukowiec](./coscientist) jest zaimplementowany jako wyspecjalizowany agent do grupowania twierdzeń według metody.