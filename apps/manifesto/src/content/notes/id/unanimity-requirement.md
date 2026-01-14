---
title: Persyaratan Bulat
description: Aturan bahwa klaim diterima hanya ketika semua peninjau setuju
sourceLocale: en
sourceHash: e611b05f0d4c
translatedAt: 2026-01-14
---

Persyaratan bulat adalah aturan dalam
[Protokol Konsensus Multi-AI](./multi-ai-consensus-protocol) bahwa
[klaim](./claim) diterima hanya ketika semua sistem AI yang berpartisipasi
setuju. Ketidaksepakatan antar model diperlakukan sebagai sinyal untuk
pemeriksaan yang lebih cermat, bukan sebagai noise yang perlu dirata-ratakan.

Kesepakatan bulat bukanlah bukti kebenaran; model-model berbagi data pelatihan
dan dapat berkonvergensi pada kegagalan yang berkorelasi. Namun,
ketidaksepakatan adalah sinyal berbiaya rendah bahwa ada sesuatu yang mungkin
salah. Persyaratan bulat memaksa penanganan ketidakpastian secara eksplisit
alih-alih membiarkan mayoritas mengesampingkan pendapat yang berbeda.

Konsekuensinya adalah bahwa kesepakatan bulat dapat mendorong penulisan ke arah
kehati-hatian berlebihan dan kesimpulan "penyebut bersama terendah" . Protokol
ini mengimbanginya dengan mensyaratkan agar ketidakpastian tetap eksplisit,
bukannya dihaluskan menjadi bahasa yang samar.
