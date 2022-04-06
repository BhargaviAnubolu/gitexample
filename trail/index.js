const moment = require('moment-timezone');
moment.tz.setDefault('America/Los_Angeles');

const targetTimeZone = " Europe/Paris";

console.log(moment().tz(targetTimeZone).format());