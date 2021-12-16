'use strict'
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 } if (n < 1) { slideIndex = x.length } for
        (i = 0; i < x.length; i++) { x[i].style.display = "none"; }
    x[slideIndex - 1].style.display = "block";
}

function navhover() {
    var button = document.getElementById("navigation-button")
    if (button.className == "ico site-navigation-toggle"){
        button.className = "ico site-navigation-toggle-hover";
    } else {
        button.className = "ico site-navigation-toggle";
    }
}

function navClick() {
    var button = document.getElementById("navigation-button")
    if (button.className == "site-navigation-toggle"){
        button.className = "site-navigation-toggle-hover";
    } else {
        button.className = "site-navigation-toggle";
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }