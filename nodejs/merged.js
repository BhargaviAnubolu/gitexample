//callbacks

step(10, function(result,error){
    if(!error){
       return result;
    }
});
function step(value,callback) {
 let result = callback(value + 10,false); 
 console.log('callback:',result);
}  


//promises

function step1(value, error) {
    return new  Promise((resolve,reject) =>{
        if(!error) {
            resolve(value + 20);
        } else {
            reject("something went wrong");
        }
    });
}
 
step1(10,false)
.then((result) => console.log('promises: ',result))
.catch((error) => console.log(error));

//async and awiat

function step1(value, error) {
    return new Promise((resolve, reject) => {
        if(!error) {
            resolve(value + 10);
        } else {
            reject('Something wrong');
        }
    });
}
async function result() {
    let result1 = await step1(10, false);
    console.log('asyn-await: ',result1);
    return result1;
}
console.log(result());
console.log("hello");


