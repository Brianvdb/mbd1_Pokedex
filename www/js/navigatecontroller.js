/**
 * Created by Gebruiker on 3-4-2016.
 */
function NavigateController() {

}

NavigateController.prototype = {
    loadMap: function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsService = new google.maps.DirectionsService;

        var latlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
        var options = {
            zoom: 16,
            center: latlng
        };
        this.map = new google.maps.Map(document.getElementById("map-canvas"), options);
        // Add an overlay to the map of current lat/lng
        this.marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: "Secret Pokemon!"
        });
        this.directionsDisplay.setMap(this.map);

        this.generateRoute();
    },
    generateRoute: function () {
        var self = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var currentLat = position.coords.latitude;
            var currentLng = position.coords.longitude;
            console.log('got current position');
            self.calculateRoute(currentLat, currentLng);
        });
    },
    calculateRoute: function (currentLat, currentLng) {
        var self = this;
        var selectedMode = document.getElementById('mode').value;
        this.directionsService.route({
            origin: {lat: currentLat, lng: currentLng},
            destination: {lat: this.lat, lng: this.lng},
            travelMode: google.maps.TravelMode[selectedMode]
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                self.directionsDisplay.setDirections(response);
            } else {
                console.log('Directions request failed due to ' + status);
            }
        });
    }
}