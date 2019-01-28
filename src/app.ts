import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('[💁]: Hello from Express, running on port 3000!');
});
