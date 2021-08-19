const app = require('express')();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;

var str = "";

raspi.init(() => {
  var serial = new Serial();
  serial.open(() => {
      serial.on('data', (data) => getDataSerial(data).then((value) => {
        if(value[value.length-1] == '\n'){
//          process.stdout.write(value); 
          str = "";
          io.emit('rasp-message', parseToJSON(value));
        }
      })
      .catch((error) => console.log(error)));
  });
});

const getDataSerial = async (data) => {
  str += data.toString();
  return str;
}

const parseToJSON = (data) => {
  const newLine = data.split(',');
  const dataAsObject = {};  
  const properties = newLine[0] == 1 ?
  ['type', 'year', 'month', 'day', 'hour', 'minute', 'second', 'temperature', 'pressure', 'humidity']
  :
  ['type', 'year', 'month', 'day', 'hour', 'minute', 'second', 'microssecond'];
  
  properties.map((value, index) => {
   dataAsObject[value] = newLine[index] !== undefined ? Number(newLine[index]) : null;
  })
  return JSON.stringify(dataAsObject);
}

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

