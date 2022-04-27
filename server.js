require('dotenv').config();

/* Server Initialization */
const app = require('express')();
const http = require('http').Server(app);

const cors = require("cors");

/* Socket io Initialization */
const socket = require('./src/socket/');
const io = socket(http);

/* DB initialization */
const mysqlConnector = require("./src/db");
const {insertToDB} = require("./src/db/");

/* Routes Initialization */
const routes = require('./src/routes/');

/* Hardware Connection Initialization*/
const RaspberryPi = require("./src/hardware/");
const raspberry = new RaspberryPi();

/* Read data from RaspberryPi GPIO */
raspberry.readSerial(async (data) => {
	console.log([data]);
 	io.emit('rasp-message', JSON.stringify([data]));
  	try{
		const result = await insertToDB(data);
  		console.log(result);
	}
  	catch(error){
		console.log(error);
  	}
})

app.use(cors());

/* Start Routes */ 
routes(app);

/* Start server listening on 3000*/
http.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})
