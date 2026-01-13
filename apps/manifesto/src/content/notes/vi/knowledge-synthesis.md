---
title: Tổng hợp tri thức
description: Tổng hợp khác với việc lấy trung bình như thế nào trong các hệ thống tri thức biện chứng
---

Tổng hợp tri thức là điều xảy ra sau khi truy xuất (retrieval), khi bạn phải làm cho các nguồn không tương thích trở nên có thể so sánh được. Nó không phải là việc lấy trung bình. Nó là việc căn chỉnh các tiền đề, định nghĩa và phạm vi để những bất đồng trở thành các đối tượng hiển hiện thay vì nhiễu.

[RAG](./rag-limitations) tiêu chuẩn mạnh về truy xuất và yếu về tổng hợp vì nó không có một đối tượng nội bộ gọi là [contention](./contention). Trong một [Đồ thị Biện chứng](./dialectical-graph), contention là thực thể hạng nhất (first-class), nên hệ thống có thể phân rã sự không tương thích thành các nguyên nhân của nó: khác biệt định nghĩa, khác biệt lấy mẫu, khác biệt phương pháp, khác biệt phạm vi, hoặc [tính không dừng](./nonstationarity) (nonstationarity) do thời gian chi phối.

Vì vậy, “giải quyết” không phải là một câu duy nhất. Nó là một bản đồ phân nhánh: nếu cùng một thuật ngữ dẫn đến các kết luận khác nhau dưới các định nghĩa khác nhau, hệ thống sẽ ghi nhận sự phân nhánh ở tầng định nghĩa trước khi coi đó là một mâu thuẫn ở tầng kết luận. Các [nút vấn đề](./dialectical-graph-nodes) (issue nodes) bó gọn cái gì xung đột với cái gì và ghi lại các điều kiện mà theo đó vấn đề có thể được giải quyết.

Mục tiêu là một bản đồ các mâu thuẫn kèm các điều kiện giải quyết được nêu rõ, để công việc về sau có thể cập nhật tri thức bằng cách sắp xếp lại thay vì viết lại. Đây là lý do vì sao AI suy tưởng trong [Coscientist](./coscientist) được nhắm tới việc làm cho các tài liệu va chạm: tạo ra các cụm vấn đề, tinh chỉnh điều kiện, phản biện có cấu trúc, và các hệ tọa độ so sánh được nêu tường minh.