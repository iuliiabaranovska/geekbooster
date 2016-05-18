(function() {

    var controller = extend("GeekBooster.Controller"),
        share = GeekBooster.Share;

    controller.BaseController = {
        shareFacebook: function() { share.facebook('URL', 'TITLE', 'IMG_PATH', 'DESC'); },
        shareTwitter: function() { share.twitter('URL', 'TITLE'); },
        shareGoogle: function() { share.google('URL'); }
    };

}());
