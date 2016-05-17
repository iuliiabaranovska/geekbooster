(function() {

    var controller = extend("GeekBooster.Controller"),
        indexView = GeekBooster.View.IndexView,
        share = GeekBooster.Share;

    controller.IndexController = {
        initialize: function() {

            indexView.fbshare()
                .on("click", function() { share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC'); });

            indexView.twshare()
                .on("click", function() { share.twitter('URL', 'TITLE'); });

            indexView.ggshare()
                .on("click", function() { share.google('URL'); });

            indexView.render();
        }
    };

}());
