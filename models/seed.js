const mongoose = require("mongoose");
const {Dishes} = require("./dish");
const {Cart} = require("./cart");
const {Orders} = require("./order");

// ID
// Name:
// URL:
// Price:
// Description:
// Weight:

const seedDishes = [
  {
    ID: "d1",
    Name: "Beef Burger",
    Price: 72,
    Description:
      "High quality beef medium to well with cheese on a multigrain bun.",
    Weight: "300",

    URL:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
  },

  {
    ID: "d2",
    Name: "Napolitan Pizza",
    Price: 65,
    Description:
      "Neapolitan pizza (Italian: pizza napoletana), also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
    Weight: "400",

    URL:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  },
  {
    ID: "d3",
    Name: "Nigiri Sushi",
    Price: 69,
    Description:
      "Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top.",
    Weight: "200",
    URL:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    ID: "d4",
    Name: "Salad",
    Price: 54,
    Description:
      "a salad of romaine lettuce tossed with an olive oil dressing, a coddled or raw egg, garlic, and grated cheese and topped with croutons and sometimes anchovies.",
    Weight: "350",
    URL:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    ID: "d5",
    Name: "Steak",
    Price: 110,
    Description: "SERVED WITH CHIPS OR POTATO AND ONION RINGS.",
    Weight: "500",
    URL:
      "https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

const seedCart = [
  {
    Products: [],
  },
];

const seedOrders = [
  {
    Orders: [],
  },
];


const seedDB = async () => {
  await Dishes.deleteMany({});
  await Dishes.insertMany(seedDishes);
  await Cart.deleteMany({});
  await Cart.insertMany(seedCart);
  await Orders.deleteMany({});
  await Orders.insertMany(seedOrders);
   console.log("Seed file uploaded successfully");
};

exports.seedDB = seedDB;
