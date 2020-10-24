
$(document).ready(function(){
    $("#texten").on("click", function(){
        $(this).css("font-size", "1.5rem");
    });
    $("#buttonText").click(function(){
        $("#texten").off("click");
    });
});

function refreshFunction() {
    var updatedText = "Den här hemsidan gäller uppgift 3.1.3";
    document.getElementById("headertext").innerHTML = updatedText;
    document.getElementById("headertext").className = "headertext";
    document.getElementById("titletext").className = "headertext";
    document.getElementById("list").className = "list";
}

function scrollDownFunction() {
    window.scrollTo(0, document.body.scrollHeight);
}

function scrollUpFunction() {
    window.scrollTo(0, 0);
}

function submitFunction() {
    alert("Nice name!");
    document.getElementById("form").reset();
}

function keyFunction() {
    alert("En siffra i taget nu..")
}

function rotateFunction(image) {
    image.style.transform = 'rotate(90deg)';
}

function rotateBackFunction(image) {
    image.style.transform = 'rotate(0deg)';
}

function showCoordinates(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coordinates = "Coordinates: X : " + x + " Y : " + y;
    document.getElementById("coordinates").innerHTML = coordinates;
}

document.getElementById("falseLink").addEventListener("click", function(event){
    event.preventDefault()
  });
