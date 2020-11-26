window.onload = function () {
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value
        var domain = `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                console.log(this.responseText);
                document.getElementById("responseText").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", domain, true);
        xhttp.send();
    }
}