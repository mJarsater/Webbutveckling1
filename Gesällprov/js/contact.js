window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", submitFunction, false);
    document.getElementById("close-link").addEventListener("click", closeWindow);
    var attachBtn = document.getElementById("fileInput");

    attachBtn.onchange = function () {
        var input = document.getElementById('fileInput');
        var output = document.getElementById('selectedFiles');
        var children = "";
        for (var i = 0; i < input.files.length; ++i) {

            children += '<p>' + input.files.item(i).name + '<i class="far fa-file-code" ></i>' + '  ' + '</p>';
        }
        output.innerHTML = children;
    }

}


function submitFunction(evt) {
    evt.preventDefault();
    var name = document.getElementById("name").value;
    document.getElementById("sent-name").append(name);
    document.getElementById("thank-you-section").style.display = "block";
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("title-section").style.display = "none";
}

function closeWindow() {
    console.log("HEJ");
    close();
}
