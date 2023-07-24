document.write(typeof 5 + "<br>");  //returns type of data to browser screen
document.write(5 + "50" + "<br>");  //due to coercion returns the values concatenated
document.write(isNaN(55) + "<br>"); //checks whether value is not a number
document.write(isNaN("word") + "<br>");  
window.alert(10E500); //demonstrate java displaying positive and negative infinity
window.alert(-10E500);
window.alert(10<25); //less than and greater than comparisons
window.alert(10>25);
document.write((3+5) + "<br>");  //displaying data
document.write((3>5) + "<br>");  
document.write((5==5) + "<br>");  //equality comparisons
document.write((5==3) + "<br>");
document.write((3===3) + "<br>");  //equality of value and data comparisons
document.write((3==="boo") + "<br>");
document.write((3==="3") + "<br>");
document.write(("boo"==="ghost") + "<br>");
document.write(((3<5)&&(4<6)) + "<br>");  //AND operator true
document.write(((3<5)&&(4>6)) + "<br>");  //AND operator false
document.write(((3<5)||(4>6)) + "<br>");  //OR operator true
document.write(((5<3)&&(4>6)) + "<br>");  //OR operator false
document.write((!(3>5))+ "<br>");  //NOT operator true
document.write((!(5>3))+ "<br>");  //NOT operator false