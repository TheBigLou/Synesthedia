const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Synesthedia!');
});

app.listen(port, () => {
  console.log(`Synesthedia server listening at http://localhost:${port}`);
});