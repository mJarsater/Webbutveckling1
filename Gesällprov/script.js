window.onload = function () {

    var attachBtn = document.getElementById("fileInput");

    attachBtn.onchange = function () {
        console.log("hej");
        var input = document.getElementById('fileInput');
        var output = document.getElementById('selectedFiles');
        var children = "";
        for (var i = 0; i < input.files.length; ++i) {

            children += '<p>' + input.files.item(i).name + '<i class="far fa-file-code"></i>' + '  ' + '</p>';
        }
        output.innerHTML = children;
    }

}


var index = 1;

var slides = document.getElementById("function");

showSlide(index);

function navigate(btn) {

    showSlide(index += btn);
}

function currentSlide(n) {
    showSlide(index = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("event");
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}


