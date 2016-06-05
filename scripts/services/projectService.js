(function() {

    var services = extend("GeekBooster.Services"),
        Project = GeekBooster.Model.Project,
        dbProjectService = new services.IndexedTableService("Projects");

    services.ProjectService = (function() {

        function ProjectService() {};

        ProjectService.prototype.getAll = function(callback) {

            dbProjectService.getAll(function(items) {

                var projects = items.map(function(item) {
                    return new Project(item);
                });

                callback(projects);
            });
        };

        ProjectService.prototype.findVacancy = function(filters, callback) {

            this.getAll(function(projects) {

                callback(projects.filter(function(p) {
                    return (p.remoteWork === filters.remoteWork || filters.remoteWork === false)
                    && (p.workspace === filters.workspace || filters.workspace === false)
                    && (p.nonProfit === filters.nonProfit || filters.nonProfit === false)
                    && (p.paid === filters.paid || filters.paid === false);
                }));
            });
        };

        ProjectService.prototype.findLocation = function(country, callback) {
            dbProjectService.searchByIndex('ProjectCountry', country, callback);
        };

        return ProjectService;
    }());

}());
