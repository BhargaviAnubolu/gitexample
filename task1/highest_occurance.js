//const fs = require('fs');
// fs.readFile('./dummy.txt', 'utf8', (err, arr) => {
    const fs = require('fs');
    fs.readFileSync('source/dummy.txt','utf8');

    let itemsMap = {};
    let maxValue = 0;
    let maxCount = 0;
    for (let item of 'dummy.txt') { 
      if (itemsMap[item] == null) {
        itemsMap[item] = 1;
      } else {
        itemsMap[item]++;
      }
      if (itemsMap[item] > maxCount) {
        maxValue = item;
        maxCount = itemsMap[item];
      }
    }
    console.log(`Highest Occurance : ${maxValue}, Count : ${maxCount}`);
/*
var temp = {};

for(let i=0;i < data.length; i++){
    if(temp[data[i]]==undefined){
       temp[data[i]]=1;
    }else{
        temp[data[i]]+=1;
    }
}
 
var max=0, maxEle;

for(const i in temp){
    if(temp[i]>max){
        max = temp[i];
        maxEle=i;
    }
}
 
console.log(`highest occurred is: ${maxEle} and number of times is= ${max}`);
});
*/