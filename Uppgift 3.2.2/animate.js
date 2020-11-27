
/*  Funktion som animerar bredden på box 1
    med en swing animation*/
function animateSwing() {
    $("#box1").animate({
        width: 500
    }, 3000, 'swing');
}
/*  Funktion som animerar bredden på box 1
    med en linjär animation*/
function animateLinear() {
    $("#box1").animate({
        width: 500
    }, 3000, 'linear');
}

/*  Funktion som animerar box 1 så att den
    får ursprunglig storlek */
function resetAnimation() {
    $("#box1").animate({
        width: 100
    })
}