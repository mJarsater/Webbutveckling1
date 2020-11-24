function logResults(json) {
    console.log(json.data);

    document.getElementById("username").append(" " + json.data.login + "@GitHub");
    document.getElementById("avatar").src = json.data.avatar_url;
    document.getElementById("updated_at").append(" " + json.data.updated_at);
}

$.ajax({
    url: `https://api.github.com/users/mjarsater`,
    dataType: "jsonp",
    jsonpCallback: "logResults"
});

var contactBtn = document.getElementById("contactBtn");

contactBtn.onclick = function redirect() {
    window.location.href = "mailto:martin.jarsater@hotmail.com";
}