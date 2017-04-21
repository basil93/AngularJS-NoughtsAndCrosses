(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.factory('gameFactory', GameFactory);

    function GameFactory($sce) {
        var that = this;
        this.player1 = {};
        this.player2 = {};
        this.currentPlayer = {};

        this.board = [];

        this.isGameOver = false;
        this.winner = {};

        reset();

        return {
            board: that.board,
            currentPlayer: that.currentPlayer,
            isGameOver: that.isGameOver,
            winner: that.winner,
            setName: setName,
            select: select,
            reset: reset
        };

        function setName(playerNumber, name) {
            if(playerNumber === 1) {
                that.player1.name = name;
            }
            if(playerNumber === 2) {
                that.player2.name = name;
            }
        }

        function select(row, column) {
            that.board[row][column].value = that.currentPlayer.symbol;
            that.board[row][column].display = getDisplay(that.currentPlayer.symbol);

            that.isGameOver = checkEnd();
            if(that.isGameOver) {
                that.winner = that.currentPlayer;
            } else {
                setNextPlayer();
            }
        }

        function setNextPlayer() {
            if(that.currentPlayer === that.player1) {
                that.currentPlayer = that.player2;
            } else {
                that.currentPlayer = that.player1;
            }
        }

        function reset() {
            that.player1 = {name: '', symbol: 'x'};
            that.player2 = {name: '', symbol: 'o'};
            that.currentPlayer = that.player1;

            that.board.length = 0;
            newBoard().forEach(function (item) {
                that.board.push(item);
            });

            that.isGameOver = false;
            that.winner = {};
        }

        function newBoard() {
            return [
                [{value: '?', display: getDisplay('?')}, {value: '?', display: getDisplay('?')}, {
                    value: '?',
                    display: getDisplay('?')
                }],
                [{value: '?', display: getDisplay('?')}, {value: '?', display: getDisplay('?')}, {
                    value: '?',
                    display: getDisplay('?')
                }],
                [{value: '?', display: getDisplay('?')}, {value: '?', display: getDisplay('?')}, {
                    value: '?',
                    display: getDisplay('?')
                }]
            ];
        }

        function getDisplay(value) {
            if (value === 'x') {
                return $sce.trustAsHtml('<svg aria-label="X" role="img" viewBox="0 0 32 32" style="visibility: visible;"><path d="M4,4L32,32"style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.764; stroke-dashoffset: 0;"></path><path d="M32,4L4,32"style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.764; stroke-dashoffset: 0;"></path> </svg>');
            }

            if (value === 'o') {
                return $sce.trustAsHtml('<svg aria-label="O" role="img" viewBox="0 0 32 32" style="visibility: visible;"><path d="M16,4A12,12 0 1,0 16,30A12,12 0 1,0 16,4"style="fill: none; stroke: rgb(84, 84, 84); stroke-dasharray: 301.635; stroke-dashoffset: 0;"></path> </svg>');
            }

            return $sce.trustAsHtml('empty');
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
