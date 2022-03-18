
const fs=require('fs')
fs.readFile('image.jpg',(err,data) => {
    if(err)
    console.log("Something went wrong");

fs.writeFile('image1.jpg',data,err => {
    if(err)
    console.log("Something went wrong");
    else
    console.log('uploaded');

});

});