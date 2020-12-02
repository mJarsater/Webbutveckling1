window.onload = function () {

    // Hämtar elementen med respektive ID
    const inputValue = document.getElementById("value");
    const btn = document.getElementById("btn");

    // onclick funktion för btn
    btn.onclick = function () {
        // Rensar sessionStorage
        sessionStorage.clear();
        // lägger värdet i value som value för sessionStorage
        const value = inputValue.value;
        // Skapar ett sessionStorageobjekt med "namn" comment och värdet i value
        sessionStorage.setItem('comment', value);
        // Kallar på openFunction
        openFunction();

    };
};

// Funktion som öppnar ett nytt fönster, där sessionStorage visas
function openFunction() {
    myWindow = window.open("http://127.0.0.1:5500/Uppgift%203.3.1/popUp.html", "_blank", "width=500, height=500");
}