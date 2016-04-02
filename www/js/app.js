var app = {
    // Application Constructor
    initialize: function() {
        this.api = new API(this);

        // init controllers
        this.databasecontroller = new DatabaseController(this.api);
        this.pokelistcontroller = new PokelistController(this.api, this.databasecontroller);
        this.pokemoncontroller = new PokemonController(this.api, this.databasecontroller);
        this.catchcontroller = new CatchController(this.api, this.databasecontroller);
        this.tabcontroller = new TabController(this.catchcontroller);

        // binds events
        this.bindEvents();

        $.urlParam = this.getParameterByName;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        var self = this;
        document.addEventListener('deviceready', function() { self.onDeviceReady() }, false);
        $(document).on("pagecontainerbeforeshow", function(event, ui) { self.onPageLoaded(event, ui) });
    },
    onDeviceReady: function() {
        this.databasecontroller.init();
        this.tabcontroller.init();
        this.pokelistcontroller.init();
    },
    onPageLoaded: function(event, ui) {
        var id = ui.toPage[0].id;
        console.log('page: ' + id);
        if ( ui.toPage[0].id == 'pokemonview') {
            var url = ui.toPage.data('url');
            var name = $.urlParam(url, 'name');
            var apiUrl = $.urlParam(url, 'url');
            var id = $.urlParam(url, 'id');
            this.pokemoncontroller.loadPokemon(name, id, apiUrl);
        }
    },
    getParameterByName: function(url, name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
        if (results == null) {
            return null;
        } else {
            return decodeURI(results[1]) || 0;
        }
    }
};
