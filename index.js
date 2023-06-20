const express = require('express');
const app = express();
const port = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.get('/healthz', (req, res) => {
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
