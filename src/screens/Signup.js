import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Signup() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
   
        e.preventDefault();
        const response= await fetch("https://mernback-1-zoea.onrender.com/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    
        });
        const json=await response.json()
        console.log(json);
        if(!json.success)
        {
            alert("enter valid credentials")
        }
    
    
    
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
    <div>
    <Navbar />
    </div>

    <div className='container'>
   <form onSubmit={handleSubmit}>
   <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control"  placeholder="Enter name" name="name" value={credentials.name}onChange={onChange}/>
    
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email"name="email" value={credentials.email} onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password}onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputaddress">Address</label>
    <input type="text" className="form-control" id="exampleInputaddress" placeholder="address" name="geolocation" value={credentials.geolocation}onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">already a user</Link>
</form>  
</div> 
    </div>
  )
}
