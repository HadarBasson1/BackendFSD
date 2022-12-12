const express = require('express')
const app = express()
const port = 5000
const seed = require("./models/seed");
const mongoose = require("mongoose");
const {Dishes} = require("./models/dish");
const cors = require("cors");
app.use(cors());

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

app.get("/api", (req, res) => {
  res.json({"users":["hadar","noam"]})
})
app.get("/alldishes", async (req, res) => {
  // const dishes = await
   Dishes.find({}).then(
    items => res.json(items)
  ).catch(err=>consol.log(err));
  //res.json({"alldishes":dishes});
});






seed.seedDB();