---
title: Eğitim Verisi Kontaminasyonu
description: Gelecekteki modelleri eğitmek için kullanılan derlemleri kirleten yapay zekâ üretimi içerik
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Eğitim verisi kontaminasyonu, yapay zekâ tarafından üretilen metinlerin internete girmesi, kazıma yoluyla eğitim derlemlerine dahil edilmesi ve bir sonraki model neslini şekillendirmesiyle ortaya çıkar. Sonuç bir geri besleme döngüsüdür: Önceki modellerin çıktılarıyla eğitilen modeller, onların önyargılarını devralır, hatalarını büyütür ve orijinalleri değerli kılan bağımsız insan sinyaline erişimini kaybeder.

Bu durum, kıyas kontaminasyonundan (test verisinin eğitim setlerine sızması) farklıdır; gerçi ikisi de aynı kelimeyi paylaşır. Eğitim verisi kontaminasyonu, alttaki derlemin kökeni ile ilgilidir: [AI slop](./ai-slop) insan yazımı metinle büyük ölçekte karıştığında, onları ayırt etmek pahalı ya da imkânsız hale gelir. 2022 sonrası web kazımaları giderek daha şüpheli hale gelmiştir.

Sonuçlar katlanarak büyür. [Model çöküşü](./model-collapse), modeller sentetik verilerle eğitildiğinde kalite düşüşünü açıklar: dağılımlar daralır, nadir kipler kaybolur ve çıktı tekdüze bir ortalamaya doğru yakınsar. [Ansiklopedi erimesi](./encyclopedia-meltdown), yapay zekâ çıktılarının kaynak olarak alıntılanmasıyla bilgi sisteminin nasıl çöktüğünü; dairesel bir otorite yaratıldığını anlatır. Eğitim verisi kontaminasyonu, her ikisinin de yukarı akıştaki nedenidir.

[Low-background steel](./low-background-steel) benzetmesi sorunu netleştirir. Nükleer testler 1945 sonrası üretilen tüm çeliği kirletti; LLM (Large Language Model, büyük dil modeli) yaygınlaşması da 2020 sonrası web metninin tamamını kirletti. Her iki kontaminasyon olayı da geri döndürülemezdi, her ikisi de [kontaminasyon-öncesi kaynaklara](./pre-contamination-resource) talep yarattı ve her ikisi de teknolojiyi ilerletmenin, teknolojinin var olmadığı dönemlerde üretilmiş malzemeleri gerektirdiği anlamına gelir.

Çözümler; [provenance](./provenance) doğrulaması, zaman damgasına göre kapılayan arşivler ve insan yazarlığının açık zincirlerine sahip kaynakları önceleyen veri kürasyonu uygulamalarını içerir. MIT Data Provenance Initiative ve benzeri girişimler, eğitim verisinin kökenlerine şeffaflık kazandırmayı hedefler—gelecekteki modellerin kendi yansımaları üzerinde eğitilmekten kaçınması için gerekli bir adım.
