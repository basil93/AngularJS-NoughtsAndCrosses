(function (angular) {
    var leaderboardModule = angular.module('bazLeaderboard');

    leaderboardModule.controller('LeaderboardController', LeaderboardController);

    LeaderboardController.$inject = ['$http'];
    function LeaderboardController($http) {
        var that = this;

        this.entryName = '';
        this.removalName = '';
        this.leaderboard = [];

        this.add = add;
        this.remove = remove;

        getData().then(updateLeaderboard);

        function getData() {
            return $http.get('/api/leaderboard');
        }

        function updateLeaderboard(response) {
            that.leaderboard = response.data;
        }

        function resetEntryName() {
            that.entryName = '';
        }

        function error(error) {
            console.log(error);
        }

        function add() {
            addData(that.entryName)
                .then(getData)
                .then(updateLeaderboard)
                .then(resetEntryName)
                .catch(error);
        }

        function addData(name) {
            return $http.post('/api/leaderboard/add', {name: name});
        }

        function remove() {
            removeData(that.removalName)
                .then(getData)
                .then(updateLeaderboard)
                .then(resetRemovalName)
                .catch(error);
        }

        function removeData(name) {
            return $http.post('/api/leaderboard/remove', {name: name});
        }

        function resetRemovalName(){
            that.removalName = '';
        }
    }
})(angular); // IIFE
