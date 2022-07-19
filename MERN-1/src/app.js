const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
