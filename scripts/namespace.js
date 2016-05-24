var extend = function(namespace, parent) {

    parent = parent || window,

    var parts = namespace.split('.'),
        index = 0;

    for (index = 0; index < parts.length; index++) {

        if (typeof parent[parts[index]] === 'undefined') {
            parent[parts[index]] = {};
        }

        parent = parent[parts[index]];
    }

    return parent;
};
