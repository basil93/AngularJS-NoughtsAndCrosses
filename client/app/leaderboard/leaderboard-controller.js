(function (angular) {
    var leaderboardModule = angular.module('bazLeaderboard');

    leaderboardModule.controller('LeaderboardController', LeaderboardController);

    function LeaderboardController($scope, LeaderboardFactory) {
        $scope.filteredEntry = '';
        $scope.leaderboard = LeaderboardFactory.leaderboard;

        $scope.add = add;
        $scope.remove = remove;

        LeaderboardFactory.getData();

        function add() {
            LeaderboardFactory.add($scope.newEntry);
            $scope.newEntryName = '';
        }

        function remove(course) {
            LeaderboardFactory.remove(course);
        }
    }
})(angular); // IIFE
