const express = require('express');
const generator = require('./alphabet-generator');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(200)
})

app.listen(port, () => console.log('Server listening at port', port))

module.exports = app;
