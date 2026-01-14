---
title: İlişki Tipleri vs Benzerlik
description: "Tipli kenarların, benzerlik tabanlı getirmenin çözemediği sorunları neden çözdüğü"
sourceLocale: en
sourceHash: ae787ed89f61
translatedAt: 2026-01-14
---

İlişki tipleri vs benzerlik, bilgiyi birbirine bağlamanın iki yaklaşımını
karşılaştırır: benzerlik tabanlı getirme (ör. [RAG](./rag)) "bu ne hakkında?"
diye sorarken, ilişki tipli graflar (ör. [Diyalektik Graf](./dialectical-graph))
"bu, şuna ne yapıyor?" diye sorar.

Benzerlik getirmesi, benzer kelimeler kullanan belgeleri öne çıkarır. Bu yöntem,
bu belgelerin aynı fikirde mi olduğu, çatışıp çatışmadığı ya da farklı sorulara
mı yanıt verdiği konusunda bir şey söyleyemez. Tipli
kenarlar—[destekler](./dialectical-graph-edges), [saldırır](./attack),
[boşa düşürür](./undercut), [atıf yapar](./source)—tartışmacı ilişkiyi yakalar;
böylece "bu iddiaya ne itiraz ediyor?" veya "bu, hangi varsayımlara dayanıyor?"
gibi sorular mümkün olur.

Bu ayrım, [bilgi sentezi](./knowledge-synthesis) için kritiktir. "İlgili gibi
görünen" iki kaynak getirir de onların aynı fikirde mi yoksa çatışma içinde mi
olduğunu söyleyemezseniz, sentez özetlemeye indirgenir. Tipli kenarlar,
çatışmayı haritalanabilen, çözülebilen veya kayda geçirilebilen açık bir nesne
haline getirir.