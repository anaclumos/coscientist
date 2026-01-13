---
title: Các Cạnh trong Đồ thị Biện chứng
description: Các loại quan hệ kết nối các nút trong một đồ thị tri thức biện chứng
---

Trong một [Đồ thị Biện chứng](./dialectical-graph), các cạnh mã hoá *loại quan hệ* thay vì điểm tương đồng. Giá trị nằm ở chỗ bạn có thể hỏi “điều này liên quan/ảnh hưởng đến điều kia như thế nào?” thay vì chỉ “chúng có nói về cùng một chủ đề không?”

Các quan hệ điển hình gồm `supports`, `attacks`, và `undercuts` (những thách thức ở mức phương pháp/giả định/định nghĩa); các quan hệ tinh chỉnh và phạm vi như `refines`, `generalizes`, `specializes`, và `depends_on`; các liên kết về nguồn gốc (provenance) như `cites`, `defines`, `measures`, `replicates`, và `fails_to_replicate`; và các xung đột trực tiếp như `contradicts`. Một số đồ thị cũng dùng các liên kết chủ đề lỏng như `is_about`, nhưng phần “công việc” tri thức/nhận thức luận (epistemic) đến từ các cạnh lập luận được gán kiểu.

Các cạnh được gán kiểu cho phép cập nhật tri thức thông qua các chuỗi phản bác, phát hiện xung đột về định nghĩa, và theo dõi trạng thái tái lập (replication). Đây là những khả năng mà truy hồi dựa trên độ tương đồng khó biểu diễn (xem [Hạn chế của RAG](./rag-limitations)). Chúng cũng hỗ trợ đánh giá chất lượng: chất lượng tri thức ít phụ thuộc vào hướng của một kết luận hơn là độ bền vững của con đường đã tạo ra nó, và các cạnh mã hoá cấu trúc của con đường đó.