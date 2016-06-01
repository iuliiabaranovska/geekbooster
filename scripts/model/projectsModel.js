(function() {

    var model = extend("GeekBooster.Model");

    model.Project = function Project(entity) {

        this.id = (entity != null) ? entity.id : 0;
        this.name = (entity != null) ? entity.name : "";
        this.description = (entity != null) ? entity.description : "";
        this.logoUrl = (entity != null) ? entity.logoUrl : null;
        this.creator = (entity != null) ? entity.creator : null;

        this.currentBudget = (entity != null) ? entity.currentBudget : 0;
        this.totalBudget = (entity != null) ? entity.totalBudget : 0;
        this.contributorsAmount = (entity != null) ? entity.contributorsAmount : 0
        this.progress = (entity != null) ? entity.progress : 0;
        this.getPercentageProgress = function() {
            return this.progress * 100;
        };

        this.labels = (entity != null) ? entity.labels : [];
        this.tags = (entity != null) ? entity.tags : [];
    };

    model.Project.prototype.toEntity = function() {

        return {
            id: this.id,
            name: this.name,
            description: this.description,
            logoUrl: this.logoUrl,
            creator: this.creator,

            currentBudget: this.currentBudget,
            totalBudget: this.totalBudget,
            contributorsAmount: this.contributorsAmount,
            progress: this.progress,

            labels: this.labels,
            tags: this.tags
        };
    };

}());
