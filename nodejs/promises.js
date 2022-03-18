function step1(value, error) {
    return new  Promise((resolve,reject) =>{
        if(!error) {
            resolve(value + 10);
        } else {
            reject("something went wrong");
        }
    });
}
  
function step2(value, error) {
    return new  Promise((resolve,reject) =>{
        if(!error) {
            resolve(value + 10);
        } else {
            reject("something went wrong");
        }
    });
}
  
function step3(value, error) {
    return new  Promise((resolve,reject) =>{
        if(!error) {
            resolve(value + 10);
        } else {
            reject("something went wrong");
        }
    });
}
 
step1(10,false)
.then((result1) => step2(result1, false))
.then((result2) => step3(result2, false))
.then((result3) => console.log(result3))
.catch((error) => console.log(error));

