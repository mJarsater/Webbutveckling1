
// Lägger en eventlistner på hela fönstret
window.addEventListener('message', receiver, false);

// Funktion som hämtar ett meddelande
function receiver(e) {
    // Hämtar elementet med ID "message"
    var message = document.getElementById("message");
    // Kollar så att meddelandet kommer ifrån "rätt" adress
    if (e.origin != 'http://127.0.0.1:5500/Uppgift%203.4.1/html/index.html') {
        message.innerHTML += `${e.data}`
    } else {
        // Annars -> Alert
        alert(e.data);
    }
}
