var GeekBooster = GeekBooster || {};

GeekBooster.ProjectsView = (function() {    

    var renderNavigation = function() {
        var $menuItems = $(".headermenu .end-items");
        $(".menu-logo").on("click", function() {
            $menuItems.toggleClass("show-navigation");
        });
    };

    return {
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
