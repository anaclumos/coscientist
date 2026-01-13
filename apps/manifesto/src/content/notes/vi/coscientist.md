---
title: Coscientist
description: Một hệ thống đồng hành trí tuệ để sản xuất tri thức trong kỷ nguyên hậu-AI
---

Coscientist là một dịch vụ mã nguồn mở, lấy cảm hứng từ [Encyclopedia Galactica](./encyclopedia-galactica) hư cấu của Isaac Asimov. Nó được thiết kế để không chỉ là một [knowledge ark](./knowledge-ark) lưu trữ thông tin: mà là một người bạn đồng hành trí tuệ, mở rộng sự chiêm nghiệm cùng với [Galarch](./galarch) là con người. Trên hết, đây là một hệ thống để “giải độc” cho tâm trí (un-brain-rotting) của chúng ta trong kỷ nguyên hậu-AI.

Nó được xây dựng bởi [Sunghyun Cho](./sunghyun-cho). Câu chuyện khởi nguồn khá đơn giản: bảo tồn là quan trọng, nhưng chỉ bảo tồn thôi thì không tạo ra sự thấu hiểu. Coscientist được thiết kế để làm cho tri thức có thể cập nhật được, ώστε các mâu thuẫn, phản ví dụ, và sự trôi dạt định nghĩa (definition drift) trở nên nhìn thấy được và có thể hành động, thay vì bị những bản tóm tắt trôi chảy làm phẳng đi.

Nguyên tắc đầu tiên là chủ quyền: thẩm quyền tri thức phải thuộc về [Galarch](./galarch). Việc phòng vệ trước [Encyclopedia Meltdown](./encyclopedia-meltdown) không phải là ý nghĩ đến sau; đó là một ràng buộc thiết kế. AI có thể làm lao động chiêm nghiệm, nhưng không nên giành quyền chủ động trong việc viết và tuyên bố.

Đó là lý do Coscientist vượt ra ngoài RAG kiểu hỏi-đáp (xem [RAG limitations](./rag-limitations)). Nó duy trì một [Dialectical Graph](./dialectical-graph) lưu trữ các [argumentative acts](./argumentative-act) thay vì văn bản tài liệu thô, để mỗi mệnh đề đều có thể được ràng buộc với các đoạn bằng chứng, nguồn, và các quan hệ tường minh như phản công (attacks), bẻ gãy nền tảng (undercuts), và trích dẫn (citations) (xem [Dialectical Graph Nodes](./dialectical-graph-nodes) và [Dialectical Graph Edges](./dialectical-graph-edges)). Việc khám phá được dẫn dắt bởi các chiến lược ưu tiên áp lực đối kháng, bao gồm tìm kiếm “phản ví dụ trước”, cô lập mâu thuẫn thông qua [minimum cut](./minimum-cut), và phát hiện tường minh sự [definition drift](./definition-drift) (xem [Exploration Strategies](./exploration-strategies)).

Ở cấp độ giao thức, hệ thống sử dụng các thủ tục như [Multi-AI Consensus Protocol](./multi-ai-consensus-protocol) và [knowledge synthesis](./knowledge-synthesis) để khiến các tài liệu va chạm với nhau thay vì chỉ đơn thuần tóm tắt. Trạng thái thành công được nhắm tới là một hệ sinh thái của các lập luận: AI đảm nhận công việc tìm kiếm và tái cấu trúc, trong khi Galarch giám sát cấu trúc và việc kiểm chứng để câu chuyện kết quả vẫn có thể truy vết được.

Tham khảo: https://cho.sh/r/6975BA.