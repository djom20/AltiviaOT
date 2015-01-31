var App = angular.module('App', [
    'ngRoute',
    'controllers'
]);

App.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'IndexCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);