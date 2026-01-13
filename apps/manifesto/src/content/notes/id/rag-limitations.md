---
title: Keterbatasan RAG
description: Mengapa retrieval-augmented generation standar tidak dapat menghasilkan penemuan yang benar-benar baru
---

Retrieval-augmented generation (RAG) meningkatkan faktualitas dengan mengambil dokumen yang relevan, tetapi RAG standar tetap memiliki keterbatasan struktural untuk produksi pengetahuan. Ia mengambil potongan teks dan menghasilkan prosa yang fasih; ia tidak merepresentasikan objek yang Anda perlukan untuk penemuan: klaim, kontra-klaim, definisi, metode, serta relasi yang mengikat semuanya.

Salah satu mode kegagalan adalah bias kuantitatif. Jika banyak sumber mengulang sebuah klaim dan hanya sedikit yang memuat sanggahan tegas atau kontra-contoh, retrieval berbasis kemiripan cenderung memperkuat suara mayoritas dan menghaluskan titik-titik balik. Satu kontra-contoh atau revisi definisi bisa memiliki bobot epistemik yang lebih besar daripada seratus pengulangan, tetapi itu tidak selalu "lebih mirip."

Keterbatasan lain adalah ketiadaan relasi yang eksplisit. RAG dapat mengambil kutipan dari studi A dan studi B, tetapi biasanya ia tidak dapat merepresentasikan bahwa B menyanggah A, melemahkan metodenya, atau mempersempit cakupannya; ia hanya menempatkan potongan-potongan itu berdekatan. Ini mengganti kualitas landasan dengan kuantitas teks.

Terakhir, asal-usul (provenance) rapuh ketika terjadi pemotongan (truncation). Ketika sebuah kutipan menghilangkan atribusi ("B melaporkan bahwa A mengklaim…") dan hanya mempertahankan kesimpulan ("X bekerja"), model dapat diam-diam menulis ulang garis tanggung jawab. Sitasi berubah menjadi kesan semata, dan "siapa menyatakan apa" menjadi sulit direkonstruksi.

Karena itu, RAG standar kesulitan melakukan pembaruan dan sintesis pengetahuan ketika ada [pertentangan](./contention) yang nyata. Salah satu alternatif adalah bergeser dari "seberapa mirip" menjadi "relasinya apa", seperti pada [Graf Dialektik](./dialectical-graph) yang menyimpan klaim dan jenis relasi serta memprioritaskan kontradiksi dan kontra-contoh alih-alih konsensus.