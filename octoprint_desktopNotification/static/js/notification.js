$(function() {
    getNotifyPermission();

    function BrowserNotifier(parameters) {
        var self = this;
   
        self.onEventPrintDone = function(payload) {
            let options = {
                body: "File: " + payload.name
            }
            console.log('### PRINT DONE ###');
            createNotification('Print Complete!', options);
        }

        self.onEventPrintCancelling = function(payload) {
            let errorText = "";
            if (payload.firmwareError) {
                errorText = "\nError: " + payload.firmwareError;
            }
            let options = {
                body: "File: " + payload.name + errorText
            }
            console.log('### PRINT CANCELLED ###');
            createNotification('Print Cancelled', options);
        }
    
        self.onEventPrintPaused = function(payload) {
            let options = {
                body: "File: " + payload.name
            }
            console.log('### PRINT PAUSED ###');
            createNotification('Print Paused', options);
            
        }
    }
    
    OCTOPRINT_VIEWMODELS.push({
        construct: BrowserNotifier,
        dependencies: ["loginStateViewModel"]
    });
})

function getNotifyPermission() {
    if (!("Notification" in window)) {
        console.log("Browser does not support notifications");
    }
    else if (Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function createNotification(title, options) {
    if (Notification.permission === "default") {
        getNotifyPermission();
    }
    new Notification(title, options);
}