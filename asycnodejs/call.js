var fs = require("fs");
var file = "data.txt";

function ReadFile (err, date) {
    if(err) throw err;
    console.log(data);
}
function status(err, data){
    if(err) throw err;
    if(fs.stat.isFile()){
        fs,readFile(file, "utf8", ReadFile);
    }
}
function fileExists(exists) {
    if(exists)
    fs.stat(file, status);
}
fs.exists(file, fileExists);