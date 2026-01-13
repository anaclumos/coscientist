---
title: کوسائنٹسٹ
description: AI کے بعد کے دور میں علم کی پیداوار کے لیے ایک فکری رفاقتی نظام
---

کوسائنٹسٹ ایک اوپن سورس سروس ہے جو آئزک اسیموف کے افسانوی [Encyclopedia Galactica](./encyclopedia-galactica) سے متاثر ہے۔ اس کا مقصد محض معلومات کی ایک [knowledge ark](./knowledge-ark) بننا نہیں: بلکہ ایک ایسا فکری رفیق جو انسانی [Galarch](./galarch) کے ساتھ مل کر تفکر کو وسعت دے۔ سب سے بڑھ کر، یہ AI کے بعد کے دور میں ہمارے ذہنوں کو “brain rot” سے بچانے/نکالنے کا ایک نظام ہے۔

اسے [Sunghyun Cho](./sunghyun-cho) نے بنایا ہے۔ اصل کہانی سیدھی ہے: تحفظ (preservation) اہم ہے، مگر صرف تحفظ فہم پیدا نہیں کرتا۔ کوسائنٹسٹ کو اس طرح ڈیزائن کیا گیا ہے کہ علم کو updateable (اپڈیٹ ہونے کے قابل) بنایا جائے تاکہ تضادات، جوابی مثالیں، اور تعریف میں بتدریج سرکاؤ (definition drift) ہموار اور رواں خلاصوں میں دب جانے کے بجائے نمایاں اور قابلِ عمل بن جائیں۔

پہلا اصول خودمختاری (sovereignty) ہے: علم کی اتھارٹی [Galarch](./galarch) کے پاس ہی رہنی چاہیے۔ [Encyclopedia Meltdown](./encyclopedia-meltdown) سے بچاؤ کوئی بعد کی سوچ نہیں؛ یہ ایک design constraint (ڈیزائن کی پابندی) ہے۔ AI تفکر کی محنت (contemplation labor) کر سکتا ہے، مگر اسے لکھنے اور اعلان کرنے کی ابتکار (initiative) نہیں چھیننی چاہیے۔

اسی لیے کوسائنٹسٹ Q&A طرز کے RAG سے آگے جاتا ہے (دیکھیے [RAG limitations](./rag-limitations))۔ یہ ایک [Dialectical Graph](./dialectical-graph) برقرار رکھتا ہے جو خام دستاویزی متن کے بجائے [argumentative acts](./argumentative-act) کو ذخیرہ کرتا ہے، تاکہ ہر دعویٰ کو شواہد کے حصّوں (evidence spans)، ماخذوں، اور واضح تعلقات—جیسے حملے (attacks)، undercuts (انڈرکٹ/بنیاد کمزور کرنے والے اعتراضات)، اور حوالہ جات (citations)—کے ساتھ باندھا جا سکے (دیکھیے [Dialectical Graph Nodes](./dialectical-graph-nodes) اور [Dialectical Graph Edges](./dialectical-graph-edges))۔ کھوج (exploration) ایسی حکمتِ عملیوں سے چلتی ہے جو adversarial pressure (مخالفانہ دباؤ) کو ترجیح دیتی ہیں، جن میں counterexample-first search (پہلے جوابی مثال تلاش کرنا)، [minimum cut](./minimum-cut) کے ذریعے تضاد کو الگ کرنا، اور واضح [definition drift](./definition-drift) detection (تعریف کے سرکاؤ کی شناخت) شامل ہیں (دیکھیے [Exploration Strategies](./exploration-strategies))۔

پروٹوکول کی سطح پر، یہ نظام [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) اور [knowledge synthesis](./knowledge-synthesis) جیسے طریقۂ کار استعمال کرتا ہے تاکہ دستاویزات محض سمری ہونے کے بجائے آپس میں ٹکرائیں۔ مطلوبہ کامیاب حالت دلائل کے ایک ماحولیاتی نظام (ecosystem) کی ہے: AI تلاش اور ساخت نو (restructuring) کا کام سنبھالتا ہے، جبکہ Galarch ساخت اور توثیق (verification) کی نگرانی کرتا ہے تاکہ نتیجے میں بننے والا بیانیہ قابلِ سراغ (traceable) رہے۔

حوالہ: https://cho.sh/r/6975BA۔