import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap'
import { BrowserRouter , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';  
import Loginscreen from './screens/Loginscreen';
import RegisterScreen from './screens/Registerscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      

      <BrowserRouter>
          <Route exact path="/" component={Homescreen}></Route>
          <Route exact path="/cart" component={Cartscreen}></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route exact path='/login' component={Loginscreen}></Route>
          <Route exact path='/orders' component={Ordersscreen}></Route>
          <Route path='/admin' component={Adminscreen}/>
          
          

        </BrowserRouter>

    </div>
  );
}

export default App;