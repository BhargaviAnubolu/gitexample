
function fetchData(cb) {
    setTimeout(()=>{
       let data={pcode:'2001',pName:'orange'};
        cb(data);
    },2000)

}
console.log("Starts here");
fetchData(function(data){
    console.log(data);
    console.log("Ends here");
});


   



