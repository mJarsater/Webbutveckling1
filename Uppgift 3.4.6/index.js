// Skapar en websocket med rätt adress och port
const socket = new WebSocket('ws://people.dsv.su.se:8787');

// Ansluter till server
socket.addEventListener('open', function (event) {
    socket.send('Server öppen');
});

