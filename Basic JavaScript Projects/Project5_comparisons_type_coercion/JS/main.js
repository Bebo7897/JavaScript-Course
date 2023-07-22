document.write(typeof 5);  //returns type of data to browser screen
document.write(5 + "50");  //due to coercion returns the values concatenated
document.write(isNaN(55)); //checks whether value is not a number
document.write(isNaN("word"));  
window.alert(10E500); //demonstrate java displaying positive and negative infinity
window.alert(-10E500);
window.alert(10<25); //less than and greater than comparisons
window.alert(10>25);
console.log(3+5);  //displaying data in the console
console.log(3>5);  
console.log(5==5);  //equality comparisons
console.log(5==3);
console.log(3===3);  //equality of value and data comparisons
console.log(3==="boo");
console.log(3==="3");
console.log("boo"==="ghost");
console.log((3<5)&&(4<6));  //AND operator true
console.log((3<5)&&(4>6));  //AND operator false
console.log((3<5)||(4>6));  //OR operator true
console.log((5<3)&&(4>6));  //OR operator false
console.log(!(3>5));  //NOT operator true
console.log(!(5>3));  //NOT operator false