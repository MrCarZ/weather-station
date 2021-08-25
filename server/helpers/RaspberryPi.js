const raspi = require("raspi");
const Serial = require("raspi-serial").Serial;
const parseToJSON = require("./parseToJSON");

class RaspberryPi {

  constructor(){
    this.serial = new Serial();
    this.raspiberry = raspi;
    this.serialString = "";
  }

  set newString(newString){
    this.serialString = newString;
  };

  readSerial = () => {
    this.raspiberry.init(() => {
      this.serial.open(() => {
        this.serial.on("data", (data) =>
          getDataSerial(data)
            .then((value) => {
              if (value[value.length - 1] == "\n") {
                //process.stdout.write(value);
                this.newString("");
                return parseToJSON(value);
              }
            })
            .catch((error) => console.log(error))
        );
      });
    });
  };

  getDataSerial = async (data) => {
    this.newString(this.serialString + data);
    return this.serialString;
  };
}

module.exports = RaspberryPi;