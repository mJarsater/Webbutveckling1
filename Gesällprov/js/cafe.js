window.onload = function () {
    // Lägger eventhandler på element med respektive ID
    document.getElementById("feedback-form").addEventListener("submit", submitFunction, false);

}


// Funktion som skapar ett "tackmeddelande" efter att formuläret har skickats
function submitFunction(evt) {
    // Stoppar sidan från att laddas om
    evt.preventDefault();


    // Sätter rätt display på alla element
    document.getElementById("thank-you-section").style.display = "block";
    document.getElementById("feedback-form").style.display = "none";

}