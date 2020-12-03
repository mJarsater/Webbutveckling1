window.onload = function () {

    // Hämtar elementen med respektiva ID
    var input = document.getElementById('fileInput');
    var output = document.getElementById('output');

    // Lägger en eventlistner på input
    input.addEventListener('change', function (event) {

        // Skapar en nya filereader
        const reader = new FileReader();

        // Läser in filen som text
        reader.readAsText(input.files[0]);

        /*  När filen har lästs in så skrivs
            dess innehåll ut på webbsidan*/
        reader.onload = function () {
            output.append(reader.result);
        }
    });

}