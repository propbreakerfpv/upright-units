let response = document.querySelector("#friend-greeting");
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
        document.location = "/greeting.html?name=" + input;
        response.style.color = "black"
    }
    setTimeout(() => {
        response.textContent = "";
    }, 5000)
})