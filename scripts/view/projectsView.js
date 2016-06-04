(function() {

    var view = extend("GeekBooster.View"),
        Event = GeekBooster.Event,
        base = view.BaseView,
        self = Object.create(base),
        $projects = null,
        $sciencePopup = null,
        $locationPopup = null,
        $vacancyPopup = null,
        template = null,
        filters = {
            scienceField: null,
            country: null,
            city: null,
            remoteWork: false,
            workspace: false,
            nonProfit: false,
            paid: false
        };

    function renderToolTip() {
        $('.tooltip')
            .tooltipster({
                position: 'bottom',
                trigger: 'click',
                interactive: true,
                theme: 'tooltipster-shadow',
                functionReady: function() {
                    renderSelect();
                }
            })
            .each(function() {
                var $this = $(this);
                $this.tooltipster('content', $($this.next().html())); // use jQuery object in order to save tooltip state
            });

        $('body')
            .on("click", ".select2-search__field, .select2-results__group", function(event) {
                event.stopPropagation();
            });
    };

    function renderSelect() {
        $('select').select2({
            allowClear: true,
            placeholder: "Choose here"
        });
    };

    self.renderProjects = function(projects) {
        projects
            .reverse() // for correct order since we use prepend method
            .forEach(function(project) {
                var projectMarkup = Mustache.to_html(template, project);
                $projects.prepend(projectMarkup);
            });
    };

    self.render = function() {
        template = $("#projectTemplate").remove().html();
        $projects = $('.projects');
        $sciencePopup = $('#sciencePopup');
        $locationPopup = $('#locationPopup');
        $vacancyPopup = $('#vacancyPopup');

        base.render();
        renderToolTip();
    };

    self.onFilterChange = new Event(self);

    $('body').on('click', '#sciencebtn', function() {
        filters.scienceField = $('#sience').val() || null;

        self.onFilterChange.notify(filters);

        $sciencePopup.tooltipster('hide');
    });

    $('body').on('click', '#locationbtn', function() {
        filters.country = $('#country').val() || null;
        filters.city = $('#city').val() || null;

        self.onFilterChange.notify(filters);

        $locationPopup.tooltipster('hide');
    });

    $('body').on('click', '#vacancybtn', function() {
        filters.workspace = $('#cbws').is(':checked');
        filters.remoteWork = $('#cbrw').is(':checked');
        filters.nonProfit = $('#cbnp').is(':checked');
        filters.paid = $('#cbp').is(':checked');

        self.onFilterChange.notify(filters);

        $vacancyPopup.tooltipster('hide');
    });

    view.ProjectsView = self;

}());
