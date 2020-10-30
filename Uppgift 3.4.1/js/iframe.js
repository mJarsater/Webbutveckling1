window.addEventListener('message', receiver, false);
function receiver(e) {
    var message = document.getElementById("message");
    if (e.origin != 'http://127.0.0.1:5500/Uppgift%203.4.1/html/index.html') {
        if (e.data == "Meddelande") {
            message.innerHTML += `${e.data}`
        } else {
            alert(e.data);
        }
    }
}