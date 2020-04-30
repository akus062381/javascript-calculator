const buttonnine = document.querySelector(".box9")
    buttonnine.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("9")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttoneight = document.querySelector(".box8")
    buttoneight.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("8")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonseven = document.querySelector(".box7")
    buttonseven.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("7")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonsix = document.querySelector(".box6")
    buttonsix.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("6")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonfive = document.querySelector(".box5")
    buttonfive.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("5")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonfour = document.querySelector(".box4")
    buttonfour.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("4")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonthree = document.querySelector(".box3")
    buttonthree.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("3")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttontwo = document.querySelector(".box2")
    buttontwo.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("2")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonone = document.querySelector(".box1")
    buttonone.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("1")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttondecimal = document.querySelector(".boxdecimal")
    buttondecimal.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode(".")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttondivide = document.querySelector(".boxdivide")
    buttondivide.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("/")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonmultiply = document.querySelector(".boxmultiply")
    buttonmultiply.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("*")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonadd = document.querySelector(".boxplus")
    buttonadd.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("+")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})

const buttonminus = document.querySelector(".boxminus")
    buttonminus.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    console.log(result)
    let value = document.createElement("div")
    let text = document.createTextNode("-")
    console.log(text)
    value.appendChild(text)
    result.appendChild(value)
})



let clearbutton = document.querySelector(".boxclear");
    clearbutton.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    result.textContent = "";
})

const equals = document.querySelector(".boxequals");
equals.addEventListener("click", function () {
    const result = document.querySelector(".boxresult")
    result.textContent = eval(result.textContent);
})


