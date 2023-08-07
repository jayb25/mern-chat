const express = require("express");
const { chats } = require("./data/data");
const res = require("express/lib/response");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req);
});
app.listen(5000, console.log("Server started on port 5000"));
