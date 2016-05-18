(function() {

    var view = extend("GeekBooster.View"),
        Event = GeekBooster.Event,
        self = {};

    function renderNavigation() {
        var $menuItems = $(".headermenu .end-items");
        $(".menu-logo").on("click", function() {
            $menuItems.toggleClass("show-navigation");
        });
    };

    $('#fbshare').on("click", function() { self.onShareFacebook.notify(); });
    $('#twshare').on("click", function() { self.onShareTwitter.notify(); });
    $('#ggshare').on("click", function() { self.onShareGoogle.notify(); });

    self.render = function() {
        renderNavigation();
    };

    self.onShareFacebook = new Event(self);
    self.onShareTwitter = new Event(self);
    self.onShareGoogle = new Event(self);

    view.BaseView = self;

}());
