(function() {

    var controller = extend("GeekBooster.Controller"),
        view = GeekBooster.View.IndexView,
        base = controller.BaseController,
        self = Object.create(base);

    self.initialize = function() {

        view.fbshare().on("click", base.shareFacebook);
        view.twshare().on("click", base.shareTwitter);
        view.ggshare().on("click", base.shareGoogle);

        view.render();
    }

    controller.IndexController = self;

}());
