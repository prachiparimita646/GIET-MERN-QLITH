console.log("Today we are going to learn js promise")

// keyboard events
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
    console.log(e.code)
    console.log(e.keyCode)
    console.log(e.ctrlKey)
    console.log(e.altKey)
    console.log(e.shiftKey)
    console.log("key down")
})

document.addEventListener("keyup",()=>{
    console.log("key up")
})
document.addEventListener("keypress",()=>{
    console.log("key press")
})

let input=document.getElementById("input-tag")
console.log(input)
input.addEventListener("input",(e)=>{
    console.log(e)
    console.log("input event")
})

input.addEventListener("change",()=>{
    console.log("change event")
})

input.addEventListener("focus",()=>{
    console.log("focus event")
})

input.addEventListener("blur",()=>{
    console.log("blur event")
})

let select=document.querySelector("form")
console.log("form")

select.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    console.log("submit")
})

// //window events
window.addEventListener("load",(e)=>{
    console.log(e)
    console.log("load")
})

window.addEventListener("DOMContentLoaded",()=>{
    console.log(" dom load")
})

window.addEventListener("resize",()=>{
    console.log("resize")
})

window.addEventListener("scroll",()=>{
    console.log("scroll")
})


