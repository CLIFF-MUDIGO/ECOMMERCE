const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://clive_13:clivemudigo@cluster0.1iagxx4.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.listen(5000, () => {
  console.log("Backend Server is running on port 5000");
});
