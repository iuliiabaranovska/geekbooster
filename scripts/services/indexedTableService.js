(function() {

    var services = extend("GeekBooster.Services")
        dbName = "GeekBooster",
        dbVersion = 1,
        indexedDb = window.indexedDB;

    services.IndexedTableService = (function() {

        function IndexedTableService(table) {
            
            var _table = table;

            this.getTableName = function() {
                return _table;
            };
        };

        IndexedTableService.prototype.createStore = function(keyPath) {

            var self = this,
                request = indexedDb.open(dbName, dbVersion);

            request.onupgradeneeded = function(event) {
                
                var dataBase = request.result,
                    objectStore = dataBase.createObjectStore(self.getTableName(), { keyPath: keyPath });
            };
        };

        IndexedTableService.prototype.getAll = function(callback) {

            var self = this,
                request = indexedDb.open(dbName, dbVersion);

            request.onsuccess = function(event) {
                
                var result = [],
                    dataBase = request.result,
                    objectStore = dataBase
                                    .transaction([self.getTableName()])
                                    .objectStore(self.getTableName());

                objectStore.openCursor().onsuccess = function (event) {                    
                    var cursor = event.target.result;

                    if (cursor) {
                        result.push(cursor.value);
                        cursor.continue();
                    }else{
                        callback(result);
                    }
                };
            };
        };

        IndexedTableService.prototype.addRange = function(items) {

            var self = this,
                request = indexedDb.open(dbName, dbVersion);

            request.onsuccess = function(event) {
                
                var dataBase = request.result,
                    objectStore = dataBase
                                    .transaction([self.getTableName()], "readwrite")
                                    .objectStore(self.getTableName());

                items.forEach(function (item) {
                    objectStore.add(item.toEntity());
                });
            };
        };

        return IndexedTableService;
    }());

}());
