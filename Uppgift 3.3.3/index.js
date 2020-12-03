window.onload = function () {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    // Kollar om indexedDB är tillgängligt för webbbrowsern
    if (!window.indexedDB) { alert("Error"); }

    // Hämtar element med respektive ID
    var openBtn = document.getElementById("openBtn");
    var createBtn = document.getElementById("createBtn");
    var readBtn = document.getElementById("readBtn");
    var addBtn = document.getElementById("addBtn");
    var removeBtn = document.getElementById("removeBtn");
    var name = document.getElementById("name");
    var content = document.getElementById("dbContent");

    /* Variabler för databasnamn, förfrågan och databasen*/
    var dbName;
    var request;
    var db;


    // Funktion för att öppna en databas
    openBtn.onclick = function () {


        dbName = document.getElementById("dbName").value;

        /*  Request för att öppna version 1 av databasen
            vars namn är samma som innehållet i variabeln
            dbname*/
        request = window.indexedDB.open(dbName, 1);

        // Om de ej går -> Error
        request.onerror = function (event) {
            console.log("Error");
        }

        /*  Om databasen kan öppnas så sparas databasen i variabeln db*/
        request.onsuccess = function (event) {
            db = request.result;

            /*  Spara antalet element i databasen till variabeln items
                och skriver ut infon på webbsidan.*/
            var items = db.transaction(dbName + "Store", "readonly").objectStore(dbName + "Store").getAll();
            items.onsuccess = function () {
                var result = items.result.length;
                name.innerHTML = `Name: ${db.name} <br > Items: ${result}`;
            }
        }



    }

    // Funktion för att skapa en databas
    createBtn.onclick = function () {

        dbName = document.getElementById("dbName").value;

        /*  Request för att öppna version 1 av databasen
            vars namn är samma som innehållet i variabeln
            dbname*/
        request = window.indexedDB.open(dbName, 1);

        /*  Skapar en ny databas med tillhörande objectstore*/
        request.onupgradeneeded = function (event) {
            var db = event.target.result;

            // Skapar en objectstore för databasen
            var objectStore = db.createObjectStore(dbName + "Store", { autoIncrement: true });
            var name = document.getElementById("name");
            name.innerHTML = `New database <br >Name: ${db.name}`;
        }

    }

    // Funktion som lägger till element i en databas
    addBtn.onclick = function () {
        // Skapar en transaktion till databasen
        transaction = db.transaction(dbName + "Store", "readwrite");
        // Skapar en transaktion till dasens objectstore
        var store = transaction.objectStore(dbName + "Store");
        var element = document.getElementById("element").value;
        // "Stoppar" in elementet i databasen
        store.put(element);
    }

    // Funktion som läser från en databas
    readBtn.onclick = function () {
        // Hämtar alla element i databasen till en array. 
        var items = db.transaction(dbName + "Store", "readonly").objectStore(dbName + "Store").getAll();
        // Om det lyckas så skriva alla element ut på sidan
        items.onsuccess = function () {
            var result = items.result;
            name.innerHTML = `Name: ${db.name} <br > Items: ${result.length}`;
            content.innerHTML = "";

            // Loop för att skriva ut alla element
            for (var i = 0; i < result.length; i++) {
                content.innerHTML += `<li>${result[i]}</li> <br >`;
            }
        }
    }


    // Funktion som rensar en databas
    removeBtn.onclick = function () {
        // Skapar en transaktion till databasen
        transaction = db.transaction(dbName + "Store", "readwrite");
        // Skapar en transaktion till dasens objectstore
        var store = transaction.objectStore(dbName + "Store");

        // Rensar databasen
        store.clear();

        // Skriver ut databasens info för att visa att den är tom. 
        var length = store.getAll();
        length.onsuccess = function () {
            var result = length.result.length;
            name.innerHTML = `Name: ${db.name} <br > Items: ${result}`;
            content.innerHTML = `Database cleared`;

        }
    }

}
