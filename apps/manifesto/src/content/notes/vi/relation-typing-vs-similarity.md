---
title: Gán kiểu quan hệ so với độ tương đồng
description: Vì sao các cạnh được gán kiểu giải quyết được những gì truy hồi dựa trên độ tương đồng không thể
---

Gán kiểu quan hệ so với độ tương đồng là sự đối chiếu giữa hai cách kết nối tri thức: truy hồi dựa trên độ tương đồng (như trong [RAG](./rag)) hỏi “nội dung này nói về cái gì?”, trong khi đồ thị có quan hệ được gán kiểu (như [Đồ thị Biện chứng](./dialectical-graph)) hỏi “điều này tác động gì lên điều kia?”

Truy hồi theo độ tương đồng đưa lên các tài liệu dùng những từ ngữ tương tự. Nó không thể cho bạn biết các tài liệu đó đồng ý, xung đột, hay đang trả lời những câu hỏi khác nhau. Các cạnh được gán kiểu—[ủng hộ](./dialectical-graph-edges), [tấn công](./attack), [phản bác ngầm](./undercut), [trích dẫn](./source)—nắm bắt mối quan hệ lập luận, cho phép đặt các câu hỏi như “điều gì thách thức khẳng định này?” hoặc “khẳng định này phụ thuộc vào những giả định nào?”

Sự khác biệt này mang tính then chốt cho [tổng hợp tri thức](./knowledge-synthesis). Nếu bạn truy hồi hai nguồn “có vẻ liên quan” nhưng không thể biết chúng đồng ý hay xung đột, việc tổng hợp sẽ sụp đổ thành tóm tắt. Các cạnh được gán kiểu biến xung đột thành một đối tượng tường minh có thể được lập bản đồ, giải quyết, hoặc ghi nhận.