const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
    let input = await ask("what is your name ");
    
    if (input == "darth vader") {
        console.log("Noooooo! That's impossible!");
    }
    let enemy = false
    for (let i = 0; i < enemyList.length; i++){
        if (enemyList[i] == input){
            enemy = true
        }
    }
    if (enemy) {
        console.log("get the fuck out.");
    }else {
        console.log("hello " + input);
    }
  // your code here
  // remember to use `await`
}
respond();
