// Read file
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
   
    console.log('server running.....')
}).listen(8080);

// append file
 
var fs = require('fs');

fs.appendFile('file.txt', ' hello all', function (err) {
    if (err) throw err;
    console.log('append saved!');
});



//write file
var fs = require('fs');

fs.writeFile('file1.txt', 'have a nice day', function (err) {
    if (err) throw err;
    console.log('write file saved!');
});

// delete file

/*var fs = require('fs');

fs.unlink('file2.txt', (err) => {
    if (err) throw err;
    console.log('file deleted');
});
*/