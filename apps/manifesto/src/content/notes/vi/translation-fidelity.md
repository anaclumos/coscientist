---
title: Độ trung thực của bản dịch
description: Bảo toàn ý nghĩa và độ chính xác khi vượt qua ranh giới ngôn ngữ
sourceLocale: en
sourceHash: 5b698486c4d0
translatedAt: 2026-01-14
---

Độ trung thực của bản dịch là mức độ mà nội dung được dịch bảo toàn ý nghĩa, sắc
thái và độ chính xác của bản gốc. Độ trung thực cao không chỉ là đúng từ ngữ mà
còn là đúng khái niệm, ngữ cảnh và các hàm ý. Độ trung thực thấp nghĩa là bản
dịch về mặt kỹ thuật có chuyển tải văn bản nhưng làm mất hoặc bóp méo điều mà nó
thực sự muốn nói.

Đối với tầm nhìn của [Sunghyun Cho](./sunghyun-cho) về
[xuyên qua các Sprachraums](./across-the-sprachraums), độ trung thực của bản
dịch là một mối quan tâm hàng đầu. Dịch máy giúp nội dung đa ngôn ngữ trở nên
khả thi ở quy mô lớn, nhưng việc mù quáng tin vào đầu ra tự động dẫn đến
[mất sắc thái trong bản dịch](./translation-nuance-loss).
[Dự án PIRI](./project-piri) đã cố gắng giải quyết điều này cho tài liệu dành
cho lập trình viên bằng cách xử lý cẩn thận các thuật ngữ kỹ thuật và tinh chỉnh
bởi cộng đồng—nhưng đã bị hủy khi các tác nhân lập trình AI khiến việc hỗ trợ
trực tiếp bằng bất kỳ ngôn ngữ nào hiệu quả hơn so với việc dịch tài liệu tiếng
Anh.

Bài học từ [Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown) áp dụng trực
tiếp: nếu người dùng cho rằng bản dịch tự động luôn có thẩm quyền, họ có thể
chấp nhận những thông điệp bị bóp méo mà không nghi ngờ. Cũng như
[cái bẫy trôi chảy](./fluency-trap) khiến văn xuôi AI mượt mà trông có vẻ chính
xác, một bản dịch trôi chảy có thể che giấu những lỗi tinh vi, rồi tích lũy và
khuếch đại theo thời gian.

[Nhà đồng khoa học](./coscientist) giải quyết điều này bằng cách coi các khẳng
định đã được dịch là cần cùng mức [xác minh](./verification) như bất kỳ đầu vào
nào khác. [Khả năng truy xuất nguồn gốc](./traceability) phải bao gồm ngôn ngữ
nguồn và phương pháp dịch, để có thể lần theo và sửa lỗi khi được phát hiện.
