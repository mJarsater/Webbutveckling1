/*  Lägger en eventlistner på hela dokumentet
    som stoppar defaultfunktion för dragover
        */
document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();

});

/*  Lägger en eventlistner på hela dokumentet
    som stoppar defaultfunktion för drop
        */
document.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // Kallar istället på funktionen handleFiles
    handleFile(e.dataTransfer.files);
});


/*  Funktion som skapar en filereader och
    visar filens innhåll på sidan.     */
function handleFile(files) {
    // Skapar ny filereader
    const reader = new FileReader();
    // Hämtar elementet av "typen" img
    const preview = document.querySelector('img');
    /*  Lägger en evenlistner på reader
        som förhandsvisar bilder i webbläsaren */
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    // Läser in filens data
    // reader.result filens data
    if (files) {
        reader.readAsDataURL(files[0]);
    }
}