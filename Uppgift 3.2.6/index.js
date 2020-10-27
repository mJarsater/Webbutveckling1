window.onload = function () {
    document.getElementById("name").focus();
    $("#dataSystSection").hide();
    $("#erpSection").hide();
    $("#markItSection").hide();
}


function dataSystFunction() {
    document.getElementById("dynamicForm").reset();
    document.getElementById("datasystRadio").checked = true;
    $("#dataSystSection").show();
    $("#erpSection").hide();
    $("#markItSection").hide();
}

function erpFunction() {
    document.getElementById("dynamicForm").reset();
    document.getElementById("erpRadio").checked = true;
    $("#erpSection").show();
    $("#dataSystSection").hide();
    $("#markItSection").hide();
}

function markItFunction() {
    document.getElementById("dynamicForm").reset();
    document.getElementById("markItRadio").checked = true;
    $("#markItSection").show();
    $("#dataSystSection").hide();
    $("#erpSection").hide();

}

function validateMarkIt() {
    var comment = document.forms["dynamicForm"]["commentMarkIt"].value;
    if (comment == "") {
        alert("Lämna en kommentar, tack!");
        return false;
    }
    return (true);
}

function validateDataSyst() {
    var checkbox = document.querySelector('input[name="checkbox"]:checked');
    if (!checkbox) {
        alert("Någonkurs har du väl läst?");
        return false;
    }
}

function validateErp() {
    var favorite = document.forms["dynamicForm"]["favoriteErp"].value;
    if (favorite == "") {
        alert("Någon kurs måste väl varit lite roligare än de andra?");
        return false;
    }
}

function validate() {
    var radioValue = $("input[name='radio']:checked").val();
    switch (radioValue) {
        case "erp":
            validateErp();
            break;
        case "markIt":
            validateMarkIt();
            break;
        case "datasyst":
            validateDataSyst();
            break;
    }
}



