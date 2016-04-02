/**
 * Created by Gebruiker on 1-4-2016.
 */
function PokemonController(api, databasecontroller) {
    this.api = api;
    this.databasecontroller = databasecontroller;
}

PokemonController.prototype = {
    loadPokemon: function(name, id, url) {
        $('#pokemontitle').text(name);
        var self = this;

        this.databasecontroller.getPokemon(function(pokemon) {
            if(pokemon) {
                self.onPokemonFetched(pokemon);
            } else {
                $.mobile.loading("show", {
                    text: "loading...",
                    textVisible: true,
                    theme: 'b'
                });
                self.api.getPokemon(id, function(pokemon) { self.onPokemonFetched(pokemon) });
            }
        }, id);
    },
    onPokemonFetched: function(pokemon) {
        var imageholder = $('.pokemonimage');
        imageholder.append('<img src="' + this.api.getPokemonImageUrl(pokemon.id) + '" class="centered">');

        var details = $('#pokedetails');

        details.append('<li>order: ' + pokemon.order + '</li>');
        details.append('<li>experience: ' + pokemon.base_experience + '</li>');
        details.append('<li>weight: ' + pokemon.weight + '</li>');
        details.append('<li>height: ' + pokemon.height + '</li>');
        details.append('<li>is default: ' + pokemon.is_default + '</li>');

        details.listview('refresh');

        $.mobile.loading("hide");
    }
};