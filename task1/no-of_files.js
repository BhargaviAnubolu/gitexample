/**
 * Count number of files in directory
 */
 
 const fs = require('fs');
const dir = './directory';

fs.readdir(dir, (err, files) => {
  console.log("number of files :",'./task1'.length);
});
