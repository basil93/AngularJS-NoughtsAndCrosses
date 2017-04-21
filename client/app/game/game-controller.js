(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.controller('GameController', GameController);

    GameController.$inject = ['gameFactory'];
    function GameController(gameFactory) {
        var that = this;

        this.player1 = '';
        this.player2 = '';

        this.isPlaying = false;

        this.board = gameFactory.board;
        this.isInvalidMove = false;
        this.isGameOver = false;

        this.start = start;
        this.select = select;
        this.reset = reset;

        function start() {
            setPlayer1Name();
            setPlayer2Name();
            that.isPlaying = true;
        }

        function setPlayer1Name() {
            gameFactory.setName(1, that.player1);
        }

        function setPlayer2Name() {
            gameFactory.setName(2, that.player2);
        }

        function select(row, column) {
            if (that.board[row][column].value === '?') {
                gameFactory.select(row, column);
                that.invalidMove = false;
            } else {
                that.invalidMove = true;
            }

            that.isGameOver = checkEnd();
        }

        function reset() {
            gameFactory.reset();

            that.player1 = '';
            that.player2 = '';
            that.isPlaying = false;
            that.isGameOver = false;
            that.isInvalidMove = false;
        }

        function checkEnd() {
            return checkMaxedOut();
        }

        function checkMaxedOut() {
            for (i = 0; i < that.board.length; i++) {
                for (j = 0; j < that.board[i].length; j++) {
                    if (that.board[i][j].value === '?') {
                        return false;
                    }
                }
            }
            return true;
        }

    }
})(angular);