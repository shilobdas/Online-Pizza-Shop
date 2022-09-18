import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter ,Route} from 'react-router-dom'
import Addpizza from './Addpizza';
import Orderlist from './Orderlist';
import Pizzalist from './Pizzalist';
import Userlist from './Userlist';
import Editpizza from './Editpizza';
import { addPizza } from "../actions/pizzaActions";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
        <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              <a href="/admin/userslist">Users List</a>
            </li>
            <li>
              <a href="/admin/pizzalist">Pizzas List</a>
            </li>
            <li>
              <a href="/admin/addnewpizza">Add New Pizza</a>
            </li>
            <li>
              <a href="/admin/orderlist">Order List</a>
            </li>
           
            <li>
              <a href="/admin/editpizza"></a>
            </li>
          </ul>
          
          
          <BrowserRouter>
                    <Route exact path="/admin" component={Userlist}></Route>
                    <Route path="/admin/userslist" component={Userlist}></Route>
                    <Route path="/admin/pizzalist" component={Pizzalist}></Route>
                    <Route path="/admin/orderlist" component={Orderlist}></Route>
                    <Route path="/admin/addnewpizza" component={Addpizza}></Route>
                    <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
                    
                </BrowserRouter>

        </div>
      </div>
      
      
       
    </div>
  );
}
