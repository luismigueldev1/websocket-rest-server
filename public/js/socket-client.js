//DOM references
const $status = document.querySelectorAll(".status  > span");
const $message = document.querySelector("#message");
const $send = document.querySelector("#send");

//Socket reference
const socket = io();

socket.on("connect", () => {
  //console.log("Connected to server");

  // change the status of the server
  $status[1].style.display = "none";
  $status[0].style.display = "inline";
});

socket.on("disconnect", () => {
  //console.log("Disconnected from server");

  // change the status of the server
  $status[0].style.display = "none";
  $status[1].style.display = "inline";
});

socket.on("sendMessage", (payload) => {
  console.log("Socket listen on, sendMessage", payload);
});

$send.addEventListener("click", () => {
  const message = $message.value;
  const payload = {
    message,
    userId: "ABC123",
    date: new Date().toLocaleString(),
  };
  socket.emit("sendMessage", payload, (id) => {
    console.log("from server: ", id);
  });
  //$message.value = "";
});
