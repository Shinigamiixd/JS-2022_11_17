console.log(window.navigator.userAgent)
console.log(window.navigator.language)

let container = document.querySelector(".container")
let al = document.createElement("a")
let paraglider = document.createElement("p")

paraglider.textContent = "lorem ipsum lorem ipsum lorem ipsum"
al.textContent = "DuckDuckGo"
al.href = "https://duckduckgo.com/"
al.target = "_blank"

container.appendChild(al)
console.log("\n" + al.textContent)
console.log(al.href)



let pa = document.querySelectorAll("p")
console.log(pa.length)
for (let i=0;i<pa.length;i++){
    pa[i].style.color = "red"
}



container.appendChild(paraglider)



let input_number = document.querySelector(".input_number")
let button_number = document.querySelector(".button_number")

function paprintint(){
    console.log(input_number.value)
    button_number.textContent = "CLICKED"
}

button_number.addEventListener("click", paprintint)



