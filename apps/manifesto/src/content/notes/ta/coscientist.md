---
title: கோசியன்டிஸ்ட்
description: AI-க்குப் பிந்தைய காலத்தில் அறிவை உருவாக்குவதற்கான அறிவுசார் துணை அமைப்பு
---

கோசியன்டிஸ்ட் (Coscientist) என்பது ஐசக் அசிமோவின் கற்பனை [Encyclopedia Galactica](./encyclopedia-galactica) யால் ஊக்கமளிக்கப்பட்ட ஒரு திறந்த மூல (open-source) சேவை. இது தகவல்களின் ஒரு [knowledge ark](./knowledge-ark) மட்டும் அல்ல: மனித [Galarch](./galarch) உடன் சேர்ந்து சிந்தனையை விரிவாக்கும் அறிவுசார் துணை. அனைத்திற்கும் மேலாக, AI-க்குப் பிந்தைய காலத்தில் நம் மனதை “மூளை-அழுகல்” (brain rot) நிலையிலிருந்து விடுவிக்கும் ஒரு அமைப்பு.

இதை [Sunghyun Cho](./sunghyun-cho) உருவாக்குகிறார். இதன் தோற்றக் கதை எளிது: பாதுகாப்பு (preservation) முக்கியம், ஆனால் பாதுகாப்பு மட்டும் புரிதலை உருவாக்காது. முரண்பாடுகள், எதிர்மாதிரிகள் (counterexamples), மற்றும் வரையறைச் சிதைவு (definition drift) ஆகியவை மென்மையான (fluent) சுருக்கங்களால் மறைக்கப்படாமல், வெளிப்படையாகத் தென்பட்டு செயல்படுத்தக்கூடியதாக இருக்கும்படி அறிவை புதுப்பிக்கக்கூடியதாக (updateable) மாற்றவே கோசியன்டிஸ்ட் வடிவமைக்கப்பட்டுள்ளது.

முதல் கொள்கை “சுயாதீனம்” (sovereignty): அறிவின் அதிகாரம் [Galarch](./galarch) யிடமே இருக்க வேண்டும். [Encyclopedia Meltdown](./encyclopedia-meltdown) ஐத் தவிர்ப்பது பின்னர் நினைப்பதற்கான விஷயம் அல்ல; அது ஒரு வடிவமைப்பு கட்டுப்பாடு. AI சிந்தனை உழைப்பை (contemplation labor) செய்யலாம், ஆனால் எழுதுவதும் அறிவிப்பதும் பற்றிய முன்முயற்சியை அது கைப்பற்றக் கூடாது.

இதனால்தான் கோசியன்டிஸ்ட் Q&A-முறையிலான RAG-ஐ விட (பார்க்க: [RAG limitations](./rag-limitations)) மேலாக செல்கிறது. இது மூல ஆவண உரையைத் (raw document text) தேக்குவதற்குப் பதிலாக [argumentative acts](./argumentative-act) ஐ சேமிக்கும் [Dialectical Graph](./dialectical-graph) ஐ பராமரிக்கிறது; ஆகவே ஒவ்வொரு கூற்றையும் ஆதாரத் துணுக்குகள் (evidence spans), மூலங்கள் (sources), மற்றும் தாக்குதல் (attacks), அடிநீக்கம் (undercuts), மேற்கோள்கள் (citations) போன்ற வெளிப்படையான தொடர்புகளுடன் கட்டிப் பிணைக்க முடியும் (பார்க்க: [Dialectical Graph Nodes](./dialectical-graph-nodes) மற்றும் [Dialectical Graph Edges](./dialectical-graph-edges)). ஆய்வு (exploration) என்பது எதிர்வாத அழுத்தத்தை (adversarial pressure) முன்னுரிமைப்படுத்தும் உத்திகளால் இயக்கப்படுகிறது; அதில் எதிர்மாதிரி-முதலில் தேடல் (counterexample-first search), [minimum cut](./minimum-cut) மூலம் முரண்பாடு தனிமைப்படுத்தல் (contradiction isolation), மற்றும் வெளிப்படையான [definition drift](./definition-drift) கண்டறிதல் ஆகியவை அடங்கும் (பார்க்க: [Exploration Strategies](./exploration-strategies)).

நெறிமுறை (protocol) மட்டத்தில், அமைப்பு [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) மற்றும் [knowledge synthesis](./knowledge-synthesis) போன்ற செயல்முறைகளைப் பயன்படுத்தி ஆவணங்களை வெறும் சுருக்குவதற்குப் பதிலாக ஒன்றோடொன்று மோதச் செய்கிறது. எதிர்பார்க்கப்படும் வெற்றிநிலை என்பது வாதங்களின் ஒரு சூழல் (ecosystem of arguments): AI தேடல் மற்றும் மறுசீரமைப்பு வேலைகளை கையாளும்; Galarch கட்டமைப்பையும் சரிபார்ப்பையும் மேற்பார்வை செய்யும்—அதனால் உருவாகும் கதை (narrative) தடமறியக்கூடியதாக (traceable) இருக்கும்.

ஆதாரம்: https://cho.sh/r/6975BA.