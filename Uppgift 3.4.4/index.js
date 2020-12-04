function logResults(json) {


    // Lägger till varje rätt data för varje element
    document.getElementById("username").append(" " + json.data.login);
    document.getElementById("repos").append(" " + json.data.public_repos);
    document.getElementById("followers").append(" " + json.data.followers);
    document.getElementById("avatar").src = json.data.avatar_url;
    document.getElementById("created_at").append(" " + json.data.created_at);
    document.getElementById("updated_at").append(" " + json.data.updated_at);
}

// Hämtar all data via API:et som returnes i json format
$.ajax({
    url: `https://api.github.com/users/mjarsater`,
    dataType: "jsonp",
    jsonpCallback: "logResults"
});








