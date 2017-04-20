var express = require('express');

var app = express();

app.use(express.static('client'));
app.set('json spaces', 2);


var _leaderboard = [{id: 1, name:'James', wins:1}, {id:2, name:'Bob', wins:2}, {id:3, name:'Tim', wins:4}];
var _nextId = 4;

app.get('/api/leaderboard', function (req, res) {
    res.json(_leaderboard);
});


//controller
app.listen(8080, function (err, success) {
    //view
    if(err) {
        console.warn('error');
    }
    if(success) {
        console.log('server running');
    }
});