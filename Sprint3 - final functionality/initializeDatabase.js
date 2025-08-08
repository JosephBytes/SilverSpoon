/*
    How to run this script:
    put initializeDatabase.js file at the project level
    execute 'node initializeDatabase.js' in terminal
*/

const mongoose = require('mongoose');
const Item = require('./models/item'); // import the item Item
const Order = require('./models/order'); // import the item Item
const User = require('./models/user'); // import the item model

const mongoUri = 'mongodb+srv://admin:admin@cluster0.k0jhn.mongodb.net/SilverSpoon?retryWrites=true&w=majority&appName=Cluster0'

const itemSet = [
    {
        name: "Chocolate donuts",
        price: 10.99,
        description: "Chocolate iced donut, with sprinkles.",
        image: "/images/uploads/donuts.jpg"
    }, 
    {
        name: "Chocolate donuts",
        price: 10.99,
        description: "Chocolate iced donut, with sprinkles.",
        image: "/images/uploads/donuts.jpg"
    }, 
    {
        name: "Chocolate donuts",
        price: 10.99,
        description: "Chocolate iced donut, with sprinkles.",
        image: "/images/uploads/donuts.jpg"
    }, 
    {
        name: "Chocolate donuts",
        price: 10.99,
        description: "Chocolate iced donut, with sprinkles.",
        image: "/images/uploads/donuts.jpg"
    }, 
    {
        name: "Chocolate donuts",
        price: 10.99,
        description: "Chocolate iced donut, with sprinkles.",
        image: "/images/uploads/donuts.jpg"
    }, 

];



mongoose.connect(mongoUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(async () => {
    const items = await Item.find();
    const itemsLength = items.length;

    await Item.insertMany(itemSet);





    console.log('Connected to the database!' + itemsLength);
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });



  


