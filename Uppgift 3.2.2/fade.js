

// Funktion som körs av klick på element med id fadeIn
$("#fadeIn").click(function () {
    // Fadear in element med id p1 på 1 sek
    $("#p1").fadeIn(1000);
    // Fadear in element med id p2 på 2 sek
    $("#p2").fadeIn(2000);
    // Fadear in element med id p3 på 3 sek
    $("#p3").fadeIn(3000);
    // Fadear in element med id fadeOutBtn på 4 sek
    $("#fadeOutBtn").fadeIn(4000);
});

// Funktion som körs av klick på element med id fadeOutBtn
$("#fadeOutBtn").click(function () {
    // Fadear ut element med id p1 på 1 sek
    $("#p1").fadeOut(1000);
    // Fadear ut element med id p2 på 2 sek
    $("#p2").fadeOut(2000);
    // Fadear ut element med id p3 på 3 sek
    $("#p3").fadeOut(3000);
    // Fadear ut element med id fadeOutBtn på 4 sek
    $("#fadeOutBtn").fadeOut(4000);
})

// Funktion som körs av klick på element med id fadeInOutBtn
$("#fadeInOutBtn").click(function () {
    // Fadear in och ut element med id p1 på 1 sek
    $("#p1").fadeToggle(1000);
    // Fadear in och ut element med id p2 på 2 sek
    $("#p2").fadeToggle(2000);
    // Fadear in och ut element med id p3 på 3 sek
    $("#p3").fadeToggle(3000);
    // Fadear in och ut element med id fadeOutBtn på 4 sek
    $("#fadeOutBtn").fadeToggle(4000);
})

