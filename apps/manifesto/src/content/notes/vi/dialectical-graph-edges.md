---
title: Các cạnh của Đồ thị Biện chứng
description: Các kiểu quan hệ kết nối các nút trong một đồ thị tri thức biện chứng
sourceLocale: en
sourceHash: e060cb9fd333
translatedAt: 2026-01-14
---

Trong một [Đồ thị Biện chứng](./dialectical-graph), các cạnh mã hoá các kiểu
quan hệ thay vì điểm tương đồng. Giá trị ở chỗ bạn có thể hỏi "điều này liên
quan/tác động đến điều kia như thế nào?" thay vì chỉ "chúng có cùng chủ đề
không?"

Các kiểu quan hệ phổ biến bao gồm:

- Ủng hộ: `supports`
- Phản biện: `attacks`, `undercuts`, `contradicts`
- Tinh chỉnh và phạm vi: `refines`, `generalizes`, `specializes`, `depends_on`
- Nguồn gốc và đo lường: `cites`, `defines`, `measures`
- Tái lập : `replicates`, `fails_to_replicate`
- Liên kết chủ đề tuỳ chọn: `is_about` (hữu ích, nhưng tự thân không mang tính
  nhận thức luận )

Các cạnh có kiểu cho phép cập nhật tri thức thông qua các chuỗi bác bỏ, phát
hiện xung đột về định nghĩa, và theo dõi trạng thái tái lập. Đây là những năng
lực mà truy hồi dựa trên tương đồng khó biểu diễn (xem
[các hạn chế của RAG](./rag-limitations)). Chúng cũng hỗ trợ đánh giá chất
lượng: chất lượng tri thức ít phụ thuộc vào hướng kết luận hơn, mà phụ thuộc
nhiều hơn vào độ bền vững của con đường đã tạo ra kết luận đó, và các cạnh mã
hoá cấu trúc của con đường ấy.
