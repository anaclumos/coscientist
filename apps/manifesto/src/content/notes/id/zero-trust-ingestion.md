---
title: Ingesti Tanpa Kepercayaan 
description: Protokol yang mengharuskan asal-usul  eksplisit sebelum menerima klaim
---

Ingesti tanpa kepercayaan  adalah protokol yang memperlakukan informasi yang masuk sebagai belum terverifikasi secara default. Setiap [klaim](./claim) harus membawa [asal-usul ](./provenance) yang eksplisit dan melewati [verifikasi](./verification) sebelum memperoleh otoritas dalam sistem pengetahuan.

Namanya meminjam dari keamanan zero-trust: jangan menganggap apa pun aman sampai terbukti. Dalam praktiknya, ini berarti klaim baru masuk dengan status `tentative`, harus dapat dilacak ke [sumber](./source) dan [rentang bukti ](./evidence-span), serta sebaiknya dipaparkan pada [pencarian yang mengutamakan bantahan ](./rebuttal-first-search) sebelum diperlakukan sebagai mapan.

Ingesti tanpa kepercayaan  adalah pertahanan terhadap [sampah AI](./ai-slop) dan [Kehancuran Ensiklopedia](./encyclopedia-meltdown). Ketika lingkungan dibanjiri konten yang tampak meyakinkan tetapi belum terverifikasi, satu-satunya sikap yang aman adalah mewajibkan bukti asal-usul dan mampu bertahan dari sanggahan sebelum diterima.
