(function (angular) {
    var leaderboardModule = angular.module('bazLeaderboard');

    leaderboardModule.factory('LeaderboardFactory', LeaderboardFactory);

    function LeaderboardFactory($http){
        var leaderboard = [];

        return {
            leaderboard: leaderboard,
            add: add,
            remove: remove,
            getData: getData
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

        function getData() {
            $http.get('/api/leaderboard').then(function (response) {
                leaderboard.length = 0;
                response.data.forEach(function (item) {
                    leaderboard.push(item);
                })
            }, function (err) {
                console.warn(err);
            });
        }
    }
})(angular);
