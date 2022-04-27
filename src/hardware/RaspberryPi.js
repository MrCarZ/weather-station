const raspi = require("raspi");
const Serial = require("raspi-serial").Serial;
const {parseToJSON} = require("../helpers/");

class RaspberryPi {

  constructor(){
    this.serial = new Serial();
    this.raspiberry = raspi;
    this.serialString = "";
  }

  set newString(newString){
    this.serialString = newString;
  };

  readSerial = (callback) => {
    this.raspiberry.init(() => {
      this.serial.open(() => {
        this.serial.on("data", (data) =>
         this.handleDataSerial(data)
            .then((value) => {
              if (value[value.length - 1] == "\n") {
                this.serialString = "";
		parseToJSON(value).then(callback)
}	
            })
            .catch((error) => console.log(error))
        );
      });
    });
  };

  handleDataSerial = async (data) => {
    this.serialString += data;
    return this.serialString;
  };
}

module.exports = RaspberryPi;
