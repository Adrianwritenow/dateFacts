const chalking  = require('chalk');
const moment = require('moment');

var line1 =  moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var line2 =  moment().format("DDDo");
var line3b = moment();
var line3a = moment("0:00:00","HH:mm:ss");
var line3 = line3b.diff(line3a, 'seconds');


if (moment().isDST()) {
  line4 = "is"

}else{
  var line4 = "is not";
}
if (moment().isLeapYear()) {
  line5 = "is"

}else{
  var line5 = "is not";
}


function currentDate(){
  console.log(chalking `It is, {blueBright ${line1}}.`);
  console.log(chalking `It is the {magenta ${line2}} day of the year.`);
  console.log(chalking `It is {cyan ${line3}} seconds into the day.`);
  console.log(chalking`It {green ${line4}} during daylight savings time.`);
  console.log(chalking`It {red ${line5}} a leap year.`);


}
currentDate();
