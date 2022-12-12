

// if statment


var currentTime = 1;

if(currentTime < 12){
    // code goes here
    console.log("good morning");
}


// if else
if(currentTime < 12){
    // code goes here
    console.log("good morning");
}else{
    console.log("good afternoon")
}



if(currentTime < 12){
    // code goes here
    console.log("good morning");
}else if(currentTime < 17){
    console.log("good afternoon");
}else{
    console.log("good night");
}


var isLightBulbOn = true;

if (isLightBulbOn){
    console.log("light bulb is on");
}


if (! isLightBulbOn){
    console.log("light bulb is off")
}






let flag = false;
if (flag){
    console.log("signup");
}else {
    console.log("login");
}



flag ? console.log("signup")
    : !flag ? console.log("login")
    : null





