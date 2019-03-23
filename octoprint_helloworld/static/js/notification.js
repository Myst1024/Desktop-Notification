alert("testing!");
Notification.requestPermission().then(function (permission) {
    var notification = new Notification("woot");
    });