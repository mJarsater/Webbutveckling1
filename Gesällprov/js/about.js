
window.fbAsyncInit = function () {
    document.getElementById("share-btn").addEventListener("click", shareFunction);
    FB.init({
        appId: '197952978615021',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0'
    });
};

window.onload = function () {


    document.getElementById("memberBtn").addEventListener("click", openMemebership);
    document.getElementById("share-btn").addEventListener("click", shareFunction);
}


// Funktion som öppnar en ny sida med länken
function openMemebership() {
    myWindow = window.open("https://medlem.disk.su.se/");
}

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


function shareFunction() {
    FB.ui({
        method: 'share',
        href: 'https://www.facebook.com/diskstudentkar',
    }, function (response) { });
}