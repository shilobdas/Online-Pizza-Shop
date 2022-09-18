export const addToCart=(pizza , quantity , varient)=>(dispatch , getState)=> {      //cartfunction getState



    var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        varient : varient,
        quantity : Number(quantity) ,
        prices : pizza.prices ,
        price : pizza.prices[0][varient]*quantity
    }

    //limitation for pizza
    if(cartItem.quantity>11) {
        alert('Sorry! you cant add more than 10 pizzas')
    }else {
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART', payload :  pizza})
        }else {
            dispatch({type:'ADD_TO_CART', payload :  cartItem})
        }
        
    }

    const cartItems = getState().cartReducer.cartItems //cartfunction update
    localStorage.setItem('cartItems' , JSON.stringify(cartItems)) //cartfunction update



}

export const deleteFromCart=(pizza)=>(dispatch , getState)=> {

    dispatch({type: 'DELETE_FROM_CART' , payload:pizza})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))

}