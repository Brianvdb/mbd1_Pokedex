/**
 * Created by Gebruiker on 3-4-2016.
 */
function LanguageController() {
    this.translations = [];
    this.translations['tab_pokemons'] = {english: 'Pokemons', dutch: 'Pokemons', german: 'Pokemons'};
    this.translations['tab_catch'] = {english: 'Catch', dutch: 'Vangen', german: 'Fangen'};
    this.translations['tab_trade'] = {english: 'Trade', dutch: 'Ruilen', german: 'Austausch'};
    this.translations['settings'] = {english: 'Settings', dutch: 'Instellingen', german: 'Einstellungen'};
    this.translations['nav_pokemon'] = {english: 'Go to pokemon', dutch: 'Ga naar pokemon', german: 'Geh zu pokemon'};
    this.translations['order'] = {english: 'order', dutch: 'volgorde', german: 'ordnung'};
    this.translations['experience'] = {english: 'experience', dutch: 'experience', german: 'erfahrung'};
    this.translations['weight'] = {english: 'weight', dutch: 'gewicht', german: 'gewicht'};
    this.translations['height'] = {english: 'height', dutch: 'hoogte', german: 'höhe'};
    this.translations['is_default'] = {english: 'is default', dutch: 'is standaard', german: 'ist standard'};
    this.translations['secret_pokemon'] = {english: 'Secret pokemon', dutch: 'Geheime pokemon', german: 'Geheimnis pokemon'};
    this.translations['secret_pokemon_notfound'] = {english: 'You have not found this pokemon yet!', dutch: 'Je hebt deze pokemon nog niet gevonden!', german: 'Sie haben nicht dieses Pokemon gefunden!'};
    this.translations['back'] = {english: 'Back', dutch: 'Terug', german: 'Zurück'}

    this.language = 'german';
}

LanguageController.prototype = {
    invalidate: function() {
        var self = this;
        $('[data-localized]').each(function() {
            var localized = $(this).data('localized');
            $(this).text(self.getLocalized(localized));
        })
    },
    getLocalized: function(key) {
        return this.translations[key][this.language];
    }
}