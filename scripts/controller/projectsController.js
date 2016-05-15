var GeekBooster = GeekBooster || {};

GeekBooster.ProjectsController = (function() {

    return {
        initialize: function() {
            GeekBooster
                .ProjectsView
                .fbshare()
                .on("click", function() {
                    GeekBooster.Share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC');
                });

            GeekBooster
                .ProjectsView
                .twshare()
                .on("click", function() {
                    GeekBooster.Share.twitter('URL', 'TITLE');
                });

            GeekBooster
                .ProjectsView
                .ggshare()
                .on("click", function() {
                    GeekBooster.Share.google('URL');
                });

            GeekBooster.ProjectsView.render();
        }
    };
}());
