const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
// middlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.CONNECTION_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to MongoDB is successful !"))
  .catch(() => console.log("Connection to MongoDB is failed !"));

app.get("/", (req, res) => {
  res.send("Hello API");
});

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
