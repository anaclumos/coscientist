---
title: Keterbatasan RAG
description: Mengapa retrieval-augmented generation standar tidak dapat menghasilkan penemuan yang autentik
---

[RAG](./rag)  meningkatkan ketepatan faktual dengan mengambil dokumen yang relevan, tetapi RAG standar masih memiliki keterbatasan struktural untuk produksi pengetahuan. Ia mengambil potongan teks dan menghasilkan prosa yang fasih; ia tidak merepresentasikan objek-objek yang Anda butuhkan untuk penemuan: klaim, sanggahan , definisi, metode, dan relasi yang mengikat semuanya.

Salah satu mode kegagalannya adalah bias kuantitatif. Jika banyak sumber mengulang sebuah klaim dan hanya sedikit yang memuat sanggahan menentukan atau contoh tandingan, retrieval berbasis kemiripan cenderung memperkuat suara mayoritas dan menghaluskan titik-titik balik. Satu contoh tandingan atau revisi definisi dapat membawa bobot epistemik yang lebih besar daripada seratus pengulangan, tetapi tidak serta-merta "lebih mirip."

Keterbatasan lain adalah ketiadaan relasi yang eksplisit. RAG dapat mengambil kutipan dari studi A dan studi B, tetapi biasanya tidak dapat merepresentasikan bahwa B menyangkal A, melemahkan metodenya, atau mempersempit cakupannya; ia hanya menempatkan potongan-potongan berdekatan satu sama lain. Itu mengganti kualitas landasan dengan kuantitas teks.

Terakhir, provenans  menjadi rapuh ketika terjadi pemotongan . Ketika sebuah kutipan menghilangkan atribusi ("B melaporkan bahwa A mengklaim…") dan hanya mempertahankan kesimpulannya , model dapat diam-diam menulis ulang garis tanggung jawabnya. Sitasi berubah menjadi sekadar kesan, dan "siapa menyatakan apa" menjadi sulit direkonstruksi.

Karena itu, RAG standar kesulitan melakukan pembaruan pengetahuan dan sintesis ketika ada [kontestasi](./contention) yang nyata. Alternatifnya adalah menggeser fokus dari "seberapa mirip ini" menjadi "relasinya apa," seperti pada [Graf Dialektis](./dialectical-graph) yang menyimpan klaim dan tipe relasi serta memprioritaskan kontradiksi dan contoh tandingan alih-alih konsensus.
