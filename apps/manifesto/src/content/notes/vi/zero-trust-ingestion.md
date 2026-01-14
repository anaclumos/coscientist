---
title: Nạp dữ liệu Zero-Trust
description: Giao thức yêu cầu xuất xứ rõ ràng trước khi chấp nhận các khẳng định
sourceLocale: en
sourceHash: a41cfa0d030b
translatedAt: 2026-01-14
---

Nạp dữ liệu zero-trust là một giao thức coi thông tin đầu vào mặc định là chưa
được kiểm chứng. Mọi [khẳng định](./claim) phải kèm theo [xuất xứ](./provenance)
rõ ràng và đi qua bước [xác minh](./verification) trước khi có được thẩm quyền
trong hệ thống tri thức.

Tên gọi này vay mượn từ bảo mật zero-trust: không giả định điều gì là an toàn
cho đến khi được chứng minh. Trong thực tế, điều đó có nghĩa là các khẳng định
mới được đưa vào với trạng thái `tentative`, phải truy vết được tới
[nguồn](./source) và [đoạn bằng chứng](./evidence-span), và nên được đưa qua
[tìm kiếm ưu tiên phản biện](./rebuttal-first-search) trước khi được xem là đã
được xác lập.

Nạp dữ liệu zero-trust là một cơ chế phòng vệ trước [AI slop](./ai-slop) và
[Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown). Khi môi trường bị ngập
trong nội dung nghe có vẻ hợp lý nhưng chưa được kiểm chứng, tư thế an toàn duy
nhất là yêu cầu bằng chứng về nguồn gốc và phải chịu được các thách thức trước
khi chấp nhận.
