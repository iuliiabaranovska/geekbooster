var GeekBooster = GeekBooster || {};

GeekBooster.IndexController = (function() {

    return {
        initialize: function() {
            GeekBooster
                .IndexView
                .fbshare()
                .on("click", function() {
                    GeekBooster.Share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC');
                });

            GeekBooster
                .IndexView
                .twshare()
                .on("click", function() {
                    GeekBooster.Share.twitter('URL', 'TITLE');
                });

            GeekBooster
                .IndexView
                .ggshare()
                .on("click", function() {
                    GeekBooster.Share.google('URL');
                });
        }
    };
}());
