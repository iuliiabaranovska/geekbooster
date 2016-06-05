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

        IndexedTableService.prototype.searchByIndex = function(indexName, searchFilter, callback) {
            var self = this,
                request = indexedDb.open(dbName, dbVersion),
                result = [];

            request.onsuccess = function(event) {
                var dataBase = request.result,
                    objectStore = dataBase.transaction(self.getTableName()).objectStore(self.getTableName()),
                    singleKeyRange = IDBKeyRange.only(searchFilter),
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
