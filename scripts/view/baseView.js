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

    // function mouseHover() {
    //     var footerItem = $("footer .item");
    //     footerItem.mouseover(function() {
    //         footerItem.css("color", "#c2bdbd");
    //     });
    // };

    self.onShareFacebook = new Event(self);
    self.onShareTwitter = new Event(self);
    self.onShareGoogle = new Event(self);

    $('#fbshare').on("click", function() { self.onShareFacebook.notify(); });
    $('#twshare').on("click", function() { self.onShareTwitter.notify(); });
    $('#ggshare').on("click", function() { self.onShareGoogle.notify(); });

    self.render = function() {
        renderNavigation();
        //mouseHover();
    };

    view.BaseView = self;

}());
