
// Funktion som öppnar en tabb
function openTab(tabNumber) {
    var i, tabContent;

    /*  Hämtar alla element med klassen "tabContent" 
        till arrayen tabContent*/
    tabContent = document.getElementsByClassName("tabContent");
    // Loopar över alla element och sätter display none
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Hämtar elementet med "tabNumber" och lägger till display block.
    document.getElementById(tabNumber).style.display = "block";


}