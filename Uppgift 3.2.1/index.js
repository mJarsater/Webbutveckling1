var index  = 1;

var slides = document.getElementById("function");

showSlide(index);

function navigate(btn){

showSlide(index += btn);
}

function currentSlide(n){
    showSlide(index = n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("image");
    if(n > slides.length){index =1}
    if(n < 1){index = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    slides[index-1].style.display = "block";
}