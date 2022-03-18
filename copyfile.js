/**
 *  Create a copy of the file in directory with the name "destination" 
 */
const fs = require('fs');
fs.readFileSync('source/dummy.txt','utf8');
fs.copyFile('source/dummy.txt', 'destination/copied.txt',(err) => {
    if (err) {
        console.log("Error Found:", err);
    }
});