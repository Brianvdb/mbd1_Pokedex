/**
 * Created by Gebruiker on 1-4-2016.
 */
function PokemonController(api) {
    this.api = api;
}

PokemonController.prototype = {
    loadPokemon: function(name, id, url) {
        $('#pokemontitle').text(name);
        var self = this;
        this.api.getPokemon(url, function(data) { self.onPokemonFetched(data) });
    },
    onPokemonFetched: function(pokemon) {
        var details = $('#pokedetails');

        details.append('<li>experience: ' + pokemon.base_experience + '</li>');

        details.listview('refresh');
    }
};