
window.onload = function () {
    const inputValue = document.getElementById("value");
    const btn = document.getElementById("btn");
    const sessionStorageOutput = document.getElementById("sessionStorage");
    var data = sessionStorage.getItem('comment');
    sessionStorageOutput.innerHTML += `${data}<br >`;

    btn.onclick = function () {
        sessionStorage.clear();
        const value = inputValue.value;

        sessionStorage.setItem('comment', value);

        let data = sessionStorage.getItem('comment');
        console.log(data);
        sessionStorageOutput.innerHTML = `${data}<br >`;
    };


};