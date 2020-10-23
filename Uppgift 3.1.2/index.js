$(document).ready(function () {
    alert("Den här hemsidan behövs för denna uppgift");
    confirm("Har du förstått?");
    languageFunction();
    var favoriteLanguage = prompt("Vad är ditt favoritspråk att programmera i?");
    if (favoriteLanguage != "") {
        document.getElementById("greeting").textContent = "Vad roligt att höra, jag gillar också " + favoriteLanguage + "!";
    } else {
        document.getElementById("greeting").textContent = "Det är okej. Alla kan inte ha en favorit.";
    }

    var myVariable = setInterval(timer, 1000);

    function timer() {
        var date = new Date();
        var time = date.toLocaleTimeString();
        document.getElementById("time").textContent = time;
    }

    var myWindow;

    function openFuntion() {
        myWindow = window.open("https://www.w3schools.com", "_blank", "width=500, height=500");
    }

    function closeFunction() {
        myWindow.close();
    }


    setInterval(function () {
        alert("Är du kvar?");
    }, 10000)

    var myOtherVar;
    myOtherVar = setTimeout(function () {
        alert("Nu har du varit här länge...");
    }, 5000);



    function stopTime() {
        clearInterval(myVariable);
    }

    function noTimeout() {
        clearTimeout(myOtherVar)
    }

    function languageFunction() {
        var text = "Jag ser att du använder " +
            navigator.language
            + " för din browser";
        document.getElementById("language").innerHTML = text;
    }

});
