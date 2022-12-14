/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/


for (i = 1; i <= 100; i++){
    let output = "";
    if (i % 3 == 0){
        output += "fizz ";
    }
    if (i % 5 == 0){
        output += "buzz";
    }
    console.log(output ? output : i);
}


