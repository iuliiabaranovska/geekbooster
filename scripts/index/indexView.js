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

    return {
        render: function() {
            renderSlider();
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
