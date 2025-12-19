console.log("Today we are going to learn about special function of a function");

let arr = [1,2,3,4,5,6];
// for let vof arr ){
//  console.log(v)
//  }

arr.forEach((v,i) => {
    console.log(i+ ":",v)
})

// let updateArr=arr.map((v) => {
// return v * 2;
// })
// console.log(updateArr)

let updateArr1 = arr.map(v => v * 2)
console.log(updateArr1)

let filterArr = arr.filter((v)=>{
    return v %2 === 0;
})
console.log(filterArr) 

let add = arr.reduce((sum,v)=> {
    return sum+v;
},0);
console.log(add)

let numarr=[2,5,1,59,60,30,15]
// console.log(numarr.sort((a,b)=>{return a-b}));
// console.log(numarr.sort((a,b)=>{return b-a}));

// let value=numarr.some((v) => {return v>=0});
// console.log(value);

// let allPositive=numarr.every((v) =>{return v >= 0});
// console.log(allPositive)

console.log(numarr.find((v) => {return v>2}))
console.log([1,2,[4,[5,6]],[7,8]].flat());
console.log([1,2,[4,[5,6]],[7,8]].flat(Infinity));

let h1 = document.getElementById("head");
console.log(h1)

let p=document.getElementsByClassName("para");
console.log(p)

let h2=document.getElementsByTagName("h2");
console.log(h2)
