(function() {

    var Controller = extend("GeekBooster.Controller");

    Controller.ProjectsController = (function() {

        var view = GeekBooster.View.ProjectsView,
            projectService = new GeekBooster.Services.ProjectService();

        return {
            initialize: function() {
                view.fbshare()
                    .on("click", function() {
                        GeekBooster.Share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC');
                    });

                view.twshare()
                    .on("click", function() {
                        GeekBooster.Share.twitter('URL', 'TITLE');
                    });

                view.ggshare()
                    .on("click", function() {
                        GeekBooster.Share.google('URL');
                    });

                view.render();

                console.log(projectService.getAll());
            }
        };
    }());

}());
