window.onload = function () {

    var attachBtn = document.getElementById("fileInput");

    attachBtn.onchange = function () {
        console.log("hej");
        var input = document.getElementById('fileInput');
        var output = document.getElementById('selectedFiles');
        var children = "";
        for (var i = 0; i < input.files.length; ++i) {

            children += '<p>' + input.files.item(i).name + '<i class="far fa-file-code" ></i>' + '  ' + '</p>';
        }
        output.innerHTML = children;
        var icon = document.getElementsByClassName("far fa-file-code");

        icon.onclick = function () {
            console.log("test")
        }
    }

}

