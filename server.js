const express = require('express');
const app = express();
const server = app.listen(8000);
app.use(express.static('./client'));
var socket = require('socket.io');
var io = socket(server);

io.on('connection',(socket) => {
  

  console.log('Serwer dziala');
});