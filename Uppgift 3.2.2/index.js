


function toggleText(){
    $(".showBtn").hide();
    var buttonToToggle = document.getElementById("hideBtn");
    buttonToToggle.classList.toggle("hideBtn");
    var textToToggle = document.getElementById("interestingText");
    textToToggle.classList.toggle("interestingText");
}

function getShowBtn(){
    $(".showBtn").show();
    var textToToggle = document.getElementById("interestingText");
    textToToggle.classList.toggle("interestingText");
    var buttonToToggle = document.getElementById("hideBtn");
    buttonToToggle.classList.toggle("hideBtn");
}
