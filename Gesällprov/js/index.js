
// Lägger eventhandlers på element med respektive ID
document.getElementById("responsive-icon").addEventListener("click", menuFunction);
document.getElementById("contact-webmaster").addEventListener("click", webmasterFunction);


// Hämtar elementet med ID nav
var x = document.getElementById("nav");


// Funktion som togglar classnamnet för topnav
function menuFunction() {
    // Om classname är "topnav"
    if (x.className === "topnav") {
        // lägg till responsive
        x.className += " responsive";
    } else {
        // annars gör inget
        x.className = "topnav";
    }

}

// Funktion som öppar ett nytt fönster
function webmasterFunction() {
    myWindow = window.open("/Gesällprov/html/webmaster.html", "_blank", "width=500, height=500");
}