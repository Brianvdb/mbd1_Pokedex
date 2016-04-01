/**
 * Created by Gebruiker on 1-4-2016.
 */
function DatabaseController() {

}

DatabaseController.prototype = {
    init: function() {
        this.db = window.openDatabase('poke_database', '1.0', 'Pokedex Application Database', 2 * 1024 * 1024);

        this.db.transaction(function(tx) {
           tx.executeSql("CREATE TABLE IF NOT EXISTS secretpokemons (lat, lng, pokemon_id, pokemon_name, location, found)");
        });
    }
}