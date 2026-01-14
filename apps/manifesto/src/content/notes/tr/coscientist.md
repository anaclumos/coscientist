---
title: Coscientist
description: Yapay zekâ sonrası çağda bilgi üretimi için entelektüel bir yoldaş sistemi
---

Coscientist, [Isaac Asimov](./isaac-asimov)'un kurgusal [Galaktik Ansiklopedi](./encyclopedia-galactica) eserinden ilham alan açık kaynaklı bir servistir. Yalnızca bilgiden oluşan bir [bilgi gemisi](./knowledge-ark) olmaktan fazlası olması amaçlanır: insan [Operatör](./operator) ile birlikte [tefekkür emeği](./contemplation-labor) yürüten bir [entelektüel yoldaş](./intellectual-companion). Yapay zekâ sonrası çağda hedefi, [beyin çürütmeme](./un-brain-rotting) sürecini desteklemektir: doğrulamayı ve özneyliği (agency) yeniden tesis etmek.

[Sunghyun Cho](./sunghyun-cho) tarafından geliştirilmiştir. Köken hikâyesi basittir: koruma önemlidir, ancak tek başına koruma anlayış üretmez. Coscientist, bilginin güncellenebilir olmasını sağlayacak şekilde tasarlanmıştır; böylece çelişkiler, karşı-örnekler ve [tanım kayması](./definition-drift), akıcı özetler tarafından yumuşatılıp geçiştirilmek yerine görünür ve üzerinde işlem yapılabilir hâle gelir.

İlk ilke egemenliktir: bilgi otoritesi [Operatör](./operator)'de kalmalıdır. [Ansiklopedi Çöküşü](./encyclopedia-meltdown)'a karşı korunmak sonradan eklenen bir düşünce değildir; bir tasarım kısıtıdır. Yapay zekâ tefekkür emeği yapabilir, ancak yazma ve ilan etme inisiyatifini ele geçirmemelidir.

Bu nedenle Coscientist, Soru-Cevap tarzı RAG’in ötesine geçer (bkz. [RAG sınırlamaları](./rag-limitations)). Ham belge metni yerine [tartışmacı eylemleri](./argumentative-act) depolayan bir [Diyalektik Grafik](./dialectical-graph) tutar; böylece her iddia kanıt parçalarına (evidence spans), kaynaklara ve açık ilişkilere bağlanabilir (bkz. [Diyalektik Grafik Düğümleri](./dialectical-graph-nodes) ve [Diyalektik Grafik Kenarları](./dialectical-graph-edges)).

Keşif varsayılan olarak adversaryaldir (adversarial). [Karşı-örnek öncelikli arama](./counterexample-first-search), [minimum cut](./minimum-cut) ile çelişki izolasyonu ve açık [tanım kayması](./definition-drift) tespiti gibi stratejiler erken aşamada baskı uygular; böylece bilgi, tekrar yoluyla kayıp sürüklenmek yerine çürütme (rebuttal) yoluyla güncellenir (bkz. [Keşif Stratejileri](./exploration-strategies)).

Protokol düzeyinde sistem, belgeleri yalnızca özetlemek yerine birbirleriyle çarpıştırmak için [Çoklu-YZ Uzlaşı Protokolü](./multi-ai-consensus-protocol) ve [bilgi sentezi](./knowledge-synthesis) gibi prosedürler kullanır. [LLM’ler](./llm) kullandığı için Coscientist [diller arası sentez](./cross-linguistic-synthesis) gerçekleştirebilir: herhangi bir dildeki literatürü okuyup sentezleyerek gerçek anlamda [çok dilli bir bilgi ağı](./multilingual-knowledge-mesh) mümkün kılar. Hedeflenen nihai durum, argümanlardan oluşan bir ekosistemdir: Yapay zekâ arama ve yeniden yapılandırmayı üstlenirken, Operatör yapıyı ve doğrulamayı denetler; böylece ortaya çıkan anlatı izlenebilir (traceable) kalır.

Referans: https://cho.sh/r/6975BA.