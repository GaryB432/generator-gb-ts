namespace <%= ts.namespace %> {
    App.directive("badicAppThing", function factory($animate: ng.IAnimateService) {
        let directiveDefinitionObject: ng.IDirective = {
            templateUrl: "templates/directives/thing.html",
            scope: {
                thing: "="
            }

        };
        return directiveDefinitionObject;
    });
}
