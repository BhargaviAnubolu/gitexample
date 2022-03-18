
var fs = require('fs');
fs.writeFileSync('test.txt', 'hello all');
fs.appendFileSync('test1.txt', 'hello ');

const data=fs.readFileSync('file.txt','utf8');
console.log(data);