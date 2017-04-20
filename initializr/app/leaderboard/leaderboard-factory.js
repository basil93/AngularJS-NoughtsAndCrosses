(function (angular) {
    var leaderboardModule = angular.module('bazLeaderboard');

    leaderboardModule.factory('LeaderboardFactory', LeaderboardFactory);

    function LeaderboardFactory(){
        var leaderboard = [{name:'James', wins:1}, {name:'Bob', wins:2}, {name:'Tim', wins:4}];

        return {
            leaderboard: leaderboard,
            add: add,
            remove: remove
        };

        function add(entry) {
            if (leaderboard.indexOf(entry) === -1) {
                leaderboard.push(entry);
            }
        }

        function remove(entry) {
            if (leaderboard.indexOf(entry) !== -1) {
                var index = leaderboard.indexOf(entry);
                leaderboard.splice(index, 1);
            }
        }
    }
})(angular);
