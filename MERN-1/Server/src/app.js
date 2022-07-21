const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

dotenv.config({ path: "./config.env" });
require("./db/connect");

// app.use(express.json());

// Link our routers
app.use(require("../controllers/register.controller"));

app.get("/", async (req, res) => {
  res.send("Welcome to home page!");
});

app.get("/about", async (req, res) => {
  res.send("Welcome to about section!");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
