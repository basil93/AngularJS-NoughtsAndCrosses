(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.factory('gameFactory', GameFactory);

    function GameFactory($sce) {
        var player1 = {};
        var player2 = {};
        var currentPlayer = {};
        var board = [];

        reset();

        return {
            board: board,
            setName: setName,
            select: select,
            reset: reset
        };

        function setName(playerNumber, name) {
            if(playerNumber === 1) {
                player1.name = name;
            }
            if(playerNumber === 2) {
                player2.name = name;
            }
        }

        function select(row, column) {
            board[row][column].value = currentPlayer.symbol;
            board[row][column].display = getDisplay(currentPlayer.symbol);
            setNextPlayer();
        }

        function setNextPlayer() {
            if(currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
        }

        function reset() {
            player1 = {name: '', symbol: 'x'};
            player2 = {name: '', symbol: 'o'};
            currentPlayer = player1;

            board.length = 0;
            newBoard().forEach(function (item) {
                board.push(item);
            });
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
    }
})(angular);
