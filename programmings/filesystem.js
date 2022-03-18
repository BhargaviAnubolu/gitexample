var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  /*fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});*/

   /* fs.appendFile('test.txt', 'appending - thank you', (err) => {
      if (err) throw err;
      console.log('saved');
    }); */
    var fs = require('fs');
    fs.open('test2.txt', ' thank you', (err,file) => {
      if (err) throw err;
      console.log('saved!');
    });
      //  fs.writeFile('test.txt', 'overrided- thank you', (err,data) => {
       /* fs.unlink('test.txt', (err) => {
            if (err) throw err;
            console.log('file deleted');})*/
   /* res.write(data);
    return res.end();
    });*/
    console.log('server running.....')
}).listen(8080);