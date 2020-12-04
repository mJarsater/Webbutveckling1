var map, infoWindow, id;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 59.406550, lng: 17.944950 },
        zoom: 13,
        mapTypeId: 'roadmap',
    });
    infoWindow = new google.maps.InfoWindow({
        content: "Här finns vi!",
    });
    const pos = { lat: 59.406550, lng: 17.944950 };
    infoWindow.setPosition(pos);
    infoWindow.open(map);

    map.setCenter(pos);
}