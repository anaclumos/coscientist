---
title: Trôi dạt hệ thống
description: Sự suy thoái của các hệ thống tri thức do tự nhiễm bẩn hoặc bị sao nhãng
---

Trôi dạt hệ thống là nhóm [hiện tượng trôi dạt](./drift-phenomena) mà trong đó chính hệ thống tri thức suy giảm theo thời gian, độc lập với các thay đổi về ngữ nghĩa hoặc môi trường.

## Các dạng

- [Sụp đổ mô hình](./model-collapse) — suy thoái do huấn luyện trên dữ liệu do AI tạo ra
- [Sửa lỗi vs Trôi dạt](./correction-vs-drift) — khi việc sửa lỗi tốn kém hơn là để chúng lan truyền

## Vì sao quan trọng

Trôi dạt hệ thống là một kiểu thất bại mà trong đó hệ thống tri thức ổn định quanh một trạng thái giả "được duy trì xấp xỉ". Sai sót tồn tại dai dẳng vì chi phí sửa chữa cao; nội dung do AI tạo ra làm nhiễm bẩn dữ liệu huấn luyện; và hệ thống dần mất liên hệ với chân lý nền tảng .

[Suy sụp bách khoa](./encyclopedia-meltdown) là dạng cực đoan: khi AI chủ động đứng ra viết, [ranh giới trách nhiệm](./responsibility-line) biến mất, và hệ thống trôi dạt về phía sụp đổ tự tham chiếu. Biện pháp phòng thủ là [tầng giao thức nhận thức luận](./epistemic-protocol-layer): giữ cho việc sửa lỗi rẻ hơn trôi dạt thông qua [khả năng truy vết](./traceability), [nạp dữ liệu zero-trust](./zero-trust-ingestion), và [tìm kiếm ưu tiên phản biện](./rebuttal-first-search).

## Liên quan

- [Hiện tượng trôi dạt](./drift-phenomena) — danh mục cha
- [Trôi dạt ngữ nghĩa](./semantic-drift) — khi ý nghĩa thay đổi
- [Trôi dạt môi trường](./environmental-drift) — khi thế giới thay đổi
- [Thoái hóa não bộ trong thể chế](./institutional-brain-rot) — tương tự ở cấp tổ chức
