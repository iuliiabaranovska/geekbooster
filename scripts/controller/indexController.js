(function() {

    var controller = extend("GeekBooster.Controller"),
        view = GeekBooster.View.IndexView,
        base = controller.BaseController,
        self = Object.create(base);

    self.initialize = function() {

        view.onShareFacebook.attach(base.shareFacebook);
        view.onShareTwitter.attach(base.shareTwitter);
        view.onShareGoogle.attach(base.shareGoogle);

        view.render();
    }

    controller.IndexController = self;

}());
