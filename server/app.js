const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Welcome to Express');
});

const port = process.env.PORT || 3000;   // EB injects PORT
const host = '0.0.0.0';                  // listen on all interfaces
app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

module.exports = app;
