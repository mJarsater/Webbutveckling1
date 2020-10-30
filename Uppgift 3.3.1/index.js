
window.onload = function () {
    const inputKey = document.getElementById("key");
    const inputValue = document.getElementById("value");
    const btn = document.getElementById("btn");
    const localStorageOutput = document.getElementById("localStorageOutput");




    btn.onclick = function () {
        const key = inputKey.value;
        const value = inputValue.value;


        if (key && value) {
            localStorage.setItem(key, value);
            location.reload();
        }
    };

    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        localStorageOutput.innerHTML += `${key}: ${value}<br >`;
    }

};
function clearLocalStorage() {
    const localStorageOutput = document.getElementById("localStorageOutput");
    localStorage.clear();

    const key = localStorage.key(1);
    const value = localStorage.getItem(key);

    localStorageOutput.innerHTML = `Local Storage Cleared <br >Key: ${key}  Value: ${value}<br >`;


}