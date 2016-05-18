(function() {

    var controller = extend("GeekBooster.Controller"),
        view = GeekBooster.View.ProjectsView,
        base = controller.BaseController,
        projectService = new GeekBooster.Services.ProjectService(),
        self = Object.create(base);

    self.initialize = function() {

        view.fbshare().on("click", base.shareFacebook);
        view.twshare().on("click", base.shareTwitter);
        view.ggshare().on("click", base.shareGoogle);

        view.render();
    }

    controller.ProjectsController = self;

}());
