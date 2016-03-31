var app = {
    // Application Constructor
    initialize: function() {
        this.api = new API();
        this.bindEvents();
        this.listOffset = 0;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var self = this;

        $(window).bind('scroll', function() { self.onSrollChange(this) });

        this.updating = true;
        this.api.getPokemons(this.listOffset, function(data) { self.pokemonsReceived(data) });

        console.log('Received Event: ' + id);
    },
    pokemonsReceived: function(data) {
        var pokemons = data.results;


        var pokelist = $('#pokelist');

        for(var i = 0; i < pokemons.length; i++) {
            var pokemon = pokemons[i];
            pokelist.append('<li><a href="#page">' + pokemon.name + '</a></li>');
        }
        pokelist.listview("refresh");
        this.updating = false;
        $.mobile.loading("hide");
    },
    onSrollChange: function(element) {
        if (this.updating) return;

        if ($(element).scrollTop() + $(element).height() >= ($(document).height() - 50)) {
            this.updating = true;
            this.listOffset += 30;
            var self = this;
            this.api.getPokemons(this.listOffset, function(data) { self.pokemonsReceived(data) });

            $.mobile.loading("show", {
                text: "loading more...",
                textVisible: true,
                theme: 'z'
            });
        }
    }
};
