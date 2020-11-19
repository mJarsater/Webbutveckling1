window.onload = function () {

    submitBtn.onclick = function () {
        myWindow = window.open("https://www.w3schools.com", "_blank", "width=500, height=500");
    }

}

var submitBtn = document.getElementById("submitBtn");
var myWindow;
