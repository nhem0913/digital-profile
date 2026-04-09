# Digital Profile

Trang web Digital Profile đã được chuẩn bị sẵn để deploy miễn phí lên Vercel.

## File quan trọng
- `index.html`: giao diện profile chính
- `api/send-telegram.js`: hàm serverless gửi tin nhắn Telegram
- `package.json`: cấu hình dự án
- `.env`: chứa `BOT_TOKEN`, `CHAT_ID`, `PORT` (không đẩy lên GitHub)

## 1. Cài Git (nếu chưa có)
- Tải Git cho Windows: https://git-scm.com/download/win
- Mở PowerShell mới sau khi cài xong.

## 2. Push code lên GitHub
1. Tạo repo mới trên GitHub: `digital-profile` (hoặc tên khác).
2. Mở PowerShell tại `d:\VS Code`.
3. Chạy script sau nếu Git đã cài:

```powershell
cd "d:\VS Code"
.\deploy-github.ps1
```

4. Nhập URL repo GitHub khi được yêu cầu, ví dụ:
```
https://github.com/nhem0913/digital-profile.git
```

## 3. Deploy lên Vercel miễn phí
1. Vào https://vercel.com
2. Đăng nhập bằng GitHub
3. Nhấn `New Project`
4. Chọn repo `digital-profile`
5. Chọn `Import` để deploy

## 4. Cấu hình biến môi trường trên Vercel
1. Vào `Settings` -> `Environment Variables`
2. Thêm giá trị:
- `BOT_TOKEN` = `8575934835:AAF4wXDbh48pyYhTS6pEqLememtt1IAYC-g`
- `CHAT_ID` = `8779933252`
- `PORT` = `3000`

## 5. Link chia sẻ
- Sau khi deploy xong, Vercel sẽ cấp link công khai dạng `https://your-app-name.vercel.app`
- Đó là link bạn chia sẻ cho bạn bè.

## Lưu ý
- `.env` chỉ dùng cho chạy local, không đẩy lên GitHub.
- Nếu muốn sửa nội dung, chỉnh `index.html` và push lại.
