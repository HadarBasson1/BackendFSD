const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema({

    Products: [
      {
        Product_id: String,
        Name: String,
        Price:Number,
        URL: String,
        Quantities: Number,
      },
    ],
  });
  

const Cart = mongoose.model("Cart", CartSchema);
module.exports = {Cart};