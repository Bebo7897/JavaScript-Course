var X = 25;
function addThem() {
    var Y = 75;
    console.log(X + Y);
}

function addWrong() {
    console.log(X + Y);
}

addThem();
addWrong();

function checkDate() {
    if (new Date().getHours() < 17 && new Date().getHours() > 8) {
        document.getElementById("Date").innerHTML = "We are still in the office!";
    }
    else {
        document.getElementById("Date").innerHTML = "We are out of the office at this time!";
    }
}

function checkAge() {
    var Age = document.getElementById("Age").value;
    if (Age > 17) {
        document.getElementById("Voter").innerHTML = "You are old enough to vote!";
    }
    else {
        document.getElementById("Voter").innerHTML = "You are not old enough to vote!";
    }
}

function Time_function() {
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