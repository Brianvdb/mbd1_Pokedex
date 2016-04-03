/**
 * Created by Gebruiker on 3-4-2016.
 */
function NavigateController() {

}

NavigateController.prototype = {
    loadMap: function() {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
}