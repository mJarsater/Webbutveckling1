window.onload = function () {
    // Lägger eventhandlers på element med respektive ID
    document.getElementById("contactBtn").addEventListener("click", contactFunction);
    document.getElementById("memberBtn").addEventListener("click", openMemebership);
    document.getElementById("prevBtn").addEventListener("click", previousFunction);
    document.getElementById("nextBtn").addEventListener("click", nextFunction);


    // Hämtar elementen med class accordion
    var accordion = document.getElementsByClassName("accordion");

    // Variabel för index
    var index;
    // Loopar över arrayen
    for (index = 0; index < accordion.length; index++) {
        // Lägger till en eventhandler på varje element i arrayen
        accordion[index].addEventListener("click", function () {
            // Togglar classlistan för de aktuella elementet
            this.classList.toggle("active");
            // Hämtar nästa element i documentet
            var panel = this.nextElementSibling;
            // Togglar displaypropertin
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}



// Funktion som kallar på navigate med -1
function previousFunction() {
    navigate(-1);
}

// Funktion som kallar på navigate med 1
function nextFunction() {
    navigate(1);
}

// Funktion som öppnar en ny sida med länken
function openMemebership() {
    myWindow = window.open("https://medlem.disk.su.se/");
}

// Funktion som öppnar en ny sida med länken
function contactFunction() {
    myWindow = window.open("/Gesällprov/html/contact.html", "_blank", "width=600, height=1000");
}


// Variabel för index
var index = 1;

// Kallar på showslides med (index)
showSlide(index);

// Funktion som kallar på showslides med dess parameter
function navigate(n) {
    showSlide(index += n);
}

// Funktion som kallar på showslides med dess parameter
function currentSlide(n) {
    showSlide(index = n);
}

// Funktion som hoppar mellan slides
function showSlide(n) {
    var i;
    // Hämtar alla slides till en arrray
    var slides = document.getElementsByClassName("event");
    /*  Kollar om n är större än längden på listan 
        isf sätter den index till 1 */
    if (n > slides.length) { index = 1 }
    // Kollar om n är mindre än längden på listan 
    if (n < 1) { index = slides.length }

    // Loopar över listan och sätter display none på alla
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /* Sätter display block på index-1
       som från början är de första elementet */
    slides[index - 1].style.display = "block";
}
