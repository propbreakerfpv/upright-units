/* 
!BRONZE
Write two variables. One of those variables will store your name. The other variable will store the name of a friend.

Find out what property you can use to check how long their name is, as well as your own.

Goal: console.log how many letters each of the names are...
*/
let name = "jonas";
let frendName = "vaughn";

console.log(`my name is ${name.length} chars long`);
console.log(`my frends name is ${frendName.length} chars long`);



/*
!SILVER

Write a conditional to see who has the longer name.
    -Use string interpolation to console.log whose name is longer
    -Ex: My name is longer than Adam's

*/
if (name.length > frendName.length) { // my name is linger then frends 
    console.log(`my name is longer then ${frendName}'s`);
}else if (name.length < frendName.length) { // frends name is longer then mine
    console.log(`${frendName}'s name is longer then mine`);
}else{ // are names are the same length
    console.log("are names are the same length");
}


/*
!GOLD
In the console include how many letters difference there are between the names.

Example: Adam's name is shorter than mine by 4 letters. 

*There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

*/
if (name.length > frendName.length) {
    console.log(`my name is longer then ${frendName}'s by ${name.length - frendName.length}`);
}else if (name.length < frendName.length) {
    console.log(`${frendName}'s name is longer then mine by ${frendName.length - name.length}`);
}else{
    console.log("are names are the same length");
}






