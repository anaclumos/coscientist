---
title: Strategi Eksplorasi
description: Strategi penelusuran graf untuk penemuan pengetahuan berkelanjutan
sourceLocale: en
sourceHash: e9c34bc73e32
translatedAt: 2026-01-14
---

[Kosaintis](./coscientist) membutuhkan lebih dari sekadar retrieval: ia
membutuhkan eksplorasi yang secara aktif memunculkan kontradiksi, kondisi batas,
dan ketergantungan pada metode dalam [Graf Dialektik](./dialectical-graph).

Strategi kunci meliputi:

- [Pencarian Utamakan Kontra-contoh](./counterexample-first-search) — perlakukan
  popularitas sebagai sinyal risiko; prioritaskan kontra-contoh dan kondisi
  batas
- [Minimum Cut](./minimum-cut) — isolasi struktur minimal yang menghasilkan
  kontradiksi, lalu fokuskan perhatian pada
  [himpunan kontradiksi minimum](./minimum-contradiction-set)
- [Pergeseran Definisi](./definition-drift) — deteksi pergeseran makna alih-alih
  mengasumsikan konsep yang sama
- [Kopling Metode-Kesimpulan](./method-conclusion-coupling) — klasterkan klaim
  berdasarkan metode untuk menemukan cacat yang sama
- [Pemisahan Jalur Replikasi](./replication-path-separation) — bedakan bukti
  independen dari pengulangan pernyataan yang sama

Dalam implementasi, ini muncul sebagai agen-agen khusus untuk normalisasi,
ekstraksi asumsi, pencarian kontra-contoh, rekonstruksi cakupan, dan perancangan
strategi verifikasi.
