var input = document.getElementById('fileInput');
var output = document.getElementById("output");

input.addEventListener('change', () => {
    var files = input.files;
    if (files.lengt == 0) {
        return;
    } else {
        output.append("text");
    }
})