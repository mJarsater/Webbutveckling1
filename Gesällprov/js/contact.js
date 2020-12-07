window.onload = function () {

    // Lägger eventhandlers på element med respektive ID
    document.getElementById("contact-form").addEventListener("submit", submitFunction, false);
    document.getElementById("close-link").addEventListener("click", closeWindow);
    document.getElementById("fileInput").addEventListener("change", attachFunction);
}



// Funktion som skriver ut de filer som har bifogats
function attachFunction() {
    // Hämtar elementen med respektive ID
    var input = document.getElementById('fileInput');
    var output = document.getElementById('selectedFiles');
    var children = "";
    // Loopar över arrayen med filer
    for (var i = 0; i < input.files.length; ++i) {
        // För varje element i arrayen skriver den ut namnet på filen  + en ikon
        children += '<p>' + input.files.item(i).name + '<i class="far fa-file-code" ></i>' + '  ' + '</p>';
    }
    output.innerHTML = children;
}


// Funktion som skapar ett "tackmeddelande" efter att formuläret har skickats
function submitFunction(evt) {
    // Stoppar sidan från att laddas om
    evt.preventDefault();
    // Hämtar innehållet id elementet med ID name
    var name = document.getElementById("name").value;

    // Lägger till de tidigare hämtade namnet
    document.getElementById("sent-name").append(name);

    // Sätter rätt display på alla element
    document.getElementById("thank-you-section").style.display = "block";
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("title-section").style.display = "none";
}

// Funktion som stänger fönstret
function closeWindow() {
    close();
}
