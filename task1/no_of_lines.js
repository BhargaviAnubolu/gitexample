
/** 
 * Printing number of lines in the file
 */
 const fs = require('fs');
 fs.readFile('source/dummy.txt', 'utf8', (err, data) => {
    console.log("Number of lines: ", data.split('\n').length)
});
