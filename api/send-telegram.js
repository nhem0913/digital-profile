module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { BOT_TOKEN, CHAT_ID } = process.env;
  if (!BOT_TOKEN || !CHAT_ID) {
    res.status(500).json({ error: 'Server chưa cấu hình BOT_TOKEN/CHAT_ID.' });
    return;
  }

  const { name, email, message } = req.body || {};
  if (!message || !message.trim()) {
    res.status(400).json({ error: 'Tin nhắn không được để trống.' });
    return;
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

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Lỗi gửi tin nhắn qua Telegram.' });
  }
};