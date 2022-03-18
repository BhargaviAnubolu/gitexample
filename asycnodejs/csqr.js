/*function cSqr(n,cd) {
    setTimeout(() =>{
        cd (n*n)
    })
}
 cSqr(2,function(res){
console.log(res);
 })*/
 let fs
 fs.readFile('/Asyn.js', (err, data) => {
    if (err) {
      //handle error
      console.log(err)
      return
    }
  
    //no errors, process data
    console.log(data)
  })
  