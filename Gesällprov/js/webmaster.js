function logResults(json) {

    // Lägger till varje rätt data för varje element
    document.getElementById("username").append(" " + json.data.owner.login + "@GitHub");
    document.getElementById("avatar").src = json.data.owner.avatar_url;
    document.getElementById("updated_at").append(" " + json.data.updated_at);
}


// Hämtar all data via API:et som returnes i json format
$.ajax({
    url: `https://api.github.com/repos/mJarsater/Webbutveckling1`,
    dataType: "jsonp",
    jsonpCallback: "logResults"
});

