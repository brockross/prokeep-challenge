const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('hey buddy');
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})
