// global level
var a=10;

console.log(a)
{
    console.log(a)
}

 function access(){
    console.log(a)
}

// declaration at block level
{
    var b = 20;
    console.log(b)
}
console.log(b)
// declartion at function level

// function dec(){
//     var c=30;
//     console.log(c)
// }
// dec()
// console.log(c)

//let key word
// declaration
// global level
let num=40;
console.log(num)
{
    console.log(num);
}
// block level
{
    let num1=90;
    console.log(num1);
}
// console.log(num1)

// const key word
const fullName="xyz";
console.log(fullName);
{
    
}
// how you declare a variable
// var
var age; // only declaration
console.log(age);

age=30; // only initialization
console.log(age);

var phone=987654321; //both possible
phone=2345678
console.log(phone)

var phone=3456780;
console.log(phone)

//let 
let email;
console.log(email);
email="email@email"
console.log(email)

// let email;

const name="xyz"
console.log(name)
// name="yyy"
// console.log(name)

//loop
//for loop
for (let i=0; i<=5; i++){
    console.log(i)
}

let idx = 1;
while(idx <= 5){
    console.log(idx);
    idx++;
}

let v=1;
do{
    console.log(v)
    v++
 } while(v<=5);

for(let i=1; i<=10; i++) {
    if(i%2==0){
        console.log(i)   
    }
}
// let your_number = 100;
// let user_number=prompt("enter your number")
// while(your_number !=user_number){
//     console.log("your value is not match");
//     user_number=prompt("enter another number:");
// }
// if(your_number==user_number){
//     console.log("your value is matched:",user_number);
// }

//number
console.log(typeof 1.4);
console.log(typeof "GIET");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("$A"));
console.log(typeof BigInt(34567890423));

// object
let obj={
    name:"xyz",
    age:"20"
}
console.log(obj.name)
console.log(obj["age"])

let arr=[1,2,3];
console.log(arr[2])

//for in object

for(let key in obj){
    console.log(key + ":"+ obj[key])
}
for(let idx in arr){
    console.log(arr[idx])
}


for(let v of arr){
    console.log(v)
}
for(let v of obj){
    console.log(v)
}   



