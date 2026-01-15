---
title: Kontaminasi Data Pelatihan
description: Konten yang dihasilkan AI mencemari korpus yang digunakan untuk melatih model masa depan
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Kontaminasi data pelatihan terjadi ketika teks yang dihasilkan AI masuk ke web,
terserap ke dalam korpus pelatihan, dan membentuk generasi model berikutnya.
Hasilnya adalah sebuah loop umpan balik: model yang dilatih dari keluaran pendahulunya
mewarisi bias, memperbesar kesalahan, dan kehilangan akses ke sinyal manusia independen
yang membuat model awal berguna.

Ini berbeda dari kontaminasi tolok ukur (data uji bocor ke dalam set
pelatihan), meski keduanya sama-sama memakai istilah “kontaminasi”. Kontaminasi data
pelatihan menyangkut asal-usul korpus yang mendasarinya: begitu [sampah AI](./ai-slop)
bercampur dengan teks buatan manusia dalam skala besar, membedakannya menjadi mahal atau mustahil.
Hasil scrape web setelah 2022 makin layak dicurigai.

Dampaknya bersifat kumulatif. [Keruntuhan model](./model-collapse) menggambarkan
penurunan kualitas ketika model dilatih pada data sintetis: distribusi menyempit,
mode langka menghilang, dan keluaran mengonvergensi menuju rata-rata yang terhomogenisasi.
[Meltdown Ensiklopedia](./encyclopedia-meltdown) menggambarkan kegagalan sistem pengetahuan
ketika keluaran AI dikutip sebagai sumber, sehingga menciptakan otoritas yang melingkar.
Kontaminasi data pelatihan adalah penyebab hulu dari keduanya.

Analogi dengan [baja latar-belakang rendah](./low-background-steel) memperjelas
masalahnya. Uji coba nuklir mengontaminasi semua baja pasca-1945; proliferasi LLM
mengontaminasi semua teks web pasca-2020. Kedua peristiwa kontaminasi itu tidak dapat dibalik,
keduanya menciptakan permintaan akan [sumber daya pra-kontaminasi](./pre-contamination-resource),
dan keduanya berarti bahwa memajukan teknologi membutuhkan material yang diproduksi sebelum
teknologi itu ada.

Solusi melibatkan verifikasi [asal-usul](./provenance), arsip yang dibatasi oleh cap waktu,
serta praktik kurasi data yang mengutamakan sumber dengan rantai kepengarangan manusia yang jelas.
MIT Data Provenance Initiative dan upaya serupa bertujuan menghadirkan transparansi terhadap asal
data pelatihan—sebuah langkah yang diperlukan agar model masa depan dapat menghindari pelatihan
pada pantulan dirinya sendiri.
