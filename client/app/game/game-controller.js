(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.controller('GameController', GameController);

    function GameController($scope, gameFactory) {
        $scope.board = gameFactory.board;
        $scope.isInvalidMove = false;
        $scope.isGameOver = false;

        $scope.select = select;
        $scope.reset = reset;

        function select(row, column, value) {
            if ($scope.board[row][column].value === '?') {
                gameFactory.select(row, column, value);
            } else {
                invalidMove = true;
            }

            $scope.isGameOver = checkEnd();
        }

        function reset() {
            gameFactory.reset();
        }

        function checkEnd(){
            return checkMaxedOut();
        }

        function checkMaxedOut(){
            for(i = 0; i < $scope.board; i++){
                for(j = 0; j<$scope.board[i]; j++){
                    if($scope.board[i][j].value === '?') {
                        return false;
                    }
                }
            }
            return true;
        }

    }
})(angular);