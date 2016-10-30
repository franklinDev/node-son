var express = require('express');
var app = express();
var data = [];

app.post('/create/:name/:done', function (req, res) {
    var obj = {
        name: req.params.name,
        done: req.params.done
    }
    data.push(obj);
    return res.status(200).json({status: true, mensage: 'Created!', data: obj});
});

app.get('/', function (req, res) {
    return res.status(200).json(data);
});

app.listen(3000, function () {
    console.log('Initing APP');
});



