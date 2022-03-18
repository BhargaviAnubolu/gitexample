const fs=require('fs')

fs.readFile('image.jpg',function(err,data){

    if(err)

    console.log("Something went wrong");

fs.writeFile('copied.jpg',data,err=>{

    if(err)

    console.log("Something went wrong");

    else

    console.log('Data Written');

});

});