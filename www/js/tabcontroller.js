/**
 * Created by Gebruiker on 1-4-2016.
 */
function TabController() {

}

TabController.prototype = {
    init: function () {
        this.addListeners();
    },
    addListeners: function () {
        var self = this;
        $("div[data-role=content]").on("swipeleft swiperight", function(event) { self.onSwipe(event )});
        $(document).on("swipeleft swiperight", function (event) {
            self.onSwipe(event)
        });
    },
    onSwipe: function (event) {
        this.changeNavTab(event.type == 'swipeleft');
    },
    changeNavTab: function (left) {
        var $tabs = $("div[data-role=navbar] li a", $("div[data-role=page].ui-page-active"));
        var curidx = $tabs.closest("a.ui-btn-active").parent().index();
        var nextidx = 0;
        if (left) {
            nextidx = (curidx == $tabs.length - 1) ? 0 : curidx + 1;
        } else {
            nextidx = (curidx == 0) ? $tabs.length - 1 : curidx - 1;
        }
        $tabs.eq(nextidx).click();
    }
}