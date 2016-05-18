(function() {

    var controller = extend("GeekBooster.Controller"),
        view = GeekBooster.View.ProjectsView,
        share = GeekBooster.Share,
        projectService = new GeekBooster.Services.ProjectService();

    controller.ProjectsController = {
        initialize: function() {

            view.fbshare()
                .on("click", function() { share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC'); });

            view.twshare()
                .on("click", function() { share.twitter('URL', 'TITLE'); });

            view.ggshare()
                .on("click", function() { share.google('URL'); });

            view.render();
        }
    };

}());
