const fecha = require("fecha");

const date = new Date();
console.log(date);
console.log("->")

const formated = fecha.format(date, 'YYYY-MM-DD hh:mm:ss');

console.log(formated);
