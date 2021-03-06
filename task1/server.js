const http = require('http');
//const read_file = require('./read_file');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
function fileAnalysis(name){
const server = http.createServer((req, res) => {
    var copy_file = require('./copyfile');
    var count_words = require('./no_of_words');
    var count_lines = require('./no_of_lines');
    var most_occurence = require('./highest_occurence');
    var no_of_files= require('./no-of_files');
   // var no_of_directories= require('./no_of_directories');
    var memory_used = require('./total_memory');
    //var read_file = require('../Text File Analysis/read_file');
    const data= read_file("source/"+name);
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<center><h2>${copy_file("source/"+name, "destination/copy_"+name)}</h2>`+
    `<h2>Number of words in the file: ${count_words(data)}</h2>`+
    `<h2>Number of lines in the file: ${count_lines(data)}</h2>`+
    `<h2> ${most_occurence(data)}</h2>`+
    `<h2>Number of files in path: ${no_of_files("C:/Users/praneeth.sai.chippa/JavaScript/Project1")}</h2>`+
    `<h2>Number of directories in path: ${no_of_directories("C:/Users/praneeth.sai.chippa/JavaScript/Project1")}</h2>`+
    `<h2>Memory used: ${memory_used()}</h2></center>`)
})
const port = 8080
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})
}
fileAnalysis("dummy.txt")