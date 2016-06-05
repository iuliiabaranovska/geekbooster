(function() {

    var services = extend("GeekBooster.Services"),
        geekBooster = GeekBooster,
        dbName = "GeekBooster",
        dbVersion = 1,
        indexedDb = window.indexedDB;

    geekBooster.Index = function(name, keyPath, unique) {
        this.name = name;
        this.keyPath = keyPath;
        this.unique = unique;
    };

    services.IndexedTableService = (function() {

        function IndexedTableService(table) {

            var _table = table;

            this.getTableName = function() {
                return _table;
            };
        };

        IndexedTableService.prototype.getAll = function(callback) {

            var self = this,
                request = indexedDb.open(dbName, dbVersion),
                result = [];

            request.onsuccess = function(event) {
                var dataBase = request.result,
                    objectStore = dataBase.transaction(self.getTableName()).objectStore(self.getTableName());

                objectStore.openCursor().onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        result.push(cursor.value);
                        cursor.continue();
                    } else {
                        callback(result);
                    }
                };
            };
        };

        IndexedTableService.prototype.searchItems = function(item) {

            var self = this,
                request = indexedDb.open(dbName, dbVersion),
                result = [];

            request.onsuccess = function(event) {
                var dataBase = request.result,
                    objectStore = dataBase.transaction(self.getTableName()).objectStore(self.getTableName()),
                    i, index,
                    boundKeyRange = IDBKeyRange.bound(item, item + "z");

                for (i = 0; i < objectStore.indexNames.length; i++) {

                    index = objectStore.index(objectStore.indexNames[i]);

                    index.openCursor(boundKeyRange).onsuccess = function(event) {
                        var cursor = event.target.result;
                        if (cursor) {
                            //console.log(cursor.value);
                            //console.log(item);
                            cursor.continue();
                        } else {
                            //console.log("This items don't exist!")
                        }
                    };
                };
            };
        };

        IndexedTableService.prototype.searchByIndex = function(indexName, country, callback) {
            var self = this,
                request = indexedDb.open(dbName, dbVersion),
                result=[];

            request.onsuccess = function(event) {
                var dataBase = request.result,
                    objectStore = dataBase.transaction(self.getTableName()).objectStore(self.getTableName()),
                    singleKeyRange = IDBKeyRange.only(country);
                    index = objectStore.index(indexName);

                index.openCursor(singleKeyRange).onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {                        
                        result.push(cursor.value);
                        cursor.continue();
                    } else {
                        callback(result);
                    }
                };
            }; 
        };

        return IndexedTableService;
    }());

}());
