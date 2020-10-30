
var source = new EventSource("https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.5/example.php");

source.onmessage = function (event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};
