const mongoose  = require("mongoose");

var mongoURL = 'mongodb+srv://admin:admin1234@cluster0.in5qj.mongodb.net/mern-pizza'


mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection has Been Successfully done! 🔥');
})

db.on('error' , ()=>{
    console.log('Oops!! 404! Mongo DB Connection has Been Failed! :(');
})

module.exports = mongoose