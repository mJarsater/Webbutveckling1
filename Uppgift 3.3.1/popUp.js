window.onload = function () {
    var sessionStorageOutput = document.getElementById('sessionStorage');
    var sessionMsg = sessionStorage.getItem('comment');

    sessionStorageOutput.innerHTML += `${sessionMsg}<br >`;

}

function clearSession() {
    sessionStorage.clear();
    console.log(sessionStorage.getItem('comment'));
    var sessionStorageOutput = document.getElementById('sessionStorage');
    var sessionMsg = sessionStorage.getItem('comment');

    sessionStorageOutput.innerHTML = `Msg cleared: ${sessionMsg}<br >`;
}