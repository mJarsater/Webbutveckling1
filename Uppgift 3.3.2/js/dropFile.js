document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();

});
document.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    handleFile(e.dataTransfer.files);
});

function handleFile(files) {
    const reader = new FileReader();
    const preview = document.querySelector('img');
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (files) {
        reader.readAsDataURL(files[0]);
    }
}