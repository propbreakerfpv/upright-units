
// functions
// "hoisted" meaning that js "hoistes" the function so you can call it befor it is defined


example1();
function example1() {
    console.log("example 1 function was exacuted");
}


example2(1, "testing");
function example2(a, b) {
    console.log(`example 2 was called with params ${a} ${b}`);
}

function add(x, y) {
    return x + y;
}

let sum = add(7, 5);
console.log("sum", sum);

let sum1 = add(7, 5);
console.log("sum1", sum1);


function cube(length, width, height) {
    return length * width * height;
}
let cubed = cube(20, 20, 20);
console.log(cubed);

