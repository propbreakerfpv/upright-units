
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let sum = +e.target[0].value + +e.target[1].value;
    if(! isNaN(sum)){
        alert("the total is " + sum);
    }else {
        alert("invlid input");
    }
});





