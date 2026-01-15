---
title: Tách biệt đường dẫn sao chép
description:
  Hỏi xem sự ủng hộ đến từ các đường dẫn độc lập hay từ việc lặp lại cùng một
  khẳng định
sourceLocale: en
sourceHash: b898029feac1
translatedAt: 2026-01-14
---

Tách biệt đường dẫn sao chép là thực hành đặt câu hỏi liệu sự đồng thuận có vẻ
như giữa các nguồn phản ánh bằng chứng độc lập hay chỉ là những lần lặp lại của
cùng một khẳng định nền tảng. Sự đồng thuận của số đông không phải là bằng chứng
mạnh nếu tất cả các nguồn đồng ý đều lần về một nguồn gốc duy nhất.

Đây là một cơ chế phòng vệ then chốt chống lại
[Tan chảy bách khoa](./encyclopedia-meltdown), nơi nội dung do AI tạo ra có thể
tự trích dẫn chính nó thông qua các trung gian, tạo ra ảo giác về đồng thuận từ
sự khuếch đại vòng tròn. Tách biệt đường dẫn đặt câu hỏi: "Có bao nhiêu đường
dẫn thực sự độc lập dẫn tới kết luận này?"

Trong một [Đồ thị Biện chứng](./dialectical-graph), việc tách biệt đường dẫn
được hỗ trợ bởi [nguồn gốc](./provenance) được mô tả tường minh và các cạnh
`cites`. Hệ thống có thể lần vết sự hậu thuẫn cho một khẳng định về lại các
[nguồn](./source) ban đầu và phát hiện khi sự sao chép bề ngoài thực chất chỉ là
lặp lại.
