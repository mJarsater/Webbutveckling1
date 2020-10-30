window.onload = function () {

    var btn = document.getElementById("btn");

    btn.onclick = function () {
        var message = document.getElementById("message").value;
        var iframe = document.getElementsByTagName('iframe')[0].contentWindow;

        iframe.postMessage(message, "http://127.0.0.1:5500/Uppgift%203.4.1/html/iframe.html");
    }
}   