function getDatabase() {
    var dbName = document.getElementById("dbName").value;
    var dataBase = document.getElementById("database");
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var db;

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }

    var request = window.indexedDB.open(dbName);

    request.onerror = function (event) {
        console.log("Error");
    };
    request.onupgradeneeded = function (event) {
        console.log("Success!")
        db = event.target.result;

        var objectStore = db.createObjectStore(dbName, { keyPath: "tastTitle" });


        dataBase.innerHTML += "<li>Object store created.</li>";
    };


}