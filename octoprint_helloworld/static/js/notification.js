/* Notification.requestPermission().then(function (permission) {
    var notification = new Notification("woot");
    }); */
//TODO create notification function to pass notification contents
$(function() {
    function BrowserNotifier(parameters) {
        var self = this;
   
        self.onEventPrintDone = function(payload) {
            console.log('### PRINT DONE ###');
            console.log(payload);
        }
    
    }
    
    OCTOPRINT_VIEWMODELS.push({
        construct: BrowserNotifier,
        dependencies: ["loginStateViewModel"]
    });
})