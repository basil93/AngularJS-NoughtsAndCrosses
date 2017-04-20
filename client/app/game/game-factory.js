(function (angular) {
    var gameModule = angular.module('bazGame');

    gameModule.factory('gameFactory', GameFactory);

    function GameFactory($sce) {
        var players = [];
        var currentPlayer = {};
        var board = [];

        reset();

        return {
            players: players,
            currentPlayer: currentPlayer,
            board: board,
            select: select,
            reset: reset
        };

        function select(row, column, value) {
            board[row][column].value = value;
            board[row][column].display = getDisplay(value);
        }

        function reset() {
            players.length = 0;
            [{player: 1, name: '', symbol: 'x'}, {player: 2, name: '', symbol: 'o'}].forEach(function (item) {
                players.push(item);
            });
            currentPlayer = players[0];

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
