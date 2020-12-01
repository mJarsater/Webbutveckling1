window.onload = function () {
    // Sätter fokuset på inputfältet för namn
    document.getElementById("name").focus();
    // Gömmer alla tre elementen
    $("#dataSystSection").hide();
    $("#erpSection").hide();
    $("#markItSection").hide();


    // Hämtar och lägger till en eventlistner för alla radiobutton elementen.
    var datasystRadioBtn = document.getElementById("datasystRadio");
    datasystRadioBtn.addEventListener("click", dataSystFunction);
    var erpRadioBtn = document.getElementById("erpRadio");
    erpRadioBtn.addEventListener("click", erpFunction);
    var markItRadioBtn = document.getElementById("markItRadio");
    markItRadioBtn.addEventListener("click", markItFunction);
}

//Funktion som visar formuläret för Data- och Systemvetenskap, och gömmer de andra.
function dataSystFunction() {
    var datasystRadio = document.getElementById("datasystRadio");
    if (datasystRadio.checked) {
        console.log("test")
        // Resetar formuläret
        document.getElementById("dynamicForm").reset();
        // Kollar vilken radiobutton som är ikryssad
        document.getElementById("datasystRadio").checked = true;
        $("#dataSystSection").show();
        $("#erpSection").hide();
        $("#markItSection").hide();
    }
}

//Funktion som visar formuläret för ERP, och gömmer de andra.
function erpFunction() {
    var erpRadio = document.getElementById("erpRadio");
    if (erpRadio.checked) {
        // Resetar formuläret
        document.getElementById("dynamicForm").reset();
        // Kollar vilken radiobutton som är ikryssad
        document.getElementById("erpRadio").checked = true;
        $("#erpSection").show();
        $("#dataSystSection").hide();
        $("#markItSection").hide();
    }
}

//Funktion som visar formuläret för Mark It, och gömmer de andra.
function markItFunction() {
    var markItRadio = document.getElementById("markItRadio");
    if (markItRadio.checked) {
        // Resetar formuläret
        document.getElementById("dynamicForm").reset();
        // Kollar vilken radiobutton som är ikryssad
        document.getElementById("markItRadio").checked = true;
        $("#markItSection").show();
        $("#dataSystSection").hide();
        $("#erpSection").hide();
    }
}

// Funktion som validerar att användaren har skrivit in de obligatoriska fälten
function validateMarkIt() {
    var comment = document.forms["dynamicForm"]["commentMarkIt"].value;
    if (comment == "") {
        alert("Lämna en kommentar, tack!");
        return false;
    }
    return (true);
}

// Funktion som validerar att användaren har skrivit in de obligatoriska fälten
function validateDataSyst() {
    var checkbox = document.querySelector('input[name="checkbox"]:checked');
    if (!checkbox) {
        alert("Någonkurs har du väl läst?");
        return false;
    }
}

// Funktion som validerar att användaren har skrivit in de obligatoriska fälten
function validateErp() {
    var favorite = document.forms["dynamicForm"]["favoriteErp"].value;
    if (favorite == "") {
        alert("Någon kurs måste väl varit lite roligare än de andra?");
        return false;
    }
}


// Switchsats som triggar "rätt" validate funktion
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



