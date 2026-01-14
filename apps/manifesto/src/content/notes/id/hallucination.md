---
title: Halusinasi
description: Output AI yang terlihat masuk akal tetapi secara faktual salah atau direkayasa
sourceLocale: en
sourceHash: 35a042b51f6a
translatedAt: 2026-01-14
---

Halusinasi adalah output AI yang terbaca percaya diri dan koheren tetapi
mengandung kesalahan faktual, informasi yang direkayasa, atau rujukan yang
diada-adakan. Bahayanya bukanlah keacakan: melainkan kemasukakalan. Teks yang
berhalusinasi sering lolos dari pemeriksaan sekilas karena mengikuti pola
statistik prosa yang benar.

Halusinasi adalah gejala dari cara kerja [Model Bahasa Besar](./llm): mereka
memprediksi token berikutnya yang paling mungkin, bukan yang benar. Ketika data
pelatihan jarang atau saling bertentangan pada suatu topik, model melakukan
interpolasi, dan hasilnya bisa tampak mulus namun keliru. Inilah mengapa
[jebakan kefasihan](./fluency-trap) begitu berbahaya: kefasihan tidak
menyiratkan akurasi.

Dalam [Kosaintis](./coscientist), risiko halusinasi dikelola melalui
[lapisan protokol epistemik](./epistemic-protocol-layer):
[ketertelusuran](./traceability) mengharuskan klaim terhubung ke
[rentang bukti](./evidence-span),
[pencarian yang mengutamakan bantahan](./rebuttal-first-search) melakukan uji
tekan sebelum penerimaan, dan
[Protokol Konsensus Multi-AI](./multi-ai-consensus-protocol) menggunakan
ketidakselarasan antar model sebagai sinyal untuk pemeriksaan lebih saksama.
