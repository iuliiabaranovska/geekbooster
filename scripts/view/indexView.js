var GeekBooster = GeekBooster || {};

GeekBooster.IndexView = (function() {

    var renderSlider = function() {
        $('.slider')
            .on('unslider.ready', function() {
                $(this).find('li').show().end().parent().addClass("slider-margin");
            })
            .unslider({
                autoplay: true,
                arrows: false,
                infinite: true,
                delay: 4000
            });
    };

    var renderNavigation = function() {
        var $menuItems = $(".headermenu .end-items");
        $(".menu-logo").on("click", function() {
            $menuItems.toggleClass("show-navigation");
        });
    };

    return {
        render: function() {
            renderSlider();
            renderNavigation();
        },
        fbshare: function() {
            return $('#fbshare');
        },
        twshare: function() {
            return $('#twshare');
        },
        ggshare: function() {
            return $('#ggshare');
        }
    };
}());
