/**
 * Created by Gebruiker on 1-4-2016.
 */

function PokelistController(api) {
    this.api = api;
}

PokelistController.prototype = {
    init: function() {
        var self = this;

        this.updating = true;
        this.api.getPokemons(this.listOffset, function(data) { self.pokemonsReceived(data) });
        $(document).on("scrollstop", function(e) { self.onSrollChange(e) });
    },
    pokemonsReceived: function(data) {
        var pokemons = data.results;

        var pokelist = $('#pokelist');

        for(var i = 0; i < pokemons.length; i++) {
            var pokemon = pokemons[i];
            pokelist.append('<li><a href="pokemonview.html?name=' + pokemon.name + '&id=' + pokemon.id + '&url=' + pokemon.url + '"><img src="' + pokemon.image + '"/>' + pokemon.name + '</a></li>');
        }
        pokelist.listview("refresh");
        this.updating = false;
        $.mobile.loading("hide");
        //this.tabcontroller.addListeners();

    },
    onSrollChange: function() {
        if (this.updating) return;

        var activePage = $.mobile.pageContainer.pagecontainer("getActivePage"),
            screenHeight = $.mobile.getScreenHeight(),
            contentHeight = $(".ui-content", activePage).outerHeight(),
            header = $(".ui-header", activePage).outerHeight() - 1,
            scrolled = $(window).scrollTop(),
            footer = $(".ui-footer", activePage).outerHeight() - 1,
            scrollEnd = contentHeight - screenHeight + header + footer;
        if (activePage[0].id == "home" && scrolled >= scrollEnd) {
            this.updating = true;
            this.listOffset += 30;
            var self = this;

            $.mobile.loading("show", {
                text: "loading more...",
                textVisible: true,
                theme: 'b'
            });

            this.api.getPokemons(this.listOffset, function(data) { self.pokemonsReceived(data) });
        }
    }
}