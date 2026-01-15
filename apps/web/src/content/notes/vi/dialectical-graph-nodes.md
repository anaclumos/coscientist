---
title: Các nút của Đồ thị Biện chứng
description: Các loại nút trong một đồ thị tri thức biện chứng
sourceLocale: en
sourceHash: 007206ea7078
translatedAt: 2026-01-14
---

Trong một [Đồ thị Biện chứng](./dialectical-graph), các nút đại diện cho các đối
tượng nhận thức thay vì văn bản thô. Để có cái nhìn tổng quan về cách các mảnh
ghép này khớp với nhau, xem [Thành phần Đồ thị](./graph-components). Các loại
nút phổ biến bao gồm:

- [Mệnh đề](./claim) — các phát biểu có thể kiểm chứng
- [Phạm vi](./scope) — các điều kiện áp dụng
- [Giả định](./assumption) — các tiền đề ngầm
- Định nghĩa — nghĩa của thuật ngữ
- [Phương pháp](./method) — các quy trình tạo ra bằng chứng hoặc kết luận
- Dữ liệu — các phép đo hoặc kết quả
- [Đoạn Bằng chứng](./evidence-span) — các khoảng trích dẫn chính xác
- [Nguồn](./source) — các neo nguồn gốc
- [Phản ví dụ](./counterexample) — các trường hợp làm phá vỡ hoặc thu hẹp các
  mệnh đề
- [Nút Vấn đề](./issue-node) — các bó của những cụm mệnh đề va chạm nhau

Cách phân rã này ngăn một nhầm lẫn phổ biến: một tài liệu không phải là một thứ
duy nhất. Cùng một bài báo có thể đưa ra một định nghĩa, khẳng định một mệnh đề,
trích dẫn bằng chứng, và phản bác một kết quả trước đó; mỗi thứ trong số đó nên
vẫn có thể được truy cập/định danh riêng nếu bạn muốn tri thức được cập nhật
thay vì chỉ đơn thuần tích lũy.

Trạng thái mệnh đề là đa chiều thay vì chỉ một điểm số độ tin cậy. Các chuyển
trạng thái ít bị chi phối bởi số lượng phản bác hơn, mà bởi loại phản bác và
việc nó có thành công hay không ở cấp độ phạm vi, giả định, định nghĩa, hoặc
phương pháp; xem [Các Cạnh của Đồ thị Biện chứng](./dialectical-graph-edges).
