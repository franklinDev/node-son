var http  = require('http');
var eventEmitter = require('events').EventEmitter;

function handleRequest(request, response) {
    response.end('Starting application');
}

var server = http.createServer(handleRequest);

var event  =  new eventEmitter();

server.on('connection', function (client) {
    event.emit('newConnection', {
        'num1': 10,
        'num2':20
    });
})

event.on('newConnection', function (data) {
    var cont = parseInt(data.num1) + parseInt(data.num2)
    console.log('new event: '+ cont);
})

server.listen(3000, '127.0.0.1');
