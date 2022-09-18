import React from 'react';

import {useSelector, useDispatch} from 'react-redux'; //cart function  //addtocart_action
import { LogoutUser } from '../actions/userActions'; //logout //11:18



export default function Navbar() {
  const cartstate = useSelector(state=>state.cartReducer) //cart object
  const userstate = useSelector(state=>state.loginUserReducer)
  const {currentUser} = userstate;
  const dispatch = useDispatch() //logoutUSer
   

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg shadow-lg p3 mb-5 navbar-dark bg-dark rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Online Pizza Aplication</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

              {currentUser ? 
                (
                  <div className='dropdown mt-2'>
                  <a style={{color:'white'}} className="dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currentUser.name}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a style={{color:'black'}} className="dropdown-item" href="/orders">orders</a>
                    <a style={{color:'black'}} className="dropdown-item" href="#" onClick={()=>{dispatch(LogoutUser())}}>
                      <li>Logout</li>
                    </a>
                  </div>
                </div>
                ) : 
                
                (<li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">Login</a>
                </li>)}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      










    </div>
  );
} 
