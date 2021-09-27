const socketio = require('socket.io');

const socket = (server) => {
    const io = socketio(server);

    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    return io;
}

module.exports = socket;
