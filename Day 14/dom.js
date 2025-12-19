console.log("Toady we are going to learn dom object");

//Document Object Module
let h1=document.getElementById("head");
console.log(h1)

let p=document.getElementsByClassName("para");
console.log(p)

let h2=document.getElementsByTagName("h2");
console.log(h2)

let h3=document.querySelector("#heading")
console.log(h3)

let p1=document.querySelector(".para")
console.log(p1)

let tag=document.querySelector("h3")
console.log(tag)

let ps=document.querySelectorAll(".para")
console.log(ps)

let ps1=document.querySelectorAll(".para")
console.log(ps1[0].innerText)

ps[0].innerText="paragraph 2"
console.log(ps[0].innerText)

console.log(ps[1].innerHTML)
console.log(ps[1].innerText)

ps[1].innerHTML="<i>This is itallic</i>"

ps[1].style.backgroundColor="red"
document.body.style.backgroundColor="Blue"

console.log(ps[1].className)
console.log(ps[1].classList)

ps[1].classList.add("para3","para4")
ps[1].classList.remove("para")
console.log(ps[1].classList.contains("para4"))
ps[1].classList.toggle("para4")
ps[1].classList.toggle("para5")

let h4=document.createElement("h4")
console.log(h4)
h4.innerText="this is heading 4"

let h5=document.createElement("h5")
h5.innerText="This is heading 5"
// document.body.appendChild(h4)
document.body.append(h4,h5)

let b=document.createElement("b")
b.innerText="this is bold tag"
console.log(b)

let div=document.querySelector(".parent")
console.log(div)

// div.append(b)
// div.prepend(b)
// div.before(b)
div.after(b)

//direct tag
// let handleBtn=()=>{
//     console.log("click")
// }

//variable format
// let button=document.querySelector("#btn1")
// button.onclick=()=>{
//     console.log("button click")
// }

//method
// let button2=document.getElementById("btn2")
// console.log(button2)
// button2.addEventListener("click",()=>{
//     console.log("btn clicked")
// })

let parabody=document.getElementById("paragraph")
console.log(parabody)
parabody.addEventListener("dblclick",()=>{
    console.log("para double click")
})

// parabody.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })

// parabody.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })

parabody.style.backgroundColor="red"
parabody.addEventListener("mousemove",()=>{
    console.log("mouse move")
})

parabody.addEventListener("mouseenter",()=>{
    console.log("mouse enter")
})

parabody.addEventListener("mouseleave",()=>{
    console.log("mouse leave")
})


