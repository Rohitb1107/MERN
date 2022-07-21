const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("Something went wrong:", err);
  });
