window.onload = function () {
    // Hämtar elementet med ID "btn"
    var btn = document.getElementById("btn");

    // Funktion som skickar ett httprequest
    btn.onclick = function () {
        // Hämtar innehållet i elemnten med respektive ID
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value;

        // Variabel för domänen som ska ta emot vårt httprequest
        var domain = `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`;
        // Skapar ett nytt Httprequest object
        var xhttp = new XMLHttpRequest();

        // Initierar httprequestet
        xhttp.open("GET", domain, true);

        // Skickar requestet
        xhttp.send();

        // Funktion som körs när readystate har ändrats
        xhttp.onreadystatechange = function () {
            // Dubbelkollar så att requestet är klart
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                /*  Skriver ut det som returneras från requestet(this.responseText) till sidan*/
                document.getElementById("responseText").innerHTML = this.responseText;
            }
        };

    }
}