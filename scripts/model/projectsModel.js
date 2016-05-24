(function() {

    var Model = extend("GeekBooster.Model");

    Model.Project = function Project() {

        this.name = "";
        this.description = "";
        this.logoUrl = null;
        this.creator = null;

        this.currentBudget = 0;
        this.totalBudget = 0;
        this.contributorsAmount = 0
        this.progress = 0;
        this.getPercentageProgress = function() {
            return this.progress * 100;
        };

        this.labels = [];
        this.tags = [];
    };

}());
