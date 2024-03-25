import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
//import Badge from 'react-bootstrap/badge';
import Modal from '../modal';
import Cart from '../screens/Cart';
import { useCart } from './Contextreducer';

export default function Navbar () {
  const[cartView,setCartView]=useState(false);
  const navigate=useNavigate();
  let data=useCart();
  const handleLogout=()=>{
localStorage.removeItem("authtoken");
navigate("/login")
  }
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 fst-italic" to="/">Foodyy:)</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item active">
        <Link className="nav-link active fs-5" to="/">Home </Link>
      </li>
      
      {(localStorage.getItem("authtoken"))?
      <li className="nav-item active">
      <Link className="nav-link active fs-5" to="/myorder" >My orders </Link>
    </li>:""}
      
    </ul>
    
    {(!localStorage.getItem("authtoken"))?
    <div className='d-flex'>
     <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
      
     <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link> 
     </div>:<div>
     <Link className="btn bg-white text-success mx-2" to='/cart'>My Cart {" "}/*<Badge pill-bg='danger'>{data.length} </Badge>*/
      </Link>
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
      <button className="btn bg-white text-success mx-2" onClick={handleLogout}>Log out
      </button></div>}

</div>
</nav>
    </div>
  )
}
