/*  Lägger till en clickhandler på "texten"
    som ökar dess font-size till 1.5rem*/
$(document).ready(function () {
    $("#texten").on("click", function () {
        $(this).css("font-size", "1.5rem");
    });
    /*  Tar bort klick handlern från
        texten*/
    $("#buttonText").click(function () {
        $("#texten").off("click");
    });
});


/*  Funktion lägger till ett klass namn på element
    och uppdaterar en text*/
function refreshFunction() {
    var updatedText = "Den här hemsidan gäller uppgift 3.1.3";
    document.getElementById("headertext").innerHTML = updatedText;
    document.getElementById("headertext").className = "headertext";
    document.getElementById("titletext").className = "headertext";
    document.getElementById("list").className = "list";
}

// Funktion som scrollar till botten
function scrollDownFunction() {
    window.scrollTo(0, document.body.scrollHeight);
}

// Funktion som scrollar till toppen
function scrollUpFunction() {
    window.scrollTo(0, 0);
}

/*  Funktion som triggar en alert och resetar
    formuläret*/
function submitFunction() {
    alert("Nice name!");
    document.getElementById("form").reset();
}

//  Funktion som triggar en alert
function keyFunction() {
    alert("En siffra i taget nu..")
}

// Funktion som roterar ett element 90grader
function rotateFunction(image) {
    image.style.transform = 'rotate(90deg)';
}

// Funktion som roterar ett element 0grader
function rotateBackFunction(image) {
    image.style.transform = 'rotate(0deg)';
}

/*  Funktion som kontinuerligt visar
    X och Y kordinaterna för musen.*/
function showCoordinates(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coordinates = "Coordinates: X : " + x + " Y : " + y;
    document.getElementById("coordinates").innerHTML = coordinates;
}

/*  Sätter preventDefault på elementet, vilket 
    gör så att dess defaultfunktion inte triggas.*/
document.getElementById("falseLink").addEventListener("click", function (event) {
    event.preventDefault()
});
