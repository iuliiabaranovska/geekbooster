(function() {

    var services = extend("GeekBooster.Services"),
        Project = GeekBooster.Model.Project,
        dbProjectService = new services.IndexedTableService("Projects"),
        filtersToIndexes = {
            scienceField: "ProjectScience",
            country: "ProjectCountry",
            city: "ProjectCity",
        }

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

        ProjectService.prototype.findLocation = function(searchfilter, callback) {
            dbProjectService.searchByIndex('ProjectCountry', searchfilter, callback);
        };

        ProjectService.prototype.find = function(filters, callback) {

            var indexName = null,
                searchFilter = null;

            Object.keys(filters).forEach(function(filterProperty) {

                if (filters[filterProperty] !== null && indexName === null) {
                    indexName = filtersToIndexes[filterProperty];
                    searchFilter = filters[filterProperty];
                };
            });

            if (indexName === null || indexName === undefined) {
                this.getAll(function(projects) {
                    callback(projects.filter(function (p) {
                        return (p.remoteWork === filters.remoteWork || filters.remoteWork === false) 
                        && (p.workspace === filters.workspace || filters.workspace === false)
                        && (p.nonProfit === filters.nonProfit || filters.nonProfit === false)
                        && (p.paid === filters.paid || filters.paid === false);
                    }));
                });
            } else {
                dbProjectService.searchByIndex(indexName, searchFilter, function(projects) {
                    callback(projects.filter(function (p) {
                        return (p.science === filters.scienceField || filters.scienceField === null)
                        && (p.country === filters.country || filters.country === null)
                        && (p.city === filters.city || filters.city === null)
                        && (p.remoteWork === filters.remoteWork || filters.remoteWork === false) 
                        && (p.workspace === filters.workspace || filters.workspace === false)
                        && (p.nonProfit === filters.nonProfit || filters.nonProfit === false)
                        && (p.paid === filters.paid || filters.paid === false);
                    }));
                });
            };
        };

        return ProjectService;
    }());

}());
