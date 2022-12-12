let response = document.querySelector("#computer-response");
let text = document.getElementById("user-input");
let form = document.getElementById("name-form");


let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = text.value.toLowerCase();
    if (enemyList.includes(input)){
        response.textContent = "get the fuck out.";
        response.style.color = "red"
    }else{
        console.log(document.location)
        document.location = "/units/unit-fore/challenges/passing-data/greeting.html?name=" + input;
        response.style.color = "black"
    }
    setTimeout(() => {
        response.textContent = "";
    }, 5000)
})
