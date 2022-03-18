//Named functions
/*function addNum(a,b){
    console.log("hello");
     return a+b;
}
console.log(addNum(3,2));
var sum = addNum(2,3);
console.log(sum);
addNum(2,3);*/

 //anonymous function
  /*var anon=function (a,b){
      console.log(" anonymous function is called");
      return a+b;
  }
  anon(5,4);
  setTimeout(function(){console.log("anonymous function call in setTimeout")},3000);*/


  //constructors
 /* var cons=new Function("a","b","console.log('in constructors function');return a+b;");
  console.log(cons(4,5));*/

  //self-invoking functions
 (function (a,b){
     console.log("Self-invoking");
     return a+b;
 })(3,2);
