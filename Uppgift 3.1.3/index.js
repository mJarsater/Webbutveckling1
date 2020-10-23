$(document).ready(function () {

});

function refreshFunction() {
    var updatedText = "Den här hemsidan gäller uppgift 3.1.3";
    document.getElementById("headertext").innerHTML = updatedText;
    document.getElementById("headertext").className = "headertext";
    document.getElementById("titletext").className = "headertext";
    document.getElementById("list").className = "list";
}

function scrollDownFunction() {
    window.scrollTo(0, 5000);
}

function scrollUpFunction() {
    window.scrollTo(0, 0);
}

