---
title: Coscientist
description: Yapay zekâ sonrası çağda bilgi üretimi için entelektüel bir yoldaş sistemi
---

Coscientist, Isaac Asimov’un kurgusal [Encyclopedia Galactica](./encyclopedia-galactica) eserinden ilham alan açık kaynaklı bir hizmettir. Yalnızca bir bilgi [knowledge ark](./knowledge-ark)’ı olmaktan öte bir şey olmayı amaçlar: insan [Galarch](./galarch) ile birlikte tefekkürü genişleten entelektüel bir yoldaş. Her şeyden önce, yapay zekâ sonrası çağda zihnimizin “beynini çürütmesini” geri çevirmek için bir sistemdir.

[Sunghyun Cho](./sunghyun-cho) tarafından geliştirilmiştir. Köken hikâyesi basittir: koruma önemlidir, ancak tek başına koruma anlayış üretmez. Coscientist, bilginin güncellenebilir olmasını sağlayacak şekilde tasarlanmıştır; böylece çelişkiler, karşı örnekler ve tanım kayması görünür ve eyleme dökülebilir hâle gelir; akıcı özetler tarafından yumuşatılıp geçiştirilmez.

İlk ilke egemenliktir: bilgi otoritesi [Galarch](./galarch)’ta kalmalıdır. [Encyclopedia Meltdown](./encyclopedia-meltdown)’a karşı korunma sonradan eklenmiş bir düşünce değildir; bir tasarım kısıtıdır. Yapay zekâ tefekkür emeğini üstlenebilir, ancak yazma ve ilan etme inisiyatifini ele geçirmemelidir.

Bu nedenle Coscientist, Soru-Cevap tarzı RAG’in ötesine geçer (bkz. [RAG limitations](./rag-limitations)). Ham belge metni yerine [argumentative acts](./argumentative-act) depolayan bir [Dialectical Graph](./dialectical-graph) tutar; böylece her iddia kanıt parçalarına, kaynaklara ve saldırılar, altını oyma (undercuts) ve atıflar gibi açık ilişkilere bağlanabilir (bkz. [Dialectical Graph Nodes](./dialectical-graph-nodes) ve [Dialectical Graph Edges](./dialectical-graph-edges)). Keşif, karşıt baskıyı önceleyen stratejilerle yönlendirilir; buna karşı-örnek-önce arama, [minimum cut](./minimum-cut) aracılığıyla çelişki izolasyonu ve açık [definition drift](./definition-drift) tespiti dahildir (bkz. [Exploration Strategies](./exploration-strategies)).

Protokol düzeyinde sistem, belgeleri yalnızca özetlemek yerine çarpıştırmak için [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) ve [knowledge synthesis](./knowledge-synthesis) gibi yöntemler kullanır. Amaçlanan başarılı durum, argümanlardan oluşan bir ekosistemdir: yapay zekâ arama ve yeniden yapılandırma işini yürütürken, Galarch yapıyı ve doğrulamayı denetler; böylece ortaya çıkan anlatı izlenebilir kalır.

Referans: https://cho.sh/r/6975BA.