//named function
function nCalSquqre(a){
    return a*a;
}

console.log("calling named function:"+nCalSquqre(8));

//anonymous function
var aCal=function(b){
    return b*b;
}
console.log("calling anonymous function:"+aCal(7));

//constructor function
var aCal=new Function("a","return a*a;");
console.log("calling constructor function:"+aCal(3));

//self invoking function
(function(a){
    console.log("calling self invoking function:"+a*a);
    return a*a;
})(6);