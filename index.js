const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/voice', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="he-IL" voice="Google-Hebrew">
    שלום, מדבר סוכן הבינה המלאכותית. איך אפשר לעזור?
  </Say>
</Response>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server ready at port', PORT);
});
