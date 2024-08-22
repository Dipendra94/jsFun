var a = document.querySelector ("#bulb")
var b = document.querySelector("button")
var c = 0

b.addEventListener("click",function(){
    if(c == 0){
        a.style.backgroundColor = "yellow"
        console.log("clicked")
        c = 1
        b.innerHTML = "off"
    }
    else{
        a.style.backgroundColor = "transparent"
        console.log("Again Clicked")
        b.innerHTML = "on"
        c = 0
    }
})