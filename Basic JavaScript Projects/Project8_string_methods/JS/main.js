var Number = 5365.7897897;  //defined global variable

function fullName() {  // function concatenates 3 names into 1 name
    var first = "Brendan ";
    var middle = "Corey ";
    var last = "O\'Hara";
    var fullName = first.concat(middle, last);
    document.getElementById("Name").innerHTML = fullName;
}

function sliceFunction() {  // function uses name from Name id element and through search finds middle name and slices it 
    var Name = document.getElementById("Name").innerHTML;
    var middleStart = Name.search("Corey");
    var middleEnd = Name.search(" O");
    var sliceName = Name.slice(middleStart,middleEnd);
    document.getElementById("Slice").innerHTML = sliceName.toUpperCase();
}

function numString() {  // converts a number to a string
    var numString = 10584;
    document.getElementById("NumtoString").innerHTML = numString.toString();
}

function precisionMethod() {  // limits the size of global variable to 8 digits
    document.getElementById("Precision").innerHTML = Number.toPrecision(8);
}

function fixedMethod() {  // rounds global variable to decimal place of 1
    document.getElementById("Fix").innerHTML = Number.toFixed(1);
}

function valueMethod() {  // returns primitive value of id element numtostring
    var value = document.getElementById("NumtoString").innerHTML
    document.getElementById("Value").innerHTML = value.valueOf()
}
