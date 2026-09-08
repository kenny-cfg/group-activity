const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello!'});
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})