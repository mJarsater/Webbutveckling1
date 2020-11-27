

/*  Funktion som togglar klassen för elementet med ID
    hideBtn*/
function toggleText() {
    $(".showBtn").hide();
    var buttonToToggle = document.getElementById("hideBtn");
    buttonToToggle.classList.toggle("hideBtn");
    var textToToggle = document.getElementById("interestingText");
    textToToggle.classList.toggle("interestingText");
}

/*  Funktion som togglar klassen för elementet med ID
    showBtn*/
function getShowBtn() {
    $(".showBtn").show();
    var textToToggle = document.getElementById("interestingText");
    textToToggle.classList.toggle("interestingText");
    var buttonToToggle = document.getElementById("hideBtn");
    buttonToToggle.classList.toggle("hideBtn");
}


