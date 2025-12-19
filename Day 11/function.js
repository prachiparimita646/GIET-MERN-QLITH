console.log("Today we are going to Learn Function")
function fun(v){
    console.log("this is function")
    console.log(v)
}
fun(20)
fun(30)

// function (){
// }

function namedFun(){
    console.log("this is the named function")
}
namedFun()

let exeFun=function(){
    console.log("this is the expressional function")
}
exeFun()

// console.log(exeFun)
let arrowFun = () =>{
    console.log("This is the arrow function")
    let a=20
    return a;

}
let a=arrowFun()
console.log(a)

// let value=arrowFun()
// console.log(value)

let hof=function(func){
    console.log("this is the higherorder function")
}
hof(function(func){
    console.log("this is the argument function")

})

let hof2=function(){
    return function(){
        console.log("return fun")
    }
}
let catchedFun=hof2()
console.log(catchedFun)

// let catchedfun=hof2()
// catchedFun()

// (function(){
//     console.log("this is the IIF")
// })()

//string

let str="this is the string";
//console.log(str[1])

str="This is the string";
console.log(str)
let str1 =`this is the string by using single qoute`;
console.log(str1)

let str2 =new String("this is the string by using single qoute");
console.log(str2)

let str3 =new String("this is the string");
console.log(str3.valueOf())

let teststr="  this is the test string   ";
console.log(teststr.length)
console.log(teststr.toUpperCase());
console.log(teststr.toLowerCase());
console.log(teststr.concat("1"));
console.log(teststr.length);
console.log(teststr.trim().length)

console.log(teststr.trimStart());
console.log(teststr.trimEnd());

console.log(teststr.replace("t","T"));
console.log(teststr.replaceAll("t","T"));

console.log(teststr.slice(0,4))
console.log(teststr.slice(7,8))
console.log(teststr.slice(4))

let originalStr="original";
let reverseStr=""
for(let idx=originalStr.length-1;idx>=0;idx--){
    console.log(originalStr[idx])
    reverseStr+originalStr[idx]
    console.log(reverseStr)
}








