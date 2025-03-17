import React, { useState } from 'react'
import '../Navbar/Navbar.scss'
import { Link } from 'react-router-dom';

function Navbar() {

  const [open,setOpen] = useState(false);

  const [user, setUser] = useState(false);

  return (
    <nav>
        <div className="left">
          <a href='/' className='logo'>
            <img src="/logo.png" alt="" />
            <span>UrEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/agents">Agents</a>
        </div>
            
        <div className="right">
        
          <div className="uinfo">
                <Link to="/profile">
                <div className="user-info">
                  <span className='username'>Rinchu</span>
                  <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="" 
                  />
                  <div className="notification">3</div>
                </div>
                
                </Link>
          </div>

          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={()=> setOpen(!open)}/>
          </div>

          <div className={open ? "menu active" : "menu"}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
          <a href="/agents">Agents</a>
          <a href="/contacts">Sign in</a>
          <a href="/agents">Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
