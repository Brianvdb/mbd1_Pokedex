/**
 * Created by Gebruiker on 1-4-2016.
 */

function CatchController() {
    this.locations = [
        {lat: 51.688697, lng: 5.287521, pokemon_id: 5, pokemon_name: "charmeleon", location: "Avans Hogeschool"},
        {lat: 51.691357, lng: 5.29206, pokemon_id: 8, pokemon_name: "wartortle", location: "Domino's Pizza"},
        {lat: 51.690471, lng: 5.294583, pokemon_id: 40, pokemon_name: "wigglytuff", location: "AH TOGO"},
        {lat: 51.701651, lng: 5.286109, pokemon_id: 42, pokemon_name: "golbat", location: "Sition"},
        {lat: 51.690841, lng: 5.299928, pokemon_id: 9, pokemon_name: "blastoise", location: "Bistro de Eeterij"},
        {lat: 51.693948, lng: 5.314347, pokemon_id: 18, pokemon_name: "pidgeot", location: "Prins Hendrikpark"},
        {lat: 51.678004, lng: 5.337752, pokemon_id: 45, pokemon_name: "vileplume", location: "Golf Parc Pettelaar"},
        {lat: 51.684337, lng: 5.295502, pokemon_id: 98, pokemon_name: "krabby", location: "SOS Rommelmarkt"},
        {lat: 51.688415, lng: 5.307743, pokemon_id: 75, pokemon_name: "graveler", location: "Cafe de Smidse"},
        {lat: 51.803376, lng: 5.725571, pokemon_id: 75, pokemon_name: "graveler", location: "test"}
        //{lat: 51.685956, lng: 5.304016, pokemon_id: 55, pokemon_name: "golduck", location: "Stedelijk Museum 's-Hertogenbosch"}
    ];

}

CatchController.prototype = {
    init: function() {
        var self = this;
        var watchId = navigator.geolocation.watchPosition(function(position) { self.onLocationSuccess(position) }, function(error) { self.onError(error) });
    },
    onLocationSuccess: function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        $('#location').text('lat: ' + lat + ' lng: ' + lng);

        for(var i = 0; i < this.locations.length; i++) {
            var location = this.locations[i];
            var distance = this.getDistanceInMeters(lat, lng, location.lat, location.lng);
            console.log('location: ' + location.location + ' distance: ' + distance);
            if(distance < 30) {

            }
        }
    },
    onError: function(error) {
        $('#location').text(error.message);
    },
    getDistanceInMeters: function(lat1, lon1, lat2, lon2) {
        var R = 6371000; // Radius of the earth in meters
        var dLat = this.deg2rad(lat2-lat1);
        var dLon = this.deg2rad(lon2-lon1);
        var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in meters
        return d;
    },
    deg2rad: function(deg) {
        return deg * (Math.PI/180);
    }
};