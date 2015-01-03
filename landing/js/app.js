var App = angular.module('App', [
    'ngRoute',
    'controllers'
]);

App.config(['$routeProvider', function($routeProvider) {
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