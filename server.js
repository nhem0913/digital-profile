const express = require('express');
const path = require('path');
require('dotenv').config();

const { BOT_TOKEN, CHAT_ID, PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/send-telegram', async (req, res) => {
    if (!BOT_TOKEN || !CHAT_ID) {
        return res.status(500).json({ error: 'Server chưa cấu hình BOT_TOKEN/CHAT_ID.' });
    }

    const { name, email, message } = req.body;
    if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Tin nhắn không được để trống.' });
    }

    const text = `📩 Digital Profile - tin nhắn mới\n` +
        `Tên: ${name || 'Khách'}\n` +
        `Email: ${email || 'Chưa cung cấp'}\n\n` +
        `Nội dung:\n${message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.description || 'Lỗi khi gửi Telegram');
        }

        res.json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: error.message || 'Lỗi gửi tin nhắn qua Telegram.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
    console.log('Mở file HTML của bạn qua server để gửi tin nhắn Telegram.');
});
