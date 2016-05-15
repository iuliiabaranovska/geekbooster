var extend = function(namespace, parent) {

    var parts = namespace.split('.'),
        parent = parent || window,
        index = 0;

    for (index = 0; index < parts.length; index++) {

        if (typeof parent[parts[index]] === 'undefined') {
            parent[parts[index]] = {};
        }

        parent = parent[parts[index]];
    }

    return parent;
};
