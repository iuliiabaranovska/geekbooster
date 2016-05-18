(function() {

    var controller = extend("GeekBooster.Controller"),
        view = GeekBooster.View.ProjectsView,
        base = controller.BaseController,
        self = Object.create(base),
        projectService = new GeekBooster.Services.ProjectService();

    self.initialize = function() {

        view.onShareFacebook.attach(base.shareFacebook);
        view.onShareTwitter.attach(base.shareTwitter);
        view.onShareGoogle.attach(base.shareGoogle);

        view.render();
    }

    controller.ProjectsController = self;

}());
