const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connection Successfull");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
