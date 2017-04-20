var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('client'));
app.set('json spaces', 2);
app.use(bodyParser.json());


var _leaderboard = [{name: 'James', wins: 1}, {name: 'Bob', wins: 2}, {name: 'Tim', wins: 3}];

app.get('/api/leaderboard', function (req, res) {
    res.json(_leaderboard);
});

app.post('/api/leaderboard/add', function (req, res) {
    var name = req.body.name;
    var index = findEntryIndexInLeaderboard(name);

    if (index !== -1) {
        _leaderboard[index].wins++;
    } else {
        _leaderboard.push({name: name, wins: 1});
    }

    res.status(201).json(_leaderboard);
});

app.post('/api/leaderboard/remove', function (req, res) {
    var name = req.body.name;
    var index = findEntryIndexInLeaderboard(name);

    if (index !== -1) {
        _leaderboard.splice(index, 1);
    }

    res.status(200);
    res.end();
});

//controller
app.listen(8080, function (err, success) {
    //view
    if (err) {
        console.warn('error');
    }
    if (success) {
        console.log('server running');
    }
});

function findEntryIndexInLeaderboard(name) {
    for (i = 0; i < _leaderboard.length; i++) {
        if (_leaderboard[i].name === name) {
            return i;
        }
    }
    return -1;
}