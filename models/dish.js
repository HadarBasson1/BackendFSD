const mongoose = require("mongoose");


// Dish Modal Schema
const dishSchema = new mongoose.Schema({
  ID:{
    type: String,
  },
  Name: {
    type: String,
  },
  URL: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Description: {
    type: String,
  },

  Weight: {
    type: Number,
  }
});


const Dishes = mongoose.model("Dishes", dishSchema);
module.exports = {Dishes};