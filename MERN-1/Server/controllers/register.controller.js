const express = require("express");
const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
  res.send("Register page");
});

registerRouter.post("/register", (req, res) => {
  console.log(req.body);
});

module.exports = registerRouter;
