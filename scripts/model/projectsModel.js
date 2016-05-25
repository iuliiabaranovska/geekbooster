(function() {

    var model = extend("GeekBooster.Model");

    model.Project = function Project() {

        this.id = 0;
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

    model.Project.prototype.toEntity = function () {
        
        return {
            id: this.id,
            name : this.name,
            description : this.description,
            logoUrl : this.logoUrl,
            creator : this.creator,

            currentBudget : this.currentBudget,
            totalBudget : this.totalBudget,
            contributorsAmount : this.contributorsAmount,
            progress : this.progress,
        
            labels : this.labels,
            tags : this.tags
        };
    };

}());
