const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const res = require("express/lib/response");
const userRoutes = require("./routes/userRoutes");
const colors = require("colors");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));
