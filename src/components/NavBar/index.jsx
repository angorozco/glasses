import React from 'react';
import './navbar.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/717/717970.png" alt="" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar