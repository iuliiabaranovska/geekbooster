(function() {

    var view = extend("GeekBooster.View");

    function renderNavigation() {
        var $menuItems = $(".headermenu .end-items");
        $(".menu-logo").on("click", function() {
            $menuItems.toggleClass("show-navigation");
        });
    };

    view.ProjectsView = {
        render: function() {
            renderNavigation();
        },
        fbshare: function() {
            return $('#fbshare');
        },
        twshare: function() {
            return $('#twshare');
        },
        ggshare: function() {
            return $('#ggshare');
        }
    };

}());
