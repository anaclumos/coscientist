---
title: Đồ thị biện chứng
description: Một mô hình đồ thị tri thức lưu trữ các mệnh đề và quan hệ thay vì nội dung tài liệu
---

Đồ thị biện chứng (dialectical graph) là một đồ thị tri thức lưu trữ cấu trúc lập luận (các mệnh đề, định nghĩa, giả định, phương pháp, các đoạn bằng chứng (evidence spans), và các quan hệ giữa chúng) thay vì coi tài liệu như văn bản thuần không phân biệt. Nhận định cốt lõi rất đơn giản: đừng nhầm văn bản với tri thức. Văn bản là bao gói; tri thức là cấu trúc ràng buộc cho phép các mệnh đề hỗ trợ, phản bác và tinh chỉnh lẫn nhau.

[Coscientist](./coscientist) áp dụng sự tách bạch theo ba lớp: văn bản gốc được giữ lại như các đoạn bằng chứng có thể trích dẫn; các mệnh đề được phân rã thành các phát biểu đã chuẩn hoá (normalized propositions); và các quan hệ được lưu như các liên kết lập luận (argumentative bindings) một cách tường minh. Đây là một sửa chữa mang tính cấu trúc cho một kiểu lỗi RAG phổ biến: cắt cụt trích đoạn (excerpt truncation). Đoạn bằng chứng giữ nguyên câu chữ và nguồn chính xác, mệnh đề ghi lại ai đã khẳng định điều gì, và một cạnh `cites` khiến việc quy nguồn trở nên tường minh thay vì chỉ ngầm hiểu qua văn phong.

Đồ thị cũng tách một lớp suy luận (inference layer) — mạng mệnh đề đang tiến hoá — khỏi một lớp tường thuật (narrative layer) — một phép chiếu có đóng dấu thời gian, phù hợp để đọc. Một tài liệu không phải chân lý cuối cùng; nó là một ảnh chụp (snapshot) của đồ thị. Mỗi câu phải có khả năng truy ngược qua mệnh đề, phạm vi, giả định, phương pháp, dữ liệu, đoạn bằng chứng và nguồn. Không có chuỗi đó, một câu chỉ là một câu, không phải tri thức.

Để đóng vai trò như một cái phanh đối với [Encyclopedia Meltdown](./encyclopedia-meltdown), hệ thống ưu tiên các mâu thuẫn và phản ví dụ hơn là sự đồng thuận. Khi một mệnh đề đi vào đồ thị, tư thế mặc định là đối kháng: tìm các phản bác và “gỡ nền” (undercuts) sớm để cấu trúc được cập nhật bằng phản biện thay vì trôi dạt do lặp lại. Với các loại nút và quan hệ cụ thể, xem [Dialectical Graph Nodes](./dialectical-graph-nodes) và [Dialectical Graph Edges](./dialectical-graph-edges).