/**
 * Create a copy of the file in directory with the name "destination" 
 */
const fs = require('fs');
fs.readFileSync('source/dummy.txt','utf8');
fs.copyFile('source/dummy.txt', 'destination/copied.txt',(err) => {
    if (err) {
        console.log("Error Found:", err);
    }
});

/** 
 * Printing number of lines in the file
 */
fs.readFile('source/dummy.txt', 'utf8', (err, data) => {
    console.log("Number of lines: ", data.split('\n').length)
});

/**
 * printing count number of words in the file
 */
 const data=fs.readFileSync('source/dummy.txt','utf8');
 var wordCount = data.match(/(\w+)/g).length;
 console.log('count number of words:', wordCount);
 
/**
 * printing occurances in the file with number of count
 */
 fs.readFile('source/dummy.txt','utf8',(err,data)=>{
    if(err)
        console.log("The text file is empty");
 console.log(findMostRepeatedWord(data));
 });
 function findMostRepeatedWord (str) 
 {
     
     let words = str.match(/\w+/g);
     //console.log(words); 
      let occurances = {};
      for (let word of words) {
          if (occurances[word]) {
              occurances[word]++;
            } else {
                occurances[word] = 1;
            }}
                 
            let max = 0;let mostRepeatedWord = '';
            for (let word of words) {
                if (occurances[word] > max) {max = occurances[word];
                    mostRepeatedWord = word;}
            }
return  mostRepeatedWord;
}

/**
 * Count number of files in directory
 */
 function filesinDirectory() {
    const dir = '/Users/bhargavi.anubolu/OneDrive-Accenture'
    console.log("number of files in directory ", fs.readdirSync(dir).length);

}
filesinDirectory();

/**
 * Printing  total memory used
 */ 
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);// IN MegaBytes