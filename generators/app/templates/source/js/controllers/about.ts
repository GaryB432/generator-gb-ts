﻿namespace <%= ts.namespace %> {
    export interface AboutScope extends ng.IScope {
        awesomeThings: string[];
    }
    export class AboutCtrl {
        awesomeThings = [
            "Lorem",
            "Sit Amet",
            "EcmaScript"
        ];
        constructor(params: ng.route.IRouteParamsService) {
            console.log(params);
        }
    }

}

App.controller("AboutCtrl", ["$routeParams", <%= ts.namespace %>.AboutCtrl]);
