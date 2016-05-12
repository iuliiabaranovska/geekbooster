var GeekBooster = GeekBooster || {};

GeekBooster.IndexView = (function() {

    return {
    	slide: function() {
            $('.slider')
                .on('unslider.ready', function() {
                    $(this).find('li').show().end().parent().addClass("slider-margin");
                })
                .unslider({
                    //autoplay: true,
                    arrows: false,
                    infinite: true,
                    delay: 4000
                });
        },

        fbshare: function() {
        	return $('#fbshare');
        },

        twshare:function (){
        	return $('#twshare');
        },

        ggshare:function () {
        	return $('#ggshare');
        }
    };
}());
