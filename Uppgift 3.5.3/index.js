if ('serviceWorker' in navigator) {
    console.log("Service worker in progress");
    navigator.serviceWorker.register('service-worker.js').then(function () {
        console.log("Service worker registered");
    }, function () {
        console.log("Service worker failed");
    });
} 