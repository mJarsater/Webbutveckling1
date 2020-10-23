var date = new Date();

document.getElementById("date").textContent = date;

function myFunction() {
    var newDate = new Date();
    document.getElementById("date").textContent = newDate;
}

var array = [];
function getText() {
    var text = document.getElementById("input").value;
    array.push(text);
}

function printArray() {
    var comment = "<ul>";
    for (var i = 0; i < array.length; i++) {
        comment += "<li>" + array[i] + "</li>";
    }
    comment += "</ul>";
    document.getElementById("comment").innerHTML = comment;
}

function calculateFunction() {
    var tal1 = document.getElementById("tal1").value;
    var tal2 = document.getElementById("tal2").value;
    var svar = Math.pow(tal1, tal2);
    document.getElementById("svar").textContent = svar;
}

function convertToInteger() {
    var text = document.getElementById("textToInteger").value;
    var number = Number(text);
    document.getElementById("numberFromString").textContent = number;
}

function replace() {
    var faulty = document.getElementById("faultySentence").innerHTML;
    var correct = faulty.replace("KTH", "SU");
    document.getElementById("faultySentence").innerHTML = correct;
}

function regExFunction() {
    var sentence = document.getElementById("sentence").innerHTML;
    var bokstav = document.getElementById("bokstav").value;
    var pattern = new RegExp("[" + bokstav + "]", "g");
    var result = sentence.match(pattern);
    document.getElementById("allLetters").textContent = result;
}

function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';

}

var result = canMakeHTTPRequest();

document.getElementById("httprequest").textContent = result;