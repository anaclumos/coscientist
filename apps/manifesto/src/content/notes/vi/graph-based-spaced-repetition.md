---
title: Lặp lại ngắt quãng dựa trên đồ thị
description: Dùng tuổi của khẳng định hoặc tuổi phản biện để kích hoạt việc tái xác minh
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

Lặp lại ngắt quãng dựa trên đồ thị áp dụng các nguyên lý của
[lặp lại ngắt quãng](./spaced-repetition) vào việc bảo trì tri thức: các
[khẳng định](./claim) chưa được xác minh gần đây, hoặc những khẳng định mà bằng
chứng hỗ trợ không bị thách thức trong một thời gian, sẽ được đưa lên để xem xét
lại.

Điểm mấu chốt là tri thức, giống như ký ức, sẽ suy giảm nếu không được tương tác
chủ động. Một khẳng định được xác minh cách đây ba năm có thể không còn đúng nếu
thế giới đã thay đổi ([tính không dừng](./nonstationarity)), nếu các định nghĩa
đã dịch chuyển ([trôi dạt định nghĩa](./definition-drift)), hoặc nếu xuất hiện
các [phản ví dụ](./counterexample) mới.

Trong một [Đồ thị Biện chứng](./dialectical-graph), có thể triển khai điều này
bằng cách theo dõi dấu thời gian xác minh gần nhất cho mỗi khẳng định và các
đường hỗ trợ của nó. [Toán tử](./operator) được nhắc tái xác minh các khẳng định
theo lịch, với các khoảng thời gian giãn ra đối với những khẳng định vững chắc
và co lại đối với những khẳng định đang bị tranh chấp.
