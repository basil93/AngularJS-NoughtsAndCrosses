(function (angular) {
    var bazAppModule = angular.module('bazApp', ['ngRoute', 'bazLeaderboard', 'bazGame']); // root module declaration

    bazAppModule.config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'GameController',
                controllerAs: 'gc',
                templateUrl: 'app/game/game-partial.html'
            })
            .when('/leaderboard', {
                controller: 'LeaderboardController',
                controllerAs: 'lb',
                templateUrl: 'app/leaderboard/leaderboard-partial.html'
            })
            .when('/game', {
                controller: 'GameController',
                controllerAs: 'gc',
                templateUrl: 'app/game/game-partial.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular); // IIFE
