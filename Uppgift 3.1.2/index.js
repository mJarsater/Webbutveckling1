var intervalVar;
var timeOutVar;

/*  Funktion som körs när fönstret har laddat.*/
window.onload = function () {



    /*  Alert med texten i.*/
    alert("Den här hemsidan behövs för denna uppgift");

    /*  Confirm som kräver ett svar från användaren.*/
    confirm("Har du förstått?");


    languageFunction();

    /*  Sätter interVal till setInterval(timer)*/
    intervalVar = setInterval(timer);




    /*  Promt som kräver input från användaren*/
    var favoriteLanguage = prompt("Vad är ditt favoritspråk att programmera i?");
    if (favoriteLanguage != "") {
        /*  Skriver ut svaret från använaren*/
        document.getElementById("greeting").textContent = "Vad roligt att höra, jag gillar också " + favoriteLanguage + "!";
    } else {
        /*  Körs om inget svar finns*/
        document.getElementById("greeting").textContent = "Det är okej. Alla kan inte ha en favorit.";
    }

    /*  Sätter ett interval på 1000 ms,
        då alerten körs i slutet av 
        detta inteval. Körs kontinuerligt*/
    intervalVar = setInterval(function () {
        alert("Är du kvar?");
    }, 10000)

    /*  Sätter ett timeout på 5000 ms,
        då alerten körs i slutet av 
        detta inteval. Körs bara en gång*/
    timeOutVar = setTimeout(function () {
        alert("Nu har du varit här länge...");
    }, 5000);

}

/*  Funktion som skriver vilket språk
    användaren har på sin browser. */
function languageFunction() {
    var text = "Jag ser att du använder " +
        navigator.language
        + " för din browser";
    document.getElementById("language").innerHTML = text;

}

/*  Funktion som öppnar ett nytt fönster,
    mes bestämd bred och höjd.  */
function openFuntion() {
    myWindow = window.open(
        "https://www.w3schools.com", "_blank",
        "width=500, height=500");
}

/*  Funktion som stänger det tidigare
    öppnade fönstret.   */
function closeFunction() {
    myWindow.close();
}


/*  Funktion som kallar på på 
    timeOutVar & intervalVar
    med clearTimeout, respektive
    clearInterval*/
function noTimeout() {
    clearTimeout(timeOutVar)
    clearInterval(intervalVar);
}
