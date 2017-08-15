// npm install moment
const moment = require('moment');
// npm install chalk
const chalk = require ('chalk')

let hour = (moment().format("HH") * 3600);
let min = (moment().format("MM") * 60);
let second = (moment().format("ss") * 1);
let totalSecond = hour + min + second


//set up the day to calulate the days and time and second.
// const day = moment("2017-08-14 h:mm:ss a");

console.log("We are week " + chalk.italic.magentaBright(moment().week()) + " of the year!")

console.log("It is now : " + chalk.bold.blue(moment().week('MMMM Do YYYY, h:mm:ss a')));
// console.log(chalk.white.bgred.bold('Hello world!'));
console.log("It is the : " + chalk.bold.red(moment().dayOfYear()) + " day of year!");

console.log("It is " +  chalk.bold.green(totalSecond)  + " seconds into the day.")
// moment().seconds()

console.log("It " + chalk.bold.cyan("is")  +  " during Daylight Saving Time");

console.log("It " + chalk.red.bold("is not") + " a leap year");
