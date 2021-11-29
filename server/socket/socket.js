const socketio = require("socket.io");

const socket = (server) => {
  const io = socketio.listen(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
  });

  return io;
};

module.exports = socket;
