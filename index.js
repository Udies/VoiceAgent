const express = require('express');
const app = express();

app.get('/voice', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Start>
      <Stream url="wss://your-server.com/ws" />
    </Start>
    <Say language="he-IL" voice="Google-Hebrew">שלום, מדבר סוכן הבינה המלאכותית. איך אפשר לעזור?</Say>
  </Response>`);
});

app.listen(3000, '0.0.0.0', () => console.log('Server ready at http://localhost:3000'));