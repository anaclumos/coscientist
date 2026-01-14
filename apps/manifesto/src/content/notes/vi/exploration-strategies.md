---
title: Chiến lược Khám phá
description: Các chiến lược duyệt đồ thị cho việc khám phá tri thức liên tục
---

[Nhà đồng khoa học](./coscientist) cần nhiều hơn chỉ truy hồi (retrieval): nó cần khả năng khám phá (exploration) để chủ động làm lộ ra các mâu thuẫn, các điều kiện biên, và sự phụ thuộc vào phương pháp trong [Đồ thị Biện chứng](./dialectical-graph).

Các chiến lược chính bao gồm:

- [Tìm kiếm Ưu tiên Phản ví dụ](./counterexample-first-search) — coi mức độ phổ biến là một tín hiệu rủi ro; ưu tiên phản ví dụ và các điều kiện biên
- [Cắt Tối thiểu](./minimum-cut) — cô lập cấu trúc tối thiểu tạo ra một mâu thuẫn, rồi tập trung chú ý vào [tập mâu thuẫn tối thiểu](./minimum-contradiction-set)
- [Trôi dạt Định nghĩa](./definition-drift) — phát hiện sự dịch chuyển ý nghĩa thay vì giả định các khái niệm được chia sẻ
- [Liên kết Phương pháp–Kết luận](./method-conclusion-coupling) — gom cụm các khẳng định theo phương pháp để tìm ra các khiếm khuyết chung
- [Tách biệt Đường dẫn Tái lập](./replication-path-separation) — phân biệt bằng chứng độc lập với các lần nhắc lại (restatement) lặp đi lặp lại

Trong triển khai, các chiến lược này xuất hiện dưới dạng các tác tử (agent) chuyên biệt cho việc chuẩn hóa, trích xuất giả định, tìm kiếm phản ví dụ, tái dựng phạm vi, và thiết kế chiến lược xác minh.