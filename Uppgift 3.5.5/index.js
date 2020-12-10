window.fbAsyncInit = function () {

    FB.init({
        appId: '689321258441690',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0'
    });

    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            FB.api('/me', function (response) {
                document.getElementById("fetching-text").append('Kul att se dig, ' + response.name + '!');
            });
        } else {
            document.getElementById('Det verkar som att du inte är inloggad på facebook...');
            document.getElementById("loginBtn").classList.add("login");
        }
    });

    document.getElementById("loginBtn").addEventListener("click", loginFunction);
    document.getElementById("shareBtn").addEventListener("click", shareFunction);

};


function loginFunction() {
    FB.login()

}

function shareFunction() {
    FB.ui({
        method: 'share',
        href: 'https://www.facebook.com/diskstudentkar',
    }, function (response) { });
}