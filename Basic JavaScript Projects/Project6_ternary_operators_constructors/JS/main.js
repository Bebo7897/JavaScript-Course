function Ride_Function() {  //function compares value of input versus 52 to determine one of the outputs of ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {  //function compares value of input versus 18 to determine one of the outputs of ternary operator
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {  //function creates a template for Vehicle Class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");                  //
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");   //creates vehicle objects for the variables
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");                 //

function myFunction() {  //assigns the vehicle object to the inner html of following tag
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "
        + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Looks(Gender,Hair,Eyes) {  //creates a template for Looks class
    this.Gender = Gender;
    this.Hair = Hair;
    this.Eyes = Eyes;
}
var Pete = new Looks("Male", "Brown", "Brown");
var Jill = new Looks("Female", "Blonde", "Blue");   //creates Looks objects for variables
var Frank = new Looks("Male", "Red", "Green");

function myLooks() {  //assigns looks object to inner html of tag
    document.getElementById("New_and_This").innerHTML = "Pete is "
        + Pete.Gender + " with " + Pete.Hair + " hair and " + Pete.Eyes + " eyes.";
}

function countFunction(){  //outer function to be called in html
    document.getElementById("Nested_Function").innerHTML = count();  //assigns count result to inner html of tag
    function count() {  //nested function to be called by countFunction returns value of start incremented
        var start = 0;  //assigns start variable
        function addOne() {  //increments start variable by 1
            start++;
        }
        addOne();  //calls function to increment
        return start;  //returns value to count()
    }
}
