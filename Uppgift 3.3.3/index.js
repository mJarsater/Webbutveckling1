window.onload = function () {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!window.indexedDB) { alert("Error"); }
    var openBtn = document.getElementById("openBtn");
    var createBtn = document.getElementById("createBtn");
    var readBtn = document.getElementById("readBtn");
    var addBtn = document.getElementById("addBtn");
    var removeBtn = document.getElementById("removeBtn");
    var name = document.getElementById("name");
    var content = document.getElementById("dbContent");
    var dbName;
    var request;
    var db;
    openBtn.onclick = function () {
        dbName = document.getElementById("dbName").value;

        request = window.indexedDB.open(dbName, 1);
        request.onerror = function (event) {
            console.log("Error");
        }

        request.onsuccess = function (event) {
            db = request.result;
            var items = db.transaction(dbName + "Store", "readonly").objectStore(dbName + "Store").getAll();
            items.onsuccess = function () {
                var result = items.result.length;
                name.innerHTML = `Name: ${db.name} <br > Items: ${result}`;
            }
        }



    }

    createBtn.onclick = function () {

        dbName = document.getElementById("dbName").value;

        request = window.indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore(dbName + "Store", { autoIncrement: true });
            var name = document.getElementById("name");
            name.innerHTML = `New database <br >Name: ${db.name}`;
        }
        request.onsuccess = function (event) {
            db = request.result;
            var name = document.getElementById("name");
            name.innerHTML = `Name: ${db.name}`;
        }
    }

    addBtn.onclick = function () {
        tx = db.transaction(dbName + "Store", "readwrite");
        var store = tx.objectStore(dbName + "Store");
        var element = document.getElementById("element").value;
        store.put(element);
    }


    readBtn.onclick = function () {
        var items = db.transaction(dbName + "Store", "readonly").objectStore(dbName + "Store").getAll();
        items.onsuccess = function () {
            var result = items.result;
            name.innerHTML = `Name: ${db.name} <br > Items: ${result.length}`;
            content.innerHTML = "";
            for (var i = 0; i < result.length; i++) {
                content.innerHTML += `<li>${result[i]}</li> <br >`;
            }
        }
    }

    removeBtn.onclick = function () {
        tx = db.transaction(dbName + "Store", "readwrite");
        var store = tx.objectStore(dbName + "Store");
        store.clear();
        var length = store.getAll();
        length.onsuccess = function () {
            var result = length.result.length;
            name.innerHTML = `Name: ${db.name} <br > Items: ${result}`;
            content.innerHTML = `Database cleared`;

        }
    }

}
