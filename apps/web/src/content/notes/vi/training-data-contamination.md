---
title: Ô nhiễm dữ liệu huấn luyện
description: Nội dung do AI tạo ra làm ô nhiễm các kho ngữ liệu dùng để huấn luyện các mô hình tương lai
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Ô nhiễm dữ liệu huấn luyện xảy ra khi văn bản do AI tạo ra xuất hiện trên web,
bị thu thập vào các kho ngữ liệu huấn luyện, và định hình thế hệ mô hình tiếp theo.
Kết quả là một vòng lặp phản hồi: các mô hình được huấn luyện trên đầu ra của “tiền nhiệm”
sẽ thừa hưởng thiên lệch của chúng, khuếch đại lỗi của chúng, và mất quyền truy cập vào
tín hiệu độc lập từ con người — thứ đã khiến các mô hình ban đầu trở nên hữu ích.

Điều này khác với ô nhiễm benchmark (dữ liệu kiểm thử rò rỉ vào tập huấn luyện)
dù cả hai cùng dùng chữ “ô nhiễm”. Ô nhiễm dữ liệu huấn luyện nói về nguồn gốc
của kho ngữ liệu nền tảng: một khi [rác AI](./ai-slop) trộn lẫn với
văn bản do con người viết trên quy mô lớn, việc phân biệt chúng trở nên tốn kém hoặc bất khả thi.
Các lần thu thập dữ liệu từ web sau năm 2022 ngày càng đáng ngờ.

Hệ quả sẽ chồng chất. [Sụp đổ mô hình](./model-collapse) mô tả sự suy giảm chất lượng
khi mô hình huấn luyện trên dữ liệu tổng hợp : các phân phối bị thu hẹp,
các chế độ hiếm biến mất, và đầu ra hội tụ về một mức trung bình đồng nhất.
[Khủng hoảng bách khoa toàn thư](./encyclopedia-meltdown) mô tả sự thất bại của hệ thống tri thức
khi đầu ra AI được trích dẫn như nguồn, tạo ra thẩm quyền vòng tròn .
Ô nhiễm dữ liệu huấn luyện là nguyên nhân thượng nguồn của cả hai.

Sự tương đồng với [thép nền thấp](./low-background-steel) làm rõ vấn đề.
Thử nghiệm hạt nhân đã làm ô nhiễm toàn bộ thép sau năm 1945; sự bùng nổ LLM đã làm ô nhiễm
toàn bộ văn bản web sau năm 2020. Cả hai sự kiện ô nhiễm đều không thể đảo ngược,
cả hai tạo ra nhu cầu về [tài nguyên tiền-ô-nhiễm](./pre-contamination-resource),
và cả hai đều có nghĩa là để tiếp tục phát triển công nghệ thì cần những vật liệu được tạo ra
trước khi công nghệ đó tồn tại.

Các giải pháp bao gồm xác minh [nguồn gốc](./provenance) , các kho lưu trữ
được giới hạn theo mốc thời gian, và các thực hành tuyển chọn dữ liệu ưu tiên những nguồn có
chuỗi tác giả con người rõ ràng. Sáng kiến Data Provenance Initiative của MIT và các nỗ lực tương tự
nhằm mang lại tính minh bạch cho nguồn gốc dữ liệu huấn luyện — một bước cần thiết nếu các mô hình tương lai
muốn tránh việc huấn luyện trên chính “phản chiếu” của mình.
