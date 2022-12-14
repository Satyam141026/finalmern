import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const auth=localStorage.getItem('data')
  const navigate=useNavigate()
  function logout(){
   
  localStorage.clear()
  navigate('/signup')
  }
  return (
    <div className='header d-flex justify-content-center '>
        {auth ? <ul className='nav justify-content-center nav' >
            <li> <Link className='link' to="/">Product</Link></li>
            <li> <Link className='link' to="/addproducts">Add Products</Link></li>
        
            <li> <Link className='link' to="/show">UserDetail</Link></li>
     
         <li><Link onClick={()=>{logout()}} className='link' to="/signup">Logout</Link></li>
         </ul>   
          :
          <>
          <ul className="nav justify-content-center nav">
              <li className="nav-item">
              <li><Link className='link' to="/signup">Signup</Link></li>
              </li>
              <li className="nav-item">
              <li> <Link className='link' to="/login">login</Link></li>
              </li>
          </ul>
        
          </>
            }
          
 
    </div>
  )
}

export default Header;