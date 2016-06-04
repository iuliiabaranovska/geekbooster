(function() {

    var view = extend("GeekBooster.View"),
        base = view.BaseView,
        self = Object.create(base),
        $projects = $('.projects'),
        template = $("#projectTemplate").remove().html();

    function renderToolTip() {
        $('.tooltip')
            .tooltipster({
                position: 'bottom',
                trigger: 'click',
                contentAsHTML: true,
                interactive: true,
                theme: 'tooltipster-shadow',
                functionReady: function() {
                    renderSelect();
                }
            })
            .each(function() {
                var $this = $(this);
                $this.tooltipster('content', $this.next().html());
            });

        $('body')
            .on("click", ".select2-search__field", function(event) {
                event.stopPropagation();
            });
    };

    function renderSelect() {
        $('select').select2({
            allowClear: true,
            placeholder: "Select an attribute"
        });
    }

    self.renderProjects = function(projects) {
        projects
            .reverse() // for correct order since we use prepend method
            .forEach(function(project) {
                var projectMarkup = Mustache.to_html(template, project);
                $projects.prepend(projectMarkup);
            });
    };

    self.render = function() {
        base.render();
        renderToolTip();
    };

    view.ProjectsView = self;

}());
