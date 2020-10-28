$(function () {
    $("#box").draggable();
    $("#date").datepicker();
});

$(function () {
    $("#button").on("click", function () {
        $(".firstClass").switchClass("firstClass", "otherClass", 500);
        $(".otherClass").switchClass("otherClass", "firstClass", 500);
    });
});
