const express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");

const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe") ("sk_test_51L72DFJnvTl7tKBADzkcfLmwxGS4LYmgbibVOuVKOYABSX8uAxoWyEIgvV2sWzUqpRy1EIB61zHLIY87az5RCXWR00v3o5JxBD")
const Order = require('../client/models/orderModel')

router.post("/placeorder" , async(req ,res) =>{
    const {token , subtotal , currentUser , cartItems } = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        }) 

        const payment = await stripe.charges.create({
            amount : subtotal*100,
            currency :'bdt' ,
            customer : customer.id,
            receipt_email : token.email
        } ,{
            idempotencyKey : uuidv4()
        })
        if(payment)
        {
           const neworder = new Order({
               name : currentUser.name,
               email :currentUser.email,
               userid :currentUser._id,
               orderItems :cartItems ,
               orderAmount :subtotal,
               shippingAddress : {
                   street : token.card.address_line1,
                   city : token.card.address_city,
                   country : token.card.address_country,
                   pincode : token.card.address_zip
               },
               transactionId : payment.source.id
           })
           
           neworder.save()
           
            res.send('Order placed successfully ')
        }
     else{
         res.send('payment failed')
     }
    } catch (error) {
        return res.status(400).json({massage: 'something went wrong'})
        
    }

});
router.post("/getuserorders" , async (req,res)=>{
    const{userid} = req.body
    try {
        const orders = await Order.find({userid : userid}).sort({_id : -1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json ({massage: 'something went wrong'})
        
    }
})

router.get("/getallorders", async(req, res) => {

    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error});
    }

});

router.post("/deliverorder", async(req, res) => {

    const orderid = req.body.orderid
    try {
        const order = await Order.findOne({_id : orderid})
        order.isDelivered = true
        await order.save()
        res.send('Order Delivered Successfully')
    } catch (error) {

        return res.status(400).json({ message: error});
        
    }
  
});
module.exports= router