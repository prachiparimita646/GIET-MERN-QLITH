console.log("hello world");
//Arithmatic operator
console.log(2 + 3);
console.log(4 - 3);
console.log(2 * 3);
console.log(4 / 2);
console.log(2 ** 3);
console.log(5 % 2);

//Increment // Decrement
//Post Increment
//Pre increment

//Decrement
//post Decrement
//Pre Decrement

a=20;
console.log(++a);
console.log(a++);
console.log(a);

//console.log(--a);
console.log(a--);
console.log(a);

//Assignment operator

b=a+3;
console.log(b);

// a=a+4;
a+=4
console.log(a);

a=a-3;
console.log(a);

a=a*3
console.log(a);

console.log(2<3);
console.log(4>5);
console.log(2<=2);
console.log(3>=4);
console.log(2==2);
console.log(2=="2");
console.log(2=="ab");
console.log(2===2);
console.log(2==="2");
console.log(2==="ab");

console.log(1!="1")
console.log(1!=="1")

console.log((2<3) && (4>3))
console.log((2<3)|| (4>2))

c=2;
console.log((2<3) && (c++>3))
console.log(c)

console.log(!true)
console.log(!false)

console.log(2 && 3)
console.log(5 || 4)
   
console.log("" && "dfnj")
console.log("mkcj" && "dfnj")

//+ 
//string concatenation
console.log("jyoti" +"panda")
//type casting
console.log(+"3" +2)


console.log(typeof +"3")


console.log(2 +3 - 4 + +"6")

//conditional statement
//if
//if-else
//else-if
//Ternary operator
//switch

if(true){
    console.log("Hii i am true")
}

if(false){
    console.log("Hii i am true")}
        else{
    console.log("Hii i am false")
}

if(false){

}else if(false){

}else if(false){

}


let mark=prompt("Enter a mark");

if(mark >90 && mark<=100){
    console.log("A")
}
else if(mark>=75 && mark<90){
    console.log("B")
}
else if(mark>65 && mark<=75){
    console.log("C")
}
else if(mark>=40 && mark<65){
    console.log("D")
}else if(mark<40){
    console.log("fail")
}else{
    console.log("Invalid number")
}

op = "A";

switch(op) {
    case "A":{
        console.log("case A")
    }
    break;
    case "B":{
        console.log("case B")
    }
    break;
    case "c":{
        console.log("case c")
    }
    break;
    default: {
        console.log("default")
    }
    break;
}

console.log(true?"it is true":"it is false")
console.log(true && "it is true")
console.log(false && "it is true")
console.log(true || "it is true")