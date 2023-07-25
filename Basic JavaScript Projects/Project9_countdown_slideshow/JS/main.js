function countdown (){
    var seconds = document.getElementById("seconds").value;  //gets the value of input box

    function tick() {
        seconds = seconds - 1;  //decrements seconds variable by 1
        timer.innerHTML = seconds;  //sets p element to value of variable
        var time = setTimeout(tick, 1000);  //executes tick function after waiting 1000 milliseconds
        if (seconds == -1) {  // creates an end to the function if the seconds go below zero
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();  //calls the function 
}

let slideIndex = 1;  // creates a variable that can't be redefined and sets value
showSlides(slideIndex);  //calls showSlides function

// next/previous controls 
function plusSlides(n) {  //takes in a parameter to alter slide shown
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {  //shows the slide currently at slideIndex
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;                                                              //
    let slides = document.getElementsByClassName("mySlides");           // declares let variables
    let dots = document.getElementsByClassName("dot");                  // 
    if (n > slides.length) {  // conditional to make sure n never exceeds number of slides 
        slideIndex = 1;       // after 3rd slide goes back to first slide
    }
    if (n < 1) {                        // if you go from first slide to previous it takes you to last slide
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {  //hides slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {  //sets all the dots to inactive
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  //  displays slide at slideIndex -1 since array starts at zero
    dots[slideIndex-1].className += " active";  //  sets active dot based on slideIndex -1
}