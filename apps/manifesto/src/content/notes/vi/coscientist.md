---
title: Coscientist
description: Một hệ thống bạn đồng hành trí tuệ để sản xuất tri thức trong kỷ nguyên hậu AI
---

Coscientist là một dịch vụ mã nguồn mở lấy cảm hứng từ [Bách khoa toàn thư Thiên hà](./encyclopedia-galactica) hư cấu của [Isaac Asimov](./isaac-asimov). Nó được kỳ vọng sẽ không chỉ là một [con thuyền lưu trữ tri thức](./knowledge-ark) của thông tin, mà còn là một [bạn đồng hành trí tuệ](./intellectual-companion) thực hiện [lao động chiêm nghiệm](./contemplation-labor) song hành cùng [Người vận hành](./operator) là con người. Trong kỷ nguyên hậu AI, mục tiêu của nó là hỗ trợ [chống thối não](./un-brain-rotting): khôi phục việc kiểm chứng và quyền chủ động.

Nó được xây dựng bởi [Sunghyun Cho](./sunghyun-cho). Câu chuyện khởi nguồn thì đơn giản: bảo tồn là quan trọng, nhưng chỉ bảo tồn thôi không tạo ra sự thấu hiểu. Coscientist được thiết kế để khiến tri thức có thể cập nhật, để các mâu thuẫn, phản ví dụ và [trôi dạt định nghĩa](./definition-drift) trở nên hiển lộ và có thể hành động, thay vì bị các bản tóm tắt trơn tru làm phẳng.

Nguyên tắc đầu tiên là chủ quyền: thẩm quyền tri thức phải nằm ở [Người vận hành](./operator). Việc phòng vệ trước [Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown) không phải là chuyện nghĩ sau; đó là một ràng buộc thiết kế. AI có thể làm lao động chiêm nghiệm, nhưng không nên giành lấy quyền chủ động trong việc viết và tuyên bố.

Vì vậy Coscientist vượt ra ngoài RAG kiểu hỏi-đáp (xem [các hạn chế của RAG](./rag-limitations)). Nó duy trì một [Đồ thị Biện chứng](./dialectical-graph) lưu trữ các [hành vi lập luận](./argumentative-act) thay vì văn bản tài liệu thô, để mọi mệnh đề đều có thể được gắn với các đoạn bằng chứng, nguồn, và các quan hệ tường minh (xem [Các nút Đồ thị Biện chứng](./dialectical-graph-nodes) và [Các cạnh Đồ thị Biện chứng](./dialectical-graph-edges)).

Khám phá mặc định là đối kháng. Những chiến lược như [tìm kiếm ưu tiên phản ví dụ](./counterexample-first-search), cô lập mâu thuẫn bằng [minimum cut](./minimum-cut), và phát hiện [trôi dạt định nghĩa](./definition-drift) một cách tường minh tạo áp lực ngay từ sớm để tri thức được cập nhật bằng phản bác, thay vì trôi đi bởi sự lặp lại (xem [Các chiến lược khám phá](./exploration-strategies)).

Ở cấp độ giao thức, hệ thống sử dụng các thủ tục như [Giao thức đồng thuận đa AI](./multi-ai-consensus-protocol) và [tổng hợp tri thức](./knowledge-synthesis) để khiến các tài liệu va chạm với nhau thay vì chỉ đơn thuần tóm tắt. Vì sử dụng [LLMs](./llm), Coscientist có thể thực hiện [tổng hợp xuyên ngôn ngữ](./cross-linguistic-synthesis): đọc và tổng hợp tài liệu trong bất kỳ ngôn ngữ nào, cho phép một [lưới tri thức đa ngôn ngữ](./multilingual-knowledge-mesh) đúng nghĩa. Trạng thái cuối cùng được nhắm tới là một hệ sinh thái các lập luận: AI đảm nhiệm tìm kiếm và tái cấu trúc, còn Người vận hành giám sát cấu trúc và việc kiểm chứng để câu chuyện kết quả vẫn có thể truy vết.

Tham khảo: https://cho.sh/r/6975BA.