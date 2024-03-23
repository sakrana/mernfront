
import './App.css';
import Home from './screens/Home.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/Contextreducer.js';
import Cart from './screens/Cart.js';
import MyOrder from './screens/MyOrder.js';


function App() {
  return (
    <>
    <CartProvider>
    <Router>
      <div>
      <Routes>
      <Route exact path="/cart" element={<Cart/>}/>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/createuser" element={<Signup/>}/>
<Route exact path="/myorder" element={<MyOrder/>}/>
      </Routes>
      </div>
    </Router>
    </CartProvider>
    
    
    </>
   
   
  );
}

export default App;
