---
title: Protokół Konsensusu Multi-AI
description: System pisania i weryfikacji 1+4 (człowiek + cztery AI)
sourceLocale: en
sourceHash: b49299d152fa
translatedAt: 2026-01-14
---

Protokół Konsensusu Multi-AI to przepływ pracy współpracy, w którym
[Operator](./operator) koordynuje wiele systemów AI, aby zmniejszyć ryzyko
halucynacji pojedynczego modelu i pomóc bronić się przed
[Załamanie Encyklopedii](./encyclopedia-meltdown).

W wariancie „1+4" jeden człowiek koordynuje czterech asystentów AI (stan na
grudzień 2025: ChatGPT, Gemini, Claude i Grok). Chodzi nie o „więcej pamięci",
lecz o ustrukturyzowaną niezgodę i możliwość prześledzenia .

## Zasady operacyjne

- Akceptuj poprawki dopiero wtedy, gdy osiągną jednomyślność (zob.
  [Wymóg jednomyślności](./unanimity-requirement)).
- Utrzymuj niepewność wprost; nie wygładzaj jej w prozie.
- Wymagaj możliwego do prześledzenia pochodzenia dla twierdzeń (zob.
  [Linia odpowiedzialności](./responsibility-line) oraz
  [Pochodzenie](./provenance)).
- Stosuj celowe wyszukiwanie obaleń zamiast wyszukiwania potwierdzeń (zob.
  [Wyszukiwanie najpierw obaleń](./rebuttal-first-search)).

Protokół ma też wymiar kulturowy: kształci nawyk zadawania pytania „co mogłoby
zmienić moje zdanie?".

## Ograniczenia

Jednomyślność nie jest dowodem prawdy. Modele współdzielą dane treningowe i mogą
zbiegać się ku skorelowanym trybom porażki, więc zgoda może odzwierciedlać
wspólne uprzedzenie, a nie niezależną [weryfikację](./verification) (zob.
[Niezależność dowodów](./evidence-independence)). Jednomyślność może też pchać
tekst w stronę asekuracji lub tez o najniższym wspólnym mianowniku.

W jednym wielo-AI przeglądzie protokołu otrzymał on 2 zatwierdzenia, 1 sprzeciw
i 1 wstrzymanie, co sugeruje, że potrzebuje silniejszych procedur obaleń oraz
zasad dotyczących niezależności dowodów.
