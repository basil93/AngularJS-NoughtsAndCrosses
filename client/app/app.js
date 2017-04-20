(function (angular) {
    var bazAppModule = angular.module('bazApp', ['ngRoute', 'bazLeaderboard', 'bazGame']); // root module declaration

    bazAppModule.config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'GameController',
                templateUrl: 'app/game/game-partial.html'
            })
            .when('/leaderboard', {
                controller: 'LeaderboardController',
                templateUrl: 'app/leaderboard/leaderboard-partial.html'
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
