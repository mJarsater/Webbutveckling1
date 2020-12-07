window.onload = function () {
    var memberBtn = document.getElementById("memberBtn");
    var menuBtn = document.getElementById("responsive-icon");
    var contactBtn = document.getElementById("contactBtn");
    var accordion = document.getElementsByClassName("accordion");
    var arrowIcon = document.getElementsByClassName("fas");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var index;
    var myWindow;

    for (index = 0; index < accordion.length; index++) {
        accordion[index].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    memberBtn.onclick = function () {
        myWindow = window.open("https://medlem.disk.su.se/");
    }

    contactBtn.onclick = function () {
        myWindow = window.open("/Gesällprov/html/contact.html", "_blank", "width=600, height=1000");
    }



    nextBtn.onclick = function () {
        navigate(1);
    }

    prevBtn.onclick = function () {
        navigate(-1);
    }


    menuBtn.onclick = function myFunction() {
        var x = document.getElementById("nav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
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
