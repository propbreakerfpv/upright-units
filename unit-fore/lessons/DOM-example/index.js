console.log("running from the index.js")

let header = document.getElementById("header");
console.log(header);
header.innerHTML = "<em>hello world</em>";

header.style.color = "blue";
header.style.fontSize = "50px";

let errList = document.getElementsByClassName("error-list");

console.log(errList);


errList[0].innerText = "testing"


for (i of errList){
    i.style.color = "purple";
}


let tags = document.getElementsByTagName("li");


console.log(tags)

tags[0].style.fontStyle = "italic"

header = document.querySelector("#header")


let allHeaders = document.querySelectorAll("li")

allHeaders.forEach((item) => {
    console.log(item.innerText)
})

console.log(allHeaders);


