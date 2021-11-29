/* Server Initialization */
const app = require('express')();
const http = require('http').Server(app);

/* Socket io Initialization */
const socket = require('./socket/');
const io = socket(http);

/* Routes Initialization */
const { routes } = require('./routes/');

/* Hardware Connection Initialization*/
const RaspberryPi = require("./hardware/");
const raspberry = new RaspberryPi();

/* Read data from RaspberryPi GPIO */
raspberry.readSerial((data) => {
  console.log(data);
  io.emit('rasp-message', data);
})

/* Start Routes */ 
routes(app);

/* Start server listening on 3000*/
http.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})

