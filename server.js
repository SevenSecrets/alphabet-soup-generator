const express = require('express');
const generator = require('./alphabet-generator');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(generator()))

app.listen(port, () => console.log('Server listening at port', port))

module.exports = app;
