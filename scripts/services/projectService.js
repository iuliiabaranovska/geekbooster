(function() {

    var Services = extend("GeekBooster.Services");

    Services.ProjectService = (function() {

        function ProjectService() {}

        ProjectService.prototype.getAll = function(callback) {

            var index = 0,
                projects = [],
                newProject = null;

            for (index = 0; index < 10; index++) {

                newProject = new GeekBooster.Model.Project();

                newProject.logoUrl = "../images/projects/spaceman.png";

                newProject.currentBudget = index * 100 + 500;
                newProject.totalBudget = newProject.currentBudget * 1.5;
                newProject.contributorsAmount = index * 3 + 10;

                newProject.labels = ["Popular", "Global aim's"];

                newProject.name = "Garold's space odisea";
                newProject.creator = "Iuliia Baranovska";
                newProject.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus libero, iaculis ac arcu nec, pretium fringilla magna. " +
                    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et urna faucibus, lobortis elit sed, blandit sem. " +
                    "Nulla facilisi. Nam dignissim scelerisque odio ac venenatis. Pellentesque in mollis risus. Morbi tempor sodales sodales. " +
                    "Nulla fringilla, sapien ac finibus commodo, dui tortor porta leo, quis sollicitudin mauris neque eget sem. " +
                    "Phasellus id nulla ut arcu eleifend porttitor sed ut dolor. Praesent elit dolor, euismod ac consequat vitae, consectetur nec nisi. " +
                    "Pellentesque nec nisi non lectus vestibulum vulputate. Mauris nec hendrerit magna. Maecenas quis tincidunt augue. Duis ornare fringilla lobortis.";

                newProject.progress = index / 10;
                newProject.tags = ["space", "mars"];

                projects.push(newProject);
            };

            callback(projects);
        };

        return ProjectService;
    }());

}());
