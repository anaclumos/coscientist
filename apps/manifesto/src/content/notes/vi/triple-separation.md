---
title: Phân tách ba lớp
description:
  Quy tắc kiến trúc tách biệt văn bản thô, các khẳng định đã chuẩn hoá và các
  quan hệ tường minh
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Phân tách ba lớp là quy tắc kiến trúc trong một
[Đồ thị biện chứng](./dialectical-graph) nhằm giữ ba tầng riêng biệt: văn bản
gốc được bảo toàn dưới dạng các [đoạn bằng chứng](./evidence-span) có thể trích
dẫn; các [khẳng định](./claim) được phân rã thành các
[mệnh đề chuẩn hoá](./normalized-proposition); và các quan hệ được lưu dưới dạng
các ràng buộc lập luận tường minh (xem
[Các cạnh của Đồ thị biện chứng](./dialectical-graph-edges)).

Sự phân tách này ngăn một chế độ lỗi phổ biến trong [RAG](./rag-limitations):
cắt cụt đoạn trích. Khi văn bản được truy hồi và tóm tắt mà không bảo toàn cách
diễn đạt nguyên bản, việc quy gán có thể biến mất một cách âm thầm. Phân tách ba
lớp đảm bảo rằng bạn luôn có thể truy vết một khẳng định về đúng những từ ngữ
chính xác và [nguồn](./source) đã tạo ra chúng.

Nó cũng cho phép [tổng hợp tri thức](./knowledge-synthesis) bằng cách khiến cấu
trúc có thể truy vấn. Bạn có thể hỏi "điều gì phản bác khẳng định này?" hoặc
"khẳng định này dựa vào những định nghĩa nào?" vì các quan hệ đó được lưu trữ,
chứ không chỉ ngụ ý.
