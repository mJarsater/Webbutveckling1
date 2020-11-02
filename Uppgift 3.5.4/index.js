var map, infoWindow, id;


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 13,
        mapTypeId: 'roadmap',
    });
    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.getElementById("locationBtn");
    const trackingButton = document.getElementById("trackingBtn");
    const stopTracking = document.getElementById("stopTrackBtn");
    trackingButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
            id = navigator.geolocation.watchPosition(showPostition, showError, options);

        }
    });
    stopTracking.addEventListener("click", () => {
        showError();
    });
    locationButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.open(map);
                map.setCenter(pos);
            });

        }
    });


    function showPostition(position) {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.open(map);
        map.setCenter(pos);
    }

    function showError() {
        console.log("Error");
        navigator.geolocation.clearWatch(id);
    }
}
