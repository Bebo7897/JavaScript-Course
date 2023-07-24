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
    if (new Date().getHours() < 17) {
        document.getElementById("Date").innerHTML = "We are still in the office!";
    }
}