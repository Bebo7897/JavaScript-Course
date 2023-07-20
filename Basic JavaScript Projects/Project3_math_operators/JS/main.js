var random = Math.trunc(Math.random() * 50); //truncates math random 0-50 into integer
random--;  //decrements random variable by 1
window.alert(random);  //displays value of random as pop up

function myMath() {
    var lotsMath = ((5+5) * 10) % 8; //assigns lotsMath variable with value of following expression
    lotsMath++; //increments variable lotsMath
    document.getElementById("Math").innerHTML = "The remainder of 5+5 multiplied by 10 and then divided by 8 and then incremented by 1 = " + lotsMath;
} //finds element with id Math and assigns its inner html the value of lotsMath