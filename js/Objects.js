function createPerson() {
    var person= new Object();
    person.name= "Bharu";
    person.designation= "asa";
    person.phone=1223344;
    return person;
}
var bharu=createPerson();
console.log(bharu);

function createPerson2() {
    var person= {};
    person.name= "Bhargavi";
    person.designation= "asa";
    person.phone=1223344;
    return person;
}
bhargavi=createPerson2();
console.log(bhargavi);

//3

/*function createPerson3() {
    var person= {};
    person['name']= "Bharu";
    person['designation']= "asa";
    person['phone']=1223344;
    return person;
}
bharu=createPerson3();
alert("name:" + bharu.name+" designation:" +bharu.designation+" phone:" +bharu.phone);*/


// 4th type
function createPerson4(){
    var person={
                   name:"bhar",
                   age:22,
                   designation:"asa",
                   phone:1222434
    };
    return person;
}bhar=createPerson4();
console.log(bhar);
//

//
function Person() {

   this.name="bhar";
   this.age=22;
   this.designation="asa";
   this.phone=1222434;
}
bhar= new Person();
console.log(bhar);

}