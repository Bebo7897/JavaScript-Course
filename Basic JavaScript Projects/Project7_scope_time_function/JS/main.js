var X = 25;             //assign global variable
function addThem() {    //function that adds global and local variable and displays value to console
    var Y = 75;
    console.log(X + Y);
}

function addWrong() {   //function that tries to add same variables but doesn't contain local variable 
    console.log(X + Y); //so instead displays an error in console
}

addThem();              //calls functions 
addWrong();

function checkDate() {      //function compares the local time to the values and displays appropriate text
    if (new Date().getHours() < 17 && new Date().getHours() > 8) {
        document.getElementById("Date").innerHTML = "We are still in the office!";
    }
    else {
        document.getElementById("Date").innerHTML = "We are out of the office at this time!";
    }
}

function checkAge() {       //function takes age from element id age and compares it to value and displays text accordingly
    var Age = document.getElementById("Age").value;
    if (Age > 17) {
        document.getElementById("Voter").innerHTML = "You are old enough to vote!";
    }
    else {
        document.getElementById("Voter").innerHTML = "You are not old enough to vote!";
    }
}

function Time_function() {     //stores time from local machine as time then makes following comparisons to display appropriately
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}