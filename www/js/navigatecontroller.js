/**
 * Created by Gebruiker on 3-4-2016.
 */
function NavigateController() {

}

NavigateController.prototype = {
    loadMap: function() {
        var latlng = new google.maps.LatLng(34.0983425, -118.3267434);
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
}