const dotenv = require("dotenv");
const app = require("express")();
const port = process.env.PORT || 8080;

dotenv.config({ path: "./config.env" });
require("./db/connect");

const midddleWare = (req, res, next) => {
  console.log("This is my middleware!");
  next();
};

app.get("/", async (req, res) => {
  res.send("Welcome to home page!");
});

app.get("/about", midddleWare, (req, res) => {
  res.send("Welcome to about section!");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
