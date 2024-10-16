import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container"> 
        <NavLink exact to="/">
          <img src="/logo.png" alt="Wendy's Studio Logo" className="logo" />
        </NavLink>
        <NavLink exact to="/">
          <h1>Wendy's Studio</h1>
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
