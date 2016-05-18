(function() {

    var geekBooster = extend("GeekBooster");

    geekBooster.Event = function(sender) {

        var _sender = sender,
            _listeners = [];

        this.attach = function(listener) {
            _listeners.push(listener);
        };

        this.notify = function(args) {
            
            var index;

            for (index = 0; index < _listeners.length; index += 1) {
                _listeners[index](_sender, args);
            }
        }
    };

}());
