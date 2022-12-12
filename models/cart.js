const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema({

    Products: [
      {
        Product_id: String,
        Quantities: Number,
      },
    ],
  
    FirstName: {
      type: String,
      // required: true
    },
    LastName: {
      type: String,
      // required: true
    },

    PhonNunber: {
        type: String,
        // required: true
      },
  });
  

const Cart = mongoose.model("Cart", CartSchema);
module.exports = {Cart};