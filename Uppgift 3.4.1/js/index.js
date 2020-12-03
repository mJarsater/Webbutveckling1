window.onload = function () {

    // Hämtar elementet med ID btn
    var btn = document.getElementById("btn");


    // Funktion som skapar ett meddelande och skickar till rätt adress
    btn.onclick = function () {

        // Hämtar meddelandet som ska skickas
        var message = document.getElementById("message").value;

        // Hämtar iframen dit meddelandet ska skickas
        var iframe = document.getElementsByTagName('iframe')[0].contentWindow;

        // Skickar meddelandet
        iframe.postMessage(message, "http://127.0.0.1:5500/Uppgift%203.4.1/html/iframe.html");
    }
}   