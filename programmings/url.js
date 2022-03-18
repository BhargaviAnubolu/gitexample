
let url = require('url');

let address = 'http://localhost:8080/default.htm?year=2017&month=february';

let q = url.parse(address,true);
console.log(q.host);  // returns 'localhost:8080'
console.log(q.pathname); //return '/default.htm'
console.log(q.search); //return '?year=2017&month=february'
let qdata = q.query;//return an object; { year: 2017, month: 'february'}

console.log(qdata.month); // return 'february'
