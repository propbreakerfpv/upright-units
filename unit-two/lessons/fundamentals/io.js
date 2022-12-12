// IO & Callbacks

/* 
    * Process is an event that currently runs in the foreground or background of yoru local machine.

    * Node.js allows access to its processes via a process object
*/


// Import statement

let process = require("process");

const readline = require("readline");

let rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let solution = num1 + num2;

rl.question(`what is the sum of ${num1} and ${num2}?: `, (input) => {
    if (input.trim() == solution) {
        rl.setPrompt("correct\n");
        rl.prompt();
        rl.close();
    }
});

rl.on("close", () => console.log("thanks for playing"));

