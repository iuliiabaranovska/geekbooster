(function() {

    var view = extend("GeekBooster.View"),
        base = view.BaseView,
        self = Object.create(base),
        $projects = $('.projects'),
        template = $("#projectTemplate").remove().html();

    self.renderProjects = function(projects) {
        projects
            .reverse() // for correct order since we use prepend method
            .forEach(function(project) {
                var projectMarkup = Mustache.to_html(template, project);
                $projects.prepend(projectMarkup);
            });
    };

    // function renderDropDown() {
    //     $(".dropdown").dropdown({

    //         template: function(r) {
    //             return "<li><a>" + r.text + "</a></li>"; },
    //         buttons: [{

    //                 // button 1
    //                 text: 'Delete',
    //                 href: '',
    //                 addClass: '', // custom class
    //                 onClick: function(p, e) {
    //                     alert('Look in console!');
    //                     console.log(p); //Parent (a.dropdown)
    //                     console.log(e); //Clicked button 
    //                     return true; //Return true - will close dropdown, false - will keep dropwdown 
    //                 }
    //             },

    //             // Separator
    //             {},

    //             //Button 2
    //             {
    //                 text: 'Options',
    //                 href: '',
    //                 addClass: '',
    //                 onClick: function(p, e) { alert('Function return false!');
    //                     return false; }
    //             },

    //             // Separator
    //             {},

    //             //Button 3
    //             {
    //                 text: 'Properties',
    //                 href: '',
    //                 addClass: '',
    //                 onClick: function(p, e) { alert(p.attr('rel'));
    //                     return true; }
    //             }
    //         ]

    //     });

    // }

    // self.render=function () {
    // 	base.render();
    // 	renderDropDown();
    // };

    view.ProjectsView = self;

}());
