---
title: Chiến lược khám phá
description: Các chiến lược duyệt đồ thị cho việc khám phá tri thức liên tục
---

[Coscientist](./coscientist) cần một bộ máy không chỉ truy hồi; nó liên tục tìm kiếm các cách tiếp cận mới bằng cách chủ động làm lộ ra các mâu thuẫn, điều kiện biên, và sự phụ thuộc vào phương pháp trong [Đồ thị Biện chứng](./dialectical-graph).

Một chiến lược là tìm kiếm ưu tiên phản ví dụ (counterexample-first search): mức độ phổ biến được xem ít như bằng chứng về chất lượng và nhiều hơn như bằng chứng về rủi ro. Một khẳng định càng được lặp lại rộng rãi, thì việc thu thập phản ví dụ và điều kiện biên càng trở nên có giá trị, bởi sự nhiễm bẩn từ các khẳng định phổ biến có bán kính tác động lớn hơn trong [Sự sụp đổ Bách khoa thư](./encyclopedia-meltdown).

Một chiến lược khác là tìm kiếm lát cắt tối thiểu của mâu thuẫn (contradiction minimum-cut search). Khi các cụm khẳng định xung đột, hệ thống tìm tập tối thiểu các tiền đề và quan hệ tạo ra xung đột, rồi nhắm cấu trúc đó để suy ngẫm. Thời gian của con người được đầu tư vào [tập mâu thuẫn tối thiểu](./minimum-contradiction-set), trong khi AI xử lý việc tìm kiếm diện rộng, sinh ứng viên, và tính toán [lát cắt tối thiểu](./minimum-cut).

Phát hiện trôi dạt định nghĩa (definition drift detection) coi ý nghĩa như một đối tượng chuyển động. Khi định nghĩa của một thuật ngữ dịch chuyển theo thời gian hoặc giữa các cộng đồng, đồ thị ghi nhận thay đổi đó một cách tường minh (xem [trôi dạt định nghĩa](./definition-drift)) thay vì giả định một khái niệm dùng chung, qua đó khắc phục một chế độ thất bại thường gặp của [RAG](./rag-limitations).

Xác minh sự liên kết phương pháp–kết luận (method–conclusion coupling verification) gom cụm các khẳng định theo phương pháp thay vì theo kết luận, vì các kết luận khác nhau có thể chia sẻ cùng một lỗi và các kết luận giống hệt nhau có thể dựa trên những nền tảng rất khác nhau. Tách biệt đường dẫn tái lập (replication path separation) cũng tương tự khi tránh “bỏ phiếu theo đa số” bằng cách hỏi liệu sự ủng hộ đến từ các đường dẫn độc lập hay chỉ là các lần diễn đạt lại lặp đi lặp lại.

Những hành vi này được hiện thực hóa như các tác tử chuyên biệt, bao gồm chuẩn hóa khẳng định, trích xuất giả định ẩn, phát hiện xung đột định nghĩa, tìm kiếm phản ví dụ, tối thiểu hóa đường dẫn lập luận, tái dựng phạm vi, sinh giả thuyết thay thế, và thiết kế chiến lược kiểm chứng. Sự phân rã này khiến công việc suy ngẫm trở nên tường minh và có thể kiểm tra.