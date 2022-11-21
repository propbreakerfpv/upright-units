/*
 * types - data types
 *
 * no objects or arrays
 * 
 * strings
 * bools
 * number (not ints????)
 *
 */



/*
 * back ticks are good for concatination apparently
 */

var stringOne = "double quotes";

var stringTwo = 'single quotes';

var stringThree = `back ticks`;


// theys do the same thing
console.log(stringOne, stringTwo);
console.log(stringOne + " " + stringTwo);


console.log(`${stringOne} ${stringTwo}`) // ok so backticks are like string formatting. i think


// typeof 
console.log(typeof stringThree);

var moneyOne = "20";
var moneyTwo = "10";


/*
 * numbers
 */


let currentTemp = 23;
console.log(currentTemp);

let calculatedTip = 50 * .25;
console.log(calculatedTip.toFixed(2));


// convert strings to numbers 
// Number()

console.log(Number(moneyOne) + Number(moneyTwo));


// way 2
// add a plus to the start of the var
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);




/*
 * bools
 * true or false
 * not much more to say
 */

var isOver21 = true;
var isTeenager = false;



console.log(Boolean(moneyOne));







