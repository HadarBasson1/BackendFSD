const express = require('express')
const app = express()
const port = 5000
const seed = require("./models/seed");
const mongoose = require("mongoose");
const {Dishes} = require("./models/dish");
const {Cart} = require("./models/cart");
const {Orders} = require("./models/order");
const cors = require("cors");
app.use(express.json());
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

app.get("/alldishes/:id", async (req, res) => {
  // const dishes = await
   Dishes.findById(req.params.id).then(
    items => res.json(items)
  ).catch(err=>consol.log(err));
  //res.json({"alldishes":dishes});
});

app.get("/cart", async (req, res) => {
  // const dishes = await
   Cart.find({}).then(
    items => res.json(items)
  ).catch(err=>consol.log(err));
  //res.json({"alldishes":dishes});
});

app.get("/orders", async (req, res) => {
   Orders.find({}).then(
    items => res.json(items)
  ).catch(err=>consol.log(err));
});

//updateUserData
app.post("/updateUserData", async (req, res) => {
  // var cart=await Cart.findOne({})
  
   var orders= await Orders.findOne({})
   var arr=orders.Orders
   const new_order = {
   FirstName: req.body.firstN,
   LastName:req.body.lastN,
   Address:req.body.address,
   TotalPrice:req.body.totalprice,
  }
  
  arr.push(new_order)
  await Orders.findOneAndUpdate({Orders:arr})
  await Cart.findOneAndUpdate({ Products: [] })
  res.json({ status: 200 });
});


app.post("/addToCart", async (req, res) => {
  var cart=await Cart.findOne({})
  var arr = cart.Products;
  var id_item = req.body.id;
  var name_item = req.body.name;
  var price_item = req.body.price;
  var imgUrl_item = req.body.imgUrl;
  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Product_id == id_item) {
      arr[i].Quantities++;
      await Cart.findOneAndUpdate({ Products: arr })
      return;
    }
  }
  arr.push({ Product_id: id_item,Name:name_item,
    Price:price_item ,URL:imgUrl_item, Quantities: 1 });
  await Cart.findOneAndUpdate({ Products: arr })
  res.json({ status: 200 });
});

app.get("/allcart", async (req, res) => {

  // const dishes = await
  var cart=await Cart.findOne({})
  var arr = cart.Products;
  res.send(arr.map((item)=>{
    return{
       name:item.Name,
      price:item.Price,
      imgUrl:item.URL,
      q:item.Quantities,
    }  
  }))
} 
)










seed.seedDB();