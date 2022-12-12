
class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


let db = [];

let btn = document.querySelector(".submit");
let input = document.querySelectorAll("input");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    db.push(new Login(e.target.form[0].value, e.target.form[1].value));
    console.log(db);
});



