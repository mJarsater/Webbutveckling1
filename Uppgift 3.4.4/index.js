function logResults(json) {
    console.log(json.data);

    document.getElementById("username").append(" " + json.data.login);
    document.getElementById("repos").append(" " + json.data.public_repos);
    document.getElementById("followers").append(" " + json.data.followers);
    document.getElementById("avatar").src = json.data.avatar_url;
    document.getElementById("created_at").append(" " + json.data.created_at);
    document.getElementById("updated_at").append(" " + json.data.updated_at);
}

$.ajax({
    url: `https://api.github.com/users/mjarsater`,
    dataType: "jsonp",
    jsonpCallback: "logResults"
});








