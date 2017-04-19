(function (angular) {
    var bazAppModule = angular.module('bazApp', ['ngRoute', 'bazPeople', 'bazGame']); // root module declaration

    bazAppModule.config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/people', {
                controller: 'PeopleController',
                templateUrl: 'app/people/people-partial.html'
            })
            .when('/game', {
                controller: 'GameController',
                templateUrl: 'app/game/game-partial.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular); // IIFE
