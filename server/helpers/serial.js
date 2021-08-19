const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;
var str = "";

const enableSerial = () => {
  raspi.init(() => {
    var serial = new Serial();
    serial.open(() => {
      serial.on('data', (data) => getDataSerial(data).then((value) => {
        if(value[value.length-1] == '\n'){
//          process.stdout.write(value); 
          str = "";
	  parseToJSON(value);
        }
      })
      .catch((error) => console.log(error)));
  });
});

const getDataSerial = async (data) => {
  str += data.toString();
  return str;
}

const parseToJSON = async (data) => {
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


