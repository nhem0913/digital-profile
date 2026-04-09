# Digital Profile

Trang web Digital Profile đã được chuẩn bị sẵn để deploy lên Railway.

## File quan trọng
- `BaiTapDauTien.html`: giao diện profile
- `server.js`: backend Express gửi tin nhắn Telegram
- `package.json`: cấu hình dự án
- `.env`: chứa `BOT_TOKEN`, `CHAT_ID`, `PORT` (không đẩy lên GitHub)

## 1. Cài Git (nếu chưa có)
- Tải Git cho Windows: https://git-scm.com/download/win
- Mở PowerShell mới sau khi cài xong.

## 2. Push code lên GitHub
1. Tạo repo mới trên GitHub: `digital-profile` (hoặc tên khác)
2. Mở PowerShell tại `d:\VS Code`
3. Chạy:

```powershell
cd "d:\VS Code"
.\deploy-railway.ps1
```

4. Khi script hỏi, nhập URL repo GitHub của bạn, ví dụ:
```
https://github.com/nhem0913/digital-profile.git
```

## 3. Deploy lên Railway
1. Vào https://railway.app
2. Đăng nhập bằng GitHub
3. Chọn `New Project` -> `Deploy from GitHub repo`
4. Chọn repo `digital-profile`

## 4. Cấu hình biến môi trường trên Railway
Trong Railway, mở trang `Variables` và thêm:
- `BOT_TOKEN` = `8575934835:AAF4wXDbh48pyYhTS6pEqLememtt1IAYC-g`
- `CHAT_ID` = `8779933252`
- `PORT` = `3000`

## 5. Link chia sẻ
- Sau khi deploy xong, Railway sẽ cung cấp link công khai.
- Đó là link bạn dùng để chia sẻ cho bạn bè.

## Lưu ý
- `.env` chỉ dùng cho chạy local, không cần đẩy lên GitHub.
- Nếu muốn sửa nội dung, chỉnh `BaiTapDauTien.html` và push lại.
