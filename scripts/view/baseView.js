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

    function renderScrollUp() {
        var offset = 100,
            scrollTopDuration = 700,
            $backToTop = $('.scrollup');

        $(window).on('scroll', function() {
            $backToTop.toggleClass('scrollup-is-visible', $(this).scrollTop() > offset);
        });

        $backToTop.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scrollTopDuration);
        });
    };

    self.onShareFacebook = new Event(self);
    self.onShareTwitter = new Event(self);
    self.onShareGoogle = new Event(self);

    $('#fbshare').on("click", function() { self.onShareFacebook.notify(); });
    $('#twshare').on("click", function() { self.onShareTwitter.notify(); });
    $('#ggshare').on("click", function() { self.onShareGoogle.notify(); });

    self.render = function() {
        renderNavigation();
        renderScrollUp();
    };

    view.BaseView = self;

}());
