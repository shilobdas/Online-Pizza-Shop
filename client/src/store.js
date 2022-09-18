import  {combineReducers} from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzasReducer , addPizzaReducer , getPizzaByIdReducer , editPizzaReducer } from './reducers/pizzaReducers' //pizzafunction path
import { cartReducer } from './reducers/cartReducer' //cartfunction path
import { loginUserReducer, registerUserReducer ,getAllUsersReducer} from './reducers/userReducer' //register path
import { placeOrderReducer , getUserOrdersReducer ,getAllOrdersReducer} from './reducers/orderReducer'






const finalReducer = combineReducers({  
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,          //cartfunction 
    registerUserReducer : registerUserReducer,       //register function
    loginUserReducer : loginUserReducer,         //nullu:)
    placeOrderReducer : placeOrderReducer,
    addPizzaReducer : addPizzaReducer,           //addpizza
    getPizzaByIdReducer : getPizzaByIdReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    editPizzaReducer : editPizzaReducer,
    getAllUsersReducer :getAllUsersReducer,
    getAllOrdersReducer :getAllOrdersReducer
    
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] //cartfunction stay
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null //loginfunction stay

const initialState = {    //cartfunction stay     
    cartReducer : {
        cartItems: cartItems  //cartItems reducer
    },
    loginUserReducer : {
        currentUser : currentUser
    }                               
}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store 