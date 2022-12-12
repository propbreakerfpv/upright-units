let greeting = document.getElementById("friend-greeting");

let params = new URLSearchParams(document.location.search);

let friendName = params.get("name");

greeting.textContent = "hello " + friendName;