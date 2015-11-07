/// <reference path="../../typings/tsd.d.ts" />

let App = angular.module("app", ["ngRoute", "ngTouch", "ngAnimate"]);

App.config(function($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
        .when("/", { templateUrl: "templates/states/main.html", controller: "HomeCtrl", controllerAs: "vm" })
        .when("/about", { templateUrl: "templates/states/about.html", controller: "AboutCtrl", controllerAs: "vm" })
        .otherwise({ redirectTo: "/" });
});