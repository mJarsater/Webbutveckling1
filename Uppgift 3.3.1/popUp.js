window.onload = function () {
    // Hämtar elementet med id "sessionStorage"
    var sessionStorageOutput = document.getElementById('sessionStorage');
    // Hämtar elemetet med som "heter" item i sessionStorage
    var sessionMsg = sessionStorage.getItem('comment');
    // Skriver ut elemetet
    sessionStorageOutput.innerHTML += `${sessionMsg}<br >`;

    // Skapar en eventlistner för klick som kallar på clearSession()
    document.getElementById("clearBtn").addEventListener("click", clearSession);

}


// Funktion som tömmer sessionStorage
function clearSession() {
    sessionStorage.clear();

    var sessionStorageOutput = document.getElementById('sessionStorage');
    var sessionMsg = sessionStorage.getItem('comment');
    // Skriver ut sessionStorage för att visa att det faktiskt är tomt
    sessionStorageOutput.innerHTML = `Msg cleared: ${sessionMsg}<br >`;
}