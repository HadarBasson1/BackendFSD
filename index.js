const express = require('express')
const app = express()
const port = 5000
const seed = require("./models/seed");
const mongoose = require("mongoose");

app.get("/api", (req, res) => {
  res.json({"users":["hadar","noam"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose
  .connect("mongodb://localhost:27017/Dishes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION TO DISHES !!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });
seed.seedDB();