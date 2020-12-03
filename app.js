const http = require('http');
const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.sendfile(path.join(__dirname, './index.html'));
});

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, (err) => {
  if (err) {
    console.log('Cos nie tak');
  } else {
    console.log('Server slucha');
  }
});
