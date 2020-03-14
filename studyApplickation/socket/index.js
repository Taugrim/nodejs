

var log = require('./../libs/log')(module);


module.exports = function (server) {
    var io = require('socket.io').listen(server)
    io.set('origins', '127.0.0.1:*')
    io.set('logger', log)
    io.on('connection',
            function (socket) {
                socket.on('message', function (text, cb) {
                    socket.broadcast.emit('message', text)
                    cb("123");
                }); 
            });
}