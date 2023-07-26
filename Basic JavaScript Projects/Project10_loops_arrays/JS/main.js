function Call_Loop() {
    var string = document.getElementById("string").innerHTML;
    var strlth = string.length;
    var count = "";
    var num = 1;                                                    //while loop that finds length of string on button
    while (num <= strlth) {                                         //and compares it to num variable until it reaches that length
                                                                    //then exits that loop
        count += "<br>" + num;
        num++;
    }
    document.getElementById("Loop").innerHTML = count;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //creates an array of instruments
var Content = "";
var Y;
function for_loop() {                                               // for loop that compares array length to a counter 
    for (Y = 0; Y < Instruments.length; Y++) {                      //variable in order to display all elements of array
        if (Y == 4) {continue;}
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

let Numbers = [3,5,7,6,9,10];  //creates a let array of numbers
let Num = "";
let X;
function num_loop() {                                 // another for loop that loops through array as
    for (X=0; X < Numbers.length; X++) {              // as long as it hasn't exceeded the array length
        Num += Numbers[X] + "<br>";
        if (X == 3) {break;}                          // breaks out of loop when value reaches 3
    }
    document.getElementById("Array").innerHTML = Num;
}

function constant_function() {
    const Car = {make:"Ford", model:"Mustang", color:"Black"};
    Car.model = "Expedition";                                                   //creates a constant function and object 
    Car.year = 2023;                                                            //then edits and adds value to constant object
    document.getElementById("Constant").innerHTML = "The vehicle is a " +
    Car.year + " " + Car.color + " " + Car.make + " " + Car.model;
}

function greeting(name) {
  return "Hello " + name;                                                   //showcases how return works by returning Hello and argument passed to function
}

document.getElementById("greeting").innerHTML = greeting("Brendan");

let child = {                                                               // let child object created and assigned key value pairs
    father: "Robert",                                                       
    mother: "Elizabeth",
    birthYear: 1985,
    birthCity: "Newport News",
    birthDescription: function () {                                         // nested function that combines all the values of the KVP then returns that
        return "The child was born to " + this.father + " and " + this.mother +
        " in the year " + this.birthYear + " in the city " + this.birthCity;
    }
};
document.getElementById("childDesc").innerHTML = child.birthDescription();

