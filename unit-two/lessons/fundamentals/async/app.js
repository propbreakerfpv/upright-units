

/*
function getInfo() {
    setTimeout(() =>{
        return "info";
    })
}

let data = getInfo();
console.log(data);


let promise = new Promise((resolve, reject) => {
    // let sum = 1 + 2;
    // sum == 3 ? resolve("sucsess") : reject("failed");

    setTimeout(() => {
        let sum = 1 + 2;
        sum == 3 ? resolve("sucsess") : reject("failed");
    }, 4000);
})

console.log(promise);

console.log("testing");

promise
    .then(msg => console.log(msg))
    .catch(msg =>{
        console.log(msg);
        console.log("code after");
    })
    .finally(() => {console.log("code the runs after")});
console.log("testing 1"); */






// function deleration
// async function func() {}

// function exprestion
// let func = async function() {}

// arrow functions
// let func = async () => {}


function OGFunc() {
    return "OG Function";
}
console.log(OGFunc());

async function asyncfunc() {
    return "async function";
}

let asyncRes = asyncfunc();
asyncRes.then(data => console.log(data));

let db = "SSN: 223-24-4562";

let dbCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        db ? resolve(db) : reject("no data found");
    }, 3000);
})

// dbCall.then(data => console.log(data)).catch(err => console.log(err));


async function displayData() {
    let dbRes = await dbCall;
    console.log(dbRes);
}

displayData();




