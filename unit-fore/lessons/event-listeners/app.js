let listItem = document.querySelectorAll(".list-item");
listItem[0].textContent = "get milk and break";

let li = document.createElement("li");
li.textContent = "get more project item";
li.style.color = "red"
li.className = "list-item"

let ul = document.getElementsByClassName("list")[0]
ul.appendChild(li)

console.log(li)




// event listeners
// input.addEventListener("keyup", (event) => {
//     console.log(event.target.value);
// });





let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let remove = document.querySelector(".remove");

submit.addEventListener("click", (e) => {
    let li = document.createElement("li");
    li.textContent = input.value;
    li.className = "list-item";
    ul.appendChild(li);
    input.value = "";
});

remove.addEventListener("click", (e) => {
    let li = document.querySelectorAll(".list-item");
    let flag = true
    for (i of li) {
        if (i.textContent == input.value) {
            i.remove();
            flag = false;
        }
    }
    if (flag) {
        input.placeholder = "error";
    }
    input.value = "";
})
