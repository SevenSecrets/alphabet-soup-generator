const express = require('express');
const generator = require('./alphabet-generator');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(200)
})

app.get('/generate', (req, res) => {
  res.send(generator())
})

http.listen(port, () => console.log('Server listening at port', port))

module.exports = app;
