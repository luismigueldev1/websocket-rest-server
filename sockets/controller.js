const socketController = (socket) => {
  //console.log("Socket connected", socket.id);

  socket.on("disconnect", () => {
    //console.log("Socket disconnected", socket.id);
  });

  socket.on("sendMessage", (payload, callback) => {
    //console.log("Message received:", payload);
    const id = 123456;
    callback(id);
    socket.broadcast.emit("sendMessage", payload);
  });
};

module.exports = { socketController };
