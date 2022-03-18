/**
 * Printing  total memory used
 */ 
 const fs = require('fs');
 fs.readFileSync('source/dummy.txt','utf8');
 const used = process.memoryUsage().heapUsed / 1024 / 1024;
 console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);// IN MegaBytes