var eventEmitter = require('events').EventEmitter;
var event  =  new eventEmitter();



event.on('eventData', function () {
    console.log('rola 1');
});
event.on('eventData', function () {
    console.log('rola 2');
});

event.emit('eventData');