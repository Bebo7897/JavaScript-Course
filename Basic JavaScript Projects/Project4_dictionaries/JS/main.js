function myDictionary(){
    var Car = {  //variable sets up a dictionary with following KVPs
        Make:"Ford",
        Model:"Mustang",
        Transmission:"Automatic",
        Color:"Red"
    };
    delete Car.Color;  //deletes value contained in dictionary for color
    document.getElementById("Dictionary").innerHTML = Car.Color;  //tries to display value held in car:color
}