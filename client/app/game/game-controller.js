(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.controller('GameController', GameController);

    GameController.$inject = ['gameFactory'];
    function GameController(gameFactory) {
        var that = this;

        this.player1name = '';
        this.player2name = '';

        this.isPlaying = false;

        this.board = gameFactory.board;
        this.isInvalidMove = false;
        this.isGameOver = gameFactory.isGameOver;
        this.winner = gameFactory.winner;

        this.start = start;
        this.select = select;
        this.reset = reset;

        function start() {
            setPlayer1Name();
            setPlayer2Name();
            that.isPlaying = true;
        }

        function setPlayer1Name() {
            gameFactory.setName(1, that.player1name);
        }

        function setPlayer2Name() {
            gameFactory.setName(2, that.player2name);
        }

        function select(row, column) {
            if (that.board[row][column].value === '?') {
                gameFactory.select(row, column);
                that.invalidMove = false;
            } else {
                that.invalidMove = true;
            }
        }

        function reset() {
            gameFactory.reset();

            that.player1name = '';
            that.player2name = '';
            that.isPlaying = false;
            that.isInvalidMove = false;
        }
    }
})(angular);