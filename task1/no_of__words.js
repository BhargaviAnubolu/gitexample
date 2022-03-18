/**
 * printing count number of words in the file
 */
 const fs = require('fs');
 const data=fs.readFileSync('source/dummy.txt','utf8');
 var wordCount = data.match(/(\w+)/g).length;
 console.log('count number of words:', wordCount);
 