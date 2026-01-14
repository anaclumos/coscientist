---
title: Đồ thị biện chứng
description:
  Một mô hình đồ thị tri thức lưu trữ các mệnh đề và quan hệ thay vì nội dung
  tài liệu
sourceLocale: en
sourceHash: cd2021478e98
translatedAt: 2026-01-14
---

Đồ thị biện chứng là một đồ thị tri thức lưu trữ cấu trúc lập luận (các mệnh
đề/khẳng định, định nghĩa, giả định, phương pháp, các đoạn bằng chứng, và các
quan hệ giữa chúng) thay vì coi tài liệu như văn bản không phân biệt. Trực giác
cốt lõi rất đơn giản: đừng nhầm văn bản với tri thức. Văn bản là lớp đóng gói;
tri thức là cấu trúc ràng buộc cho phép các mệnh đề hỗ trợ, công kích và tinh
chỉnh lẫn nhau.

[Nhà đồng khoa học](./coscientist) áp đặt sự tách biệt ba lớp: văn bản gốc được
giữ lại như các đoạn bằng chứng có thể trích dẫn; các mệnh đề được phân rã thành
các phát biểu chuẩn hoá; và các quan hệ được lưu như các ràng buộc lập luận
tường minh. Đây là một sửa chữa mang tính cấu trúc cho một chế độ lỗi phổ biến
của [RAG](./rag): cắt cụt trích đoạn. Đoạn bằng chứng giữ nguyên câu chữ chính
xác và nguồn; mệnh đề ghi lại ai đã khẳng định điều gì; và một cạnh `cites` làm
cho việc quy thuộc nguồn trở nên tường minh thay vì chỉ ngầm định qua văn xuôi.

Đồ thị cũng tách một lớp suy luận (mạng mệnh đề đang tiến hoá) khỏi một lớp
tường thuật (một phép chiếu có gắn dấu thời gian, phù hợp để đọc). Một tài liệu
không phải là chân lý cuối cùng; nó là một ảnh chụp của đồ thị. Mỗi câu nên có
khả năng lần ngược qua mệnh đề, phạm vi, giả định, phương pháp, dữ liệu, đoạn
bằng chứng và nguồn. Không có chuỗi đó, một câu chỉ là một câu, không phải tri
thức.

Để đóng vai trò như một cái phanh đối với
[Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown), hệ thống ưu tiên các
mâu thuẫn và phản ví dụ hơn là sự đồng thuận. Khi một mệnh đề đi vào đồ thị, tư
thế mặc định là đối kháng: tìm các đòn công kích và các phản bác kiểu "undercut"
sớm để cấu trúc được cập nhật bằng phản biện thay vì trôi dạt do lặp lại. Để xem
các loại nút và quan hệ cụ thể, hãy xem
[Các nút của Đồ thị biện chứng](./dialectical-graph-nodes) và
[Các cạnh của Đồ thị biện chứng](./dialectical-graph-edges).
