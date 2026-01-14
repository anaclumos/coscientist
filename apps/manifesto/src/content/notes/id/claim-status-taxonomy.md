---
title: Taksonomi Status Klaim
description: Keadaan yang dapat ditempati sebuah klaim di dalam sebuah graf dialektik
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

Taksonomi status klaim mendefinisikan keadaan yang dapat ditempati sebuah
[klaim](./claim) dalam sebuah [Graf Dialektik](./dialectical-graph).

## Keadaan Umum

- `tentative` — tahap hipotesis
- `contested` — perdebatan aktif
- `conditionally supported` — benar di bawah kondisi yang ditentukan
- `robust` — didukung melalui banyak jalur independen
- `refuted` — runtuh oleh sebuah [contoh tandingan](./counterexample)
- `obsolete` — makna hilang karena [pergeseran definisi](./definition-drift)
  atau pergeseran metode

Status bukanlah satu skor kepercayaan tunggal. Sebuah klaim dapat robust dalam
keragaman bukti tetapi contested dalam cakupan; dapat conditionally supported
dalam satu konteks dan refuted dalam konteks lain. Status multidimensi menangkap
kompleksitas ini.

Transisi antar keadaan didorong oleh jenis sanggahan, bukan kuantitasnya. Satu
[contoh tandingan](./counterexample) yang didukung bukti kuat dapat memindahkan
klaim dari robust menjadi refuted; banyak keberatan lemah dapat membuatnya tetap
contested tanpa menghasilkan penyelesaian.
