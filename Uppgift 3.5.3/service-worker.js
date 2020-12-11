
// Skapar ett verisionnamn för cachen
const cacheName = 'v1';

/*  Om service workern ska installeras så
    öppna och lägg till alla sidor i cachen */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    'index.html',
                    'other.html',
                    'another.html',
                    'style.css',
                    'coco.jpg'
                ]
            );
        })
    );
});

// Om service workern vill hämta så svara med chachen
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request));
    console.log("Nya");
});