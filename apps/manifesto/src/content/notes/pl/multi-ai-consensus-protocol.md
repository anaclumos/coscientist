---
title: Protokół Konsensusu Wielo-AI
description: System pisania i weryfikacji 1+4 (człowiek + cztery AI)
---

Protokół Konsensusu Wielo-AI to przepływ pracy oparty na współpracy, w którym [Galarch](./galarch) oraz kilka popularnych systemów AI pracują razem, aby zmniejszyć ryzyko halucynacji pojedynczego modelu i zapobiec zjawisku [Encyclopedia Meltdown](./encyclopedia-meltdown).

W wariancie „1+4” jedna osoba koordynuje cztery systemy AI (stan na grudzień 2025: ChatGPT, Gemini, Claude i Grok). Każda AI ma niezależną pamięć konwersacyjną, ale protokół traktuje różnorodność pamięci jako słaby substytut różnorodności dowodów; kluczowe jest wymuszanie jawnej niezgody i możliwości prześledzenia (traceability).

Operacyjnie, poprawki są akceptowane na poziomie jednostki twierdzenia (zdanie, akapit lub dokument) tylko wtedy, gdy osiągają jednomyślność; niepewność musi pozostać wyraźnie zaznaczona; metadane o pochodzeniu (provenance metadata) muszą dać się prześledzić; a poszukiwanie kontrargumentów (rebuttal search) jest celowe, a nie opcjonalne. Protokół ma też wymiar kulturowy: wyrabia nawyk pytania „co zmieniłoby moje zdanie?”

To nie jest dowód prawdy. Modele współdzielą dane treningowe i mogą zbiegać do skorelowanych trybów porażki, więc zgodność może odzwierciedlać wspólne uprzedzenia; koszt jednomyślności może pchać tekst w stronę asekuracji; a niezależne pamięci nie gwarantują niezależnych kanałów dowodowych. W jednym wielo-AI przeglądzie protokołu otrzymał on 2 akceptacje, 1 sprzeciw i 1 wstrzymanie. Ten wynik sugeruje, że potrzebuje wzmocnienia poprzez silniejsze procedury kontrargumentacji oraz reguły dotyczące niezależności dowodów.