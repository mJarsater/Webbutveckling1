window.onload = function () {
    var contactBtn = document.getElementById("contactBtn");
    var contactWebmaster = document.getElementById("contact-webmaster");
    var myWindow;

    contactBtn.onclick = function () {
        myWindow = window.open("/Gesällprov/html/contact.html", "_blank", "width=500, height=500");
    }

    contactWebmaster.onclick = function () {
        myWindow = window.open("/Gesällprov/html/webmaster.html", "_blank", "width=500, height=500");
    }


}

var menuBtn = document.getElementById("responsive-icon");

menuBtn.onclick = function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var index = 1;

var slides = document.getElementById("function");

showSlide(index);

function navigate(btn) {

    showSlide(index += btn);
}

function currentSlide(n) {
    showSlide(index = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("event");
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}
