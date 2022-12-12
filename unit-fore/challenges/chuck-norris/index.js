

let img = document.getElementsByTagName("img");
console.log(img)
async function apiFetch() {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        // console.log(data.value);
        displayHistory(data.value);
    } catch(err) {
        console.log(err.message)
    }
}


function displayHistory(joke){
    let historyList = document.getElementById("history");

    let item = document.createElement("li");

    item.textContent = joke;
    historyList.append(item)

}
