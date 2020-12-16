var person = {
    firstname: "Martin",
    lastname: "Jarsäter",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    },
    yearOfBirth: 1995,
    education: "Data- och systemvetenskap, SU."

};

document.getElementById("authorName").innerHTML = person.fullname();
