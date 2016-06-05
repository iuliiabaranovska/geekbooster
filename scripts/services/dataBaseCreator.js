(function() {

    var Project = GeekBooster.Model.Project,
        Index = GeekBooster.Index,
        indexedDb = window.indexedDB,
        dbName = "GeekBooster",
        dbVersion = 1,
        tableName = "Projects",
        keyPath = { keyPath: "id" },
        creators = ["Sylvester Stallone", "Steven Seagal", "Arnold Schwarzenegger", "Jean-Claude Van Damme"],
        indexes = [
            new Index('ProjectScience', "science", false),
            new Index('ProjectCountry', "country", false),
            new Index('ProjectCity', "city", false)
        ],
        sciences = ["Ecology", "Economy", "Geography", "Geology"],
        countries = ["Ukraine", "Italy", "France"],
        cities = ["Lviv", "Milan", "Paris"];

    var index = 0,
        projects = [],
        newProject = null;

    for (index = 0; index < 20; index++) {

        newProject = new Project();

        newProject.id = index + 1;
        newProject.logoUrl = "../images/projects/spaceman.png";

        newProject.currentBudget = index * 100 + 500;
        newProject.totalBudget = newProject.currentBudget * 1.5;
        newProject.contributorsAmount = index * 3 + 10;

        newProject.labels = ["Popular", "Global aim's"];

        newProject.name = "Garold's space odisea";
        newProject.creator = creators[(index % 4)];
        newProject.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus libero, iaculis ac arcu nec, pretium fringilla magna. " +
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et urna faucibus, lobortis elit sed, blandit sem. " +
            "Nulla facilisi. Nam dignissim scelerisque odio ac venenatis. Pellentesque in mollis risus. Morbi tempor sodales sodales. " +
            "Nulla fringilla, sapien ac finibus commodo, dui tortor porta leo, quis sollicitudin mauris neque eget sem. " +
            "Phasellus id nulla ut arcu eleifend porttitor sed ut dolor. Praesent elit dolor, euismod ac consequat vitae, consectetur nec nisi. " +
            "Pellentesque nec nisi non lectus vestibulum vulputate. Mauris nec hendrerit magna. Maecenas quis tincidunt augue. Duis ornare fringilla lobortis.";

        newProject.progress = index / 20;
        newProject.tags = ["space", "mars"];

        newProject.science = sciences[(index % 4)];
        newProject.country = countries[(index % 3)];
        newProject.city = cities[(index % 3)];

        newProject.remoteWork = (index % 2) === 0;
        newProject.workspace = (index % 3) === 0;
        newProject.nonProfit = (index % 4) === 0;
        newProject.paid = (index % 5) === 0;

        projects.push(newProject);
    };


    indexedDb.deleteDatabase(dbName).onsuccess = function() {

        console.info("'GeekBooster' database has been deleted.");
        indexedDb.open(dbName, dbVersion).onupgradeneeded = function(event) {

            console.info("'GeekBooster' database has been created.");
            var dataBase = event.target.result,
                objectStore = dataBase.createObjectStore(tableName, keyPath);
            console.info("'Projects' store has been created.");

            indexes.forEach(function(index) {
                objectStore.createIndex(index.name, index.keyPath, { unique: index.unique });
            });
            console.info("Indexes have been created.");

            projects.forEach(function(item) {
                objectStore.add(item.toEntity());
            });
            console.info(projects.length + " projects have been added to store.");
        };
    };

}());
