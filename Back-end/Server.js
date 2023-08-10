const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const res = require("express/lib/response");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const connectDB = require("./config/db");
const colors = require("colors");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const path = require("path");

dotenv.config();
connectDB();
const app = express();

// to accept json data
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// midlwares for handling errors
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on PORT ${PORT}`.yellow.bold));
