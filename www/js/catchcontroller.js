/**
 * Created by Gebruiker on 1-4-2016.
 */

function CatchController() {

}

CatchController.prototype = {
    init: function() {
        var self = this;
        var watchId = navigator.geolocation.watchPosition(function(position) { self.onLocationSuccess(position) });
    },
    onLocationSuccess: function(position) {
        $('#location').text('lat: ' + position.coords.latitude + ' lng: ' + position.coords.longitude);
    }
};