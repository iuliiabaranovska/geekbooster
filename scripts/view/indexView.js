(function() {

    var view = extend("GeekBooster.View"),
        base = view.BaseView,
        self = Object.create(base);

    function renderSlider() {
        $('.slider')
            .on('unslider.ready', function() {
                $(this).find('li').show();
            })
            .unslider({
                autoplay: true,
                arrows: false,
                infinite: true,
                delay: 4000
            });
    };

    self.render = function() {
        base.render();
        renderSlider();
    };

    view.IndexView = self;

}());
