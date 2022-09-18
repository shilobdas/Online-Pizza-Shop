import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import Stripecheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error"; 
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Cheakout({ subtotal }) {

  const orderstate = useSelector((state)=> state.placeOrderReducer)
  const {loading ,error,success} = orderstate
  const dispatch = useDispatch()
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token , subtotal))
  }
  return (
    <div>

      {loading && (<Loading/>)}
      {error && (<Error error='Something Went Wrong '/>)}
      {success && (<Success success='Your Order Placed Successfully '/> )}
      <Stripecheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51L72DFJnvTl7tKBA7wgJQB3MUO60SQ1HUkhRXe2Spzp0Pzjfoj4ueQUN7z7I1XG24SxblacLswGeUzem48RuplDy00zZGXLkSk"
        currency="BDT"
      >
        <button className="btn">pay now</button>
      </Stripecheckout>
    </div>
  );
}
