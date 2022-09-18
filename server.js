const express = require("express");
const req = require("express/lib/request");

const Pizza = require('./client/models/pizzaModel');
const app = express();
const db = require("./db")

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute =require('./routes/ordersRoute')

app.use(express.json());

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' ,ordersRoute)
app.get("/", (req , res) => {
    res.send("Server is working! :) 🔥 " + port);
});


const port = process.env.PORT || 8000; 

app.listen(port, () => `Server running on port :( )`);