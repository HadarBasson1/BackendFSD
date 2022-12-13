const mongoose = require("mongoose");


const OrdersSchema = new mongoose.Schema({

    Orders: [
      {
        FirstName: String,
        LastName: String,
        PhonNunber:String,
        TotalPrice: Number,
      },
    ],
  });
  

const Orders = mongoose.model("Orders", OrdersSchema);
module.exports = {Orders};