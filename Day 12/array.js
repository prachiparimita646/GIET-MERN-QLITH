console.log("we are learning array")
let arr=[1,2,3,4,5];
console.log(arr[5]);
let arr1=[1,2,3,"5",{},true]
console.log(arr1[3]);

let arrobj=new Array(1,2,3,5,{});
console.log(arrobj)
console.log(Array(3))
console.log(Array.of(1,2,3,5))
console.log(Array.of(1,2,true,{},"4"))
console.log(Array.from("abcdef"))

let num1=[1,2,3]
num1.push(4)
console.log(num1)
num1.pop();
console.log(num1)
num1.shift()
console.log(num1)
num1.unshift(5)
console.log(num1)

console.log(num1.at(2))
console.log("index",num1.indexOf(2))
console.log(num1.reverse())
console.log(num1.join("-"))
console.log(num1.slice(2,5))

console.log(num1)
num1.push(3,4)
console.log(num1)
num1.splice(3,4,"hii")
console.log(num1)
num1.splice(2,3,"rakhi")
console.log(num1)

//Question
//find the max element
let num2=[1,2,10,15,79,80]
let max=0;
for(let v of num2){
    if(v>max)
        max=v
}
console.log(max)

//company=["IBM","Microsoft","google","Qlith"]
//remove microsoft and add amazon, flipkart
let company=["IBM","microsoft","google","Qlith"]
company.splice(1,1,"Amazon","flipkart")
console.log(company)

//merge two array
let arr2=[1,2,3]
let arr3=[4,5,6]
console.log(arr2+arr3)

//remove duplicate array
let num4=[1,2,2,3,4,5,6,6]
for(let i=0;i<num4.length;i++){
    for(let j=i+1;j<num4.length;j++){
        if(num4[i]==num4[j]){
            num4.splice(j,1)
        }
    }
}
console.log(num4)

//count even and odd number
let array1=[2,40,5,3,2,10,19]
let evenCount=0;
let oddCount=0;
for(let i=0;i<array1.length;i++){
    if(array1[i]%2==0){
        evenCount+=1;
    }
    if(array1[i]!=0){
        oddCount+=1;
    }    
}
console.log(evenCount);
console.log(oddCount);

//sum of array element
let arr13=[12,33,41,50];
let sum=0;
for(let value of arr13){
    sum=value+sum;
}
console.log("sum of the array is"+sum);

//double each element in the array
let Arr15=[2,4,6]
for(let i=0;i<=Arr15.length-1;i++){
    Arr15[i]*=2;
}
console.log(Arr15);

//store different types of string in a array and find the word with length>4
let str=["rani","rakhi","jyoti"]
for(let v of str){
    if(v.length>4){
        console.log(v)

    }
}

//check array containing all positive number or not
let array=[1,-3,-4,5,6,8,9]
for(let v of array){
    if(v<0){
        console.log("false");
        break;
    }
}