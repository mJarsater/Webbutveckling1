
window.onload = function () {
    // Hämtar alla element efter ID
    const inputKey = document.getElementById("key");
    const inputValue = document.getElementById("value");
    const sendBtn = document.getElementById("sendBtn");
    const localStorageOutput = document.getElementById("localStorageOutput");
    const clearBtn = document.getElementById("clearBtn");


    // Funktion som skapar ett item för localstorage
    sendBtn.onclick = function () {
        // key får värdet av input i "key"
        const key = inputKey.value;
        // value får värdet av input i "value"
        const value = inputValue.value;

        // Kollar så att båda har ett värde
        if (key && value) {
            // Skapar ett item och lägget till i localstorage
            localStorage.setItem(key, value);
            // Laddar om sidan
            location.reload();
        }
    };

    // Funktion som raderar allt localstorage
    clearBtn.onclick = function () {
        const localStorageOutput = document.getElementById("localStorageOutput");
        // Clearar localstorage
        localStorage.clear();

        // För att visa att det faktiskt är borta.
        const key = localStorage.key(1);
        const value = localStorage.getItem(key);
        // Skriver ut localstorage (som nu ska vara tomt.)
        localStorageOutput.innerHTML = `Local Storage Cleared <br >Key: ${key}  Value: ${value}<br >`;


    }

    // Loopar igenom och skriver ut localstorage
    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        localStorageOutput.innerHTML += `${key}: ${value}<br >`;
    }

};
