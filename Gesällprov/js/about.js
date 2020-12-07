
// Variabler för kartan
var map, infoWindow, id;

// Funktion som "laddar upp" kartan
function initMap() {

    /*  Skapar ett nytt googlemaps objekt som tilldelas till ID map*/
    map = new google.maps.Map(document.getElementById("map"), {
        // Variabler för startpunkt, zoom och karttyp
        center: { lat: 59.406550, lng: 17.944950 },
        zoom: 13,
        mapTypeId: 'roadmap',
    });
    // Skapar ett nytt infowindow som kan sättas ut på kartan
    infoWindow = new google.maps.InfoWindow({
        content: "Här finns vi!",
    });

    // Sätter infowindow till rätt position på kartan.
    const pos = { lat: 59.406550, lng: 17.944950 };
    infoWindow.setPosition(pos);
    infoWindow.open(map);
    // Centrerar kartan över rätt position
    map.setCenter(pos);
}