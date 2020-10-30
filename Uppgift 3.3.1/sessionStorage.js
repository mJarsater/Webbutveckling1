window.onload = function () {
    const inputValue = document.getElementById("value");
    const btn = document.getElementById("btn");


    btn.onclick = function () {
        sessionStorage.clear();
        const value = inputValue.value;
        sessionStorage.setItem('comment', value);
        openFuntion();
        console.log(sessionStorage.getItem('comment'));
    };
};

function openFuntion() {
    myWindow = window.open("http://127.0.0.1:5500/Uppgift%203.3.1/popUp.html", "_blank", "width=500, height=500");
}