(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.controller('GameController', GameController);

    function GameController(gameFactory) {
        var that = this;

        this.board = gameFactory.board;
        this.isInvalidMove = false;
        this.isGameOver = false;

        this.select = select;
        this.reset = reset;

        function select(row, column, value) {
            if (that.board[row][column].value === '?') {
                gameFactory.select(row, column, value);
            } else {
                invalidMove = true;
            }

            that.isGameOver = checkEnd();
        }

        function reset() {
            gameFactory.reset();
        }

        function checkEnd(){
            return checkMaxedOut();
        }

        function checkMaxedOut(){
            for(i = 0; i < that.board; i++){
                for(j = 0; j<that.board[i]; j++){
                    if(that.board[i][j].value === '?') {
                        return false;
                    }
                }
            }
            return true;
        }

    }
})(angular);