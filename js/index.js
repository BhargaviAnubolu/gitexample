const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

if (process.argv != 3) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else {
    targetTimeZone = process.argv[2];
}


const targetTimeZone = "Europe/Paris";
console.log(process.argv);

console.log('The time at the ${targetTimeZone} timezone is ${moment().tz(targetTimezone).format()}');