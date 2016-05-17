(function() {

    var view = extend("GeekBooster.View");

    function renderSlider() {
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

    function renderNavigation() {
        var $menuItems = $(".headermenu .end-items");
        $(".menu-logo").on("click", function() {
            $menuItems.toggleClass("show-navigation");
        });
    };

    view.IndexView = {
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
