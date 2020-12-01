
$(function () {
    // Gör elementet med id "box" draggable
    $("#box").draggable();
    // Skapar en datepicker av elementet med id "date" 
    $("#date").datepicker();
});

$(function () {
    // Skapar en eventhandler för klick
    $("#button").on("click", function () {
        // Byter mellan firstClass och otherClass på 0.5s
        $(".firstClass").switchClass("firstClass", "otherClass", 500);
        // Byter mellan firstClass och otherClass på 0.5s
        $(".otherClass").switchClass("otherClass", "firstClass", 500);
    });
});
