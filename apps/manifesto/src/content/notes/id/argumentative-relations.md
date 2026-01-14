---
title: Relasi Argumentatif
description: Jenis-jenis edge dalam Graf Dialektis yang diorganisasi berdasarkan fungsi
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

Relasi argumentatif adalah jenis-jenis edge dalam
[Graf Dialektis](./dialectical-graph) yang mengodekan bagaimana objek-objek
epistemik saling berhubungan. Inilah yang membedakan graf dialektis dari graf
kemiripan-topik.

## Relasi Tantangan

- [Serangan](./attack) — tantangan langsung terhadap kebenaran suatu klaim
- [Undercut](./undercut) — tantangan terhadap metode, asumsi, atau definisi
- [Kontracontoh](./counterexample) — kasus yang membantah klaim
- `contradicts` — ketidakcocokan yang eksplisit

## Relasi Dukungan

- `supports` — bukti atau penalaran yang memperkuat klaim
- `cites` — atribusi eksplisit kepada sebuah [sumber](./source)
- `replicates` / `fails_to_replicate` — status replikasi

## Relasi Penyempurnaan

- `refines` — mempersempit atau memperjelas klaim
- `generalizes` / `specializes` — penyesuaian cakupan
- `depends_on` — menghubungkan klaim dengan [asumsi](./assumption) yang
  mendasarinya
- `defines` — menghubungkan istilah dengan definisinya )

Lihat [Edge Graf Dialektis](./dialectical-graph-edges) untuk spesifikasi lengkap
dan [Pengetikan Relasi vs Kemiripan](./relation-typing-vs-similarity) untuk
alasan mengapa edge bertipe itu penting.
