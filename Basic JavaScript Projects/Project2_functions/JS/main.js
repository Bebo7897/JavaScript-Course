function myFunction(){
    var str1= "This is the first of string " //assigns value to str1 variable
    var str2 = "and this is the second!" //assigns value to str2 variable
    document.getElementById("p_text").innerHTML = str1 += str2; //assigns value between tags with 
                                                                //matching id to value of str1 and
                                                                // str2 concatenated 
}