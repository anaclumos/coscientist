---
title: Diyalektik Grafik
description: Belge içeriği yerine iddiaları ve ilişkileri depolayan bir bilgi grafiği modeli
---

Diyalektik grafik, belgeleri ayrıştırılmamış metin olarak ele almak yerine tartışmacı yapıyı (iddialar, tanımlar, varsayımlar, yöntemler, kanıt parçaları (evidence spans) ve bunların arasındaki ilişkiler) depolayan bir bilgi grafiğidir. Temel içgörü basittir: metni bilgiyle karıştırmayın. Metin bir ambalajdır; bilgi ise iddiaların birbirini desteklemesine, çürütmesine (attack) ve rafine etmesine imkân veren kısıt yapısıdır.

[Coscientist](./coscientist) üçlü bir ayrımı zorunlu kılar: özgün metin alıntılanabilir kanıt parçaları (evidence spans) olarak korunur; iddialar normalize edilmiş önermelere ayrıştırılır; ilişkiler ise açık tartışmacı bağlar olarak saklanır. Bu, yaygın bir RAG başarısızlık kipine yapısal bir düzeltmedir: alıntı kesilmesi (excerpt truncation). Kanıt parçası tam ifadeyi ve kaynağı korur, iddia kimin neyi ileri sürdüğünü kaydeder ve bir `cites` kenarı atfı düzyazının ima etmesi yerine açık hâle getirir.

Grafik ayrıca bir çıkarım katmanını (evrilen iddia ağı) bir anlatı katmanından (okumaya uygun, zaman damgalı bir izdüşüm) ayırır. Bir belge nihai gerçek değildir; grafiğin bir anlık görüntüsüdür. Her cümlenin; iddia, kapsam, varsayım, yöntem, veri, kanıt parçası ve kaynağa doğru geriye iz sürmesi mümkün olmalıdır. Bu zincir olmadan bir cümle sadece cümledir, bilgi değildir.

[Encyclopedia Meltdown](./encyclopedia-meltdown) için bir fren işlevi görmek üzere sistem, uzlaşma yerine çelişkileri ve karşı-örnekleri önceliklendirir. Bir iddia grafiğe girdiğinde varsayılan duruş hasmane (adversarial)dir: yapı tekrar yoluyla sürüklenmek yerine çürütme (rebuttal) yoluyla güncellensin diye saldırıları (attacks) ve boşa çıkarıcıları (undercuts) erkenden arayın. Somut düğüm ve ilişki türleri için [Dialectical Graph Nodes](./dialectical-graph-nodes) ve [Dialectical Graph Edges](./dialectical-graph-edges) sayfalarına bakın.