var map, infoWindow, id;

// Funktoin som initierar kartan
function initMap() {
    // Skapar nu karta från google maps
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 13,
        mapTypeId: 'roadmap',
    });
    // Skapar ett infowindow för att visa aktuell plats på kartan
    infoWindow = new google.maps.InfoWindow();
    // Hämtar element med respektive ID
    const locationButton = document.getElementById("locationBtn");
    const trackingButton = document.getElementById("trackingBtn");
    const stopTrackingBtn = document.getElementById("stopTrackBtn");

    // Lägger en eventlistner på trackbutton
    trackingButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
            id = navigator.geolocation.watchPosition(showPostition, stopTracking, options);

        }
    });

    // Lägger en eventlistner på stopTrackingBtn
    stopTrackingBtn.addEventListener("click", () => {
        stopTracking();
    });

    // Lägger en eventlistner på locationBtn
    locationButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            // Hämtar nuvarande postion
            navigator.geolocation.getCurrentPosition(position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                // Flyttar fönster och karta till nuvarande position
                infoWindow.setPosition(pos);
                infoWindow.open(map);
                map.setCenter(pos);
            });

        }
    });

    // Funktion för att visa nuvarande position vid tracking
    function showPostition(position) {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        // Flyttar fönster och karta till nuvarande position
        infoWindow.setPosition(pos);
        infoWindow.open(map);
        map.setCenter(pos);
    }
    // Stänger av tracking
    function stopTracking() {
        navigator.geolocation.clearWatch(id);
    }
}
