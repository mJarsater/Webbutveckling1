
//  Variable för index
var index = 1;

//  Kallar på funktion showSlides med (index)
showSlide(index);

/*  Funtion som tar en int och kallar på 
    showSlides med index += parametern*/
function navigate(n) {

    showSlide(index += n);
}

/*  Funktion som kallar på showSlides
    med parametern*/
function currentSlide(n) {
    showSlide(index = n);
}


function showSlide(n) {
    /*  Hämtar alla objekt med klassen image,
        dessa läggs då i en array*/
    var slides = document.getElementsByClassName("image");
    /*  Kollar om parametern är större än arrayens längd
        sätter isf index till 1*/
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    /*  Loopar över arrayen och sätter display: none
        på alla element*/
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*  Sätter display block på det element
        som just nu pekas ut av index -1*/
    slides[index - 1].style.display = "block";
}