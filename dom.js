//set var and use getElementById()

var title = document.getElementById("myClothes");

//Use var object to create method for style attributes.
title.setAttribute("style", "color: blue;");

function myFunction() {
 var garment = document.getElementsByClassName("clothes")[0];
 garment.getElementsByClassName("color")[0].innerHTML = "sneakers";  
}

myFunction()

let color1 = document.querySelector(".color1");
let nextSibling = color1.nextElementSibling;
console.log(nextSibling);




var button = document.getElementById("ride")
    button.addEventListener('click',hideshow, false);

    function hideButton() {
        document.getElementById("fast").style.display = 'block'; 
        this.style.display = 'none'
    }   

hideButton()



