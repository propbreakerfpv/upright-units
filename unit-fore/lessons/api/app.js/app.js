

let url = "https://pokeapi.co/api/v2/pokemon/"


// fetch(url).then((res) => {
//     res.json().then((r) => {
//         console.log(r)
//     })
// });


async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    return data
}




async function main() {
    let data = await getData()
    console.log(data)
}

main()


let sample = {
    name: "jonas",
    age: "22",
    address: "123 main st"
}

console.log(JSON.stringify(sample))

console.log(JSON.parse('{ "name":"jonas", "age": "22", "address":"main st"}'))
