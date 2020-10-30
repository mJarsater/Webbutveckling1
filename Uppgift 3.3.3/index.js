window.onload = function () {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;


    if (!window.indexedDB) { alert("Error"); }
    var openBtn = document.getElementById("openBtn");


    openBtn.onclick = function () {
        var dbName = document.getElementById("dbName").value;

        console.log(dbName);
        var request = window.indexedDB.open(dbName, 1);

        request.onupgradeneeded = function (event) {
            var db = event.target.result;
            var store = db.createObjectStore(dbName + "Store", { autoIncrement: true });
            store.add("Test1");
            store.add("Test2");

            console.log(db + " - Upgrade");


        }
        request.onsuccess = function (event) {
            var db = event.target.result;
            console.log(db + " - Success");
            var transaction = db.transaction(dbName + "Store", "readwrite");
            var store = transaction.objectStore(dbName + "Store");

            var one = store.get(1);
            var two = store.get(2);
        }

    }






};