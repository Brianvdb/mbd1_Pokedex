/**
 * Created by Brian on 31-3-2016.
 */
function API() {
    this.baseurl = "http://pokeapi.co/api/v2/pokemon/"
}

API.prototype = {
    getPokemons: function(offset, callback) {
        $.getJSON(this.baseurl + '?limit=30&offset=' + offset, function(data) {
            console.log(data);
            callback(data);
        });
    }
}