---
title: Protokol Konsensus Multi-AI
description: Sistem penulisan dan verifikasi 1+4 (manusia + empat AI)
---

Protokol Konsensus Multi-AI adalah alur kerja kolaborasi di mana [Operator](./operator) mengoordinasikan beberapa sistem AI untuk mengurangi risiko halusinasi dari satu model dan membantu bertahan melawan [Kehancuran Ensiklopedia](./encyclopedia-meltdown).

Dalam varian "1+4", satu manusia mengoordinasikan empat asisten AI (per Desember 2025: ChatGPT, Gemini, Claude, dan Grok). Intinya bukan "lebih banyak memori"; melainkan ketidaksepakatan yang terstruktur dan keterlacakan.

## Aturan Operasional

- Terima revisi hanya ketika mencapai kebulatan suara (lihat [Persyaratan Kebulatan Suara](./unanimity-requirement)).
- Pertahankan ketidakpastian secara eksplisit; jangan menghaluskannya dalam prosa.
- Wajibkan asal-usul (provenance) yang dapat ditelusuri untuk klaim (lihat [Garis Tanggung Jawab](./responsibility-line) dan [Provenance](./provenance)).
- Jalankan pencarian bantahan (rebuttal) yang disengaja alih-alih pencarian konfirmatori (lihat [Pencarian Utamakan Bantahan](./rebuttal-first-search)).

Protokol ini juga bersifat kultural: ia melatih kebiasaan untuk bertanya "apa yang akan mengubah pikiran saya?"

## Keterbatasan

Kebulatan suara bukanlah bukti kebenaran. Model-model berbagi data pelatihan dan dapat berkonvergensi pada mode kegagalan yang berkorelasi, sehingga kesepakatan dapat mencerminkan bias bersama alih-alih [verifikasi](./verification) yang independen (lihat [Kemandirian Bukti](./evidence-independence)). Kebulatan suara juga dapat mendorong penulisan menjadi terlalu berhati-hati (hedging) atau klaim yang paling aman dan paling umum.

Dalam satu tinjauan multi-AI terhadap protokol ini, protokol tersebut menerima 2 persetujuan, 1 keberatan, dan 1 penangguhan, yang menunjukkan bahwa ia membutuhkan prosedur bantahan yang lebih kuat dan aturan untuk kemandirian bukti.
