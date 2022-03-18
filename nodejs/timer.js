let x = () => console.log("in time")
let y = () => console.log("out time")
let a = setTimeout(x, 3000)
let b = setTimeout(y,4000)
 
setTimeout(function() {
    console.log("first");
},1000);

setTimeout(() => { console.log("second")},2000);

//setInterval(() => { console.log("hello")}, 2000)
  
  