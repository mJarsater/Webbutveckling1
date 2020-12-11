
try {
    const socket = new WebSocket('ws://people.dsv.su.se');

    socket.onopen = () => {
        console.log('connected');
    };

} catch (error) {
    console.log(error)
}