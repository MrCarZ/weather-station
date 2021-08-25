const socketio = require('socket.io');

const socket = (server) => {
    const io = socketio.listen(server);

    io.on('connection', (socket) => {
        io.emit('rasp-message', "socket working! :D");
        console.log('a user connected');
    });

    return io;
}

module.exports = socket;