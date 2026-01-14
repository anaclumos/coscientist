---
title: Sistem Verifikasi
description: Mekanisme untuk memeriksa klaim terhadap bukti dan bukti tandingan
---

Sistem verifikasi adalah sekumpulan mekanisme yang digunakan [Kosaintis](./coscientist) untuk memeriksa [klaim](./claim) terhadap bukti, bukti tandingan, dan penjelasan alternatif. Ini bukan satu alat tunggal, melainkan serangkaian protokol dan praktik yang terkoordinasi.

## Komponen Inti

- [Verifikasi](./verification) — proses untuk memeriksa klaim
- [Pencarian Utamakan Sanggahan](./rebuttal-first-search) — mencari bukti tandingan sebelum menerima
- [Protokol Konsensus Multi-AI](./multi-ai-consensus-protocol) — menggunakan ketidaksepakatan model sebagai sinyal
- [Persyaratan Kebulatan Suara](./unanimity-requirement) — menerima klaim hanya ketika semua peninjau sepakat
- [Garis Tanggung Jawab](./responsibility-line) — menelusuri siapa menyatakan apa
- [Contoh Tandingan](./counterexample) — kasus yang mematahkan klaim
- [Ingesti Zero-Trust](./zero-trust-ingestion) — mewajibkan provenans sebelum otoritas

Sistem ini dirancang agar [koreksi lebih murah daripada penyimpangan](./correction-vs-drift) dan untuk mendukung [kesulitan yang diinginkan](./desirable-difficulty-in-verification) sehingga [Operator](./operator) tetap terlibat.