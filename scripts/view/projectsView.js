(function() {

    var view = extend("GeekBooster.View"),
        base = view.BaseView,
        self = Object.create(base),
        $projects = $('.projects'),
        template = $("#projectTemplate").remove().html();

    self.renderProjects = function(projects) {
        projects
            .reverse() // for correct order since we use prepend method
            .forEach(function(project) {
                var projectMarkup = Mustache.to_html(template, project);
                $projects.prepend(projectMarkup);
            });
    };

    view.ProjectsView = self;

}());
