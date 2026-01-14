---
title: Tabrakan Dokumen
description: Protokol untuk memaksa sumber-sumber yang berbeda agar saling berhadapan dengan [klaim](./claim) masing-masing
---

Tabrakan dokumen adalah protokol untuk memaksa sumber-sumber yang berbeda agar saling berhadapan dengan [klaim](./claim) masing-masing, alih-alih sekadar merangkum mereka secara paralel. Ketika dokumen bertabrakan, kontradiksi menjadi terlihat, definisi harus disejajarkan, dan [perselisihan](./contention) dimunculkan sebagai objek yang eksplisit.

Ini adalah kebalikan dari pendekatan "ringkasan berimbang", yang menghaluskan perbedaan pendapat. Tabrakan mengatakan: "Dua sumber ini mengatakan hal-hal yang tidak kompatibel. Apa tepatnya yang bertentangan? Dalam kondisi apa? Apa yang akan menyelesaikannya?"

Dalam [Kosaintis](./coscientist), tabrakan dokumen diimplementasikan melalui [Graf Dialektis](./dialectical-graph): klaim diekstrak, dinormalisasi, dan dihubungkan melalui relasi [serangan](./attack), [undercut](./undercut), dan dukungan. Hasilnya adalah peta tentang di mana sumber-sumber sepakat, di mana mereka berkonflik, dan apa yang masih terbuka.