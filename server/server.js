const app = require('express')();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

const RaspberryPi = require("./hardware/");
const raspberry = new RaspberryPi();

raspberry.readSerial((data) => {
  console.log(data);
  io.emit('rasp-message', data);
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
  io.emit('rasp-message', "socket working! :D");
  console.log('a user connected');
});

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

