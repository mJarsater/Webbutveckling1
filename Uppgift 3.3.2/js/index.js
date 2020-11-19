window.onload = function () {
    var input = document.getElementById('fileInput');
    var output = document.getElementById('output');

    input.addEventListener('change', function (event) {
        console.log(input.files);
        const reader = new FileReader();
        reader.onload = function () {
            output.append(reader.result);
        }
        reader.readAsText(input.files[0]);
    });

}