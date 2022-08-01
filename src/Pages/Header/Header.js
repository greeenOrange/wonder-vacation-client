
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import './Header.css';
const Header = () => {
    const [click, setClick] = useState(false);
    const {user, logout} = useAuth()
    const handleClick = () =>{
      setClick(!click)
    }
    const Close = () =>{
      setClick(false);
    }
    
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Arrowfashion</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger toggled={isOpen} rounded direction="left" toggle={setOpen} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/explore">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/packages">Package</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="destination">Destination</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About Us</Link>
        </li>
        {user.email ?<div>
        <p>{user?.email}</p>
        <li><button onClick={logout} className="dropdown-item" type="button">log out</button></li>
        </div>:
        <Link className='user-login bg-success p-2 light text-decoration-none text-dark' to='/login'>Login</Link>
        }
      </ul>
      
    </div>
  </div>
</nav> */}
{/* <Hamburger direction="right" color="#ff4838" toggled={isOpen} toggle={setOpen} /> */}
<div className={click ? "main-container" : ""}  onClick={()=>Close()} />
<nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="container">
          <NavLink to="/" className="nav-logo">
            WonderVacation
            <i className="fa fa-code"></i>
          </NavLink>
          <div className="menu-bar">
            <div className="main-menu">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/explore"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                Packages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutus"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
           { user &&
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                Dashboard
              </NavLink>
            </li>
           }
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links active"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
            </div>
            
          </div>
          <div className="user-menu">
          <ul id="menu">

      <li>
      <p>Hi {user?.displayName}</p>
        <ul>
       {user.email?  <li>
        <Link
            to="/payment"
            className="nav-links active"
              >
                My Account
              </Link>
              </li>: <li></li>
              }
        <li>
        <Link
        to='/login'
        className='nav-links'>Login</Link>
        </li>
        <li>
            <Link
            to="/contact"
            className="nav-links active"
              >
                Contact Us
              </Link></li>
              <li><button onClick={logout} className="dropdown-item bg-danger p-3 text-light h5" type="button">log out</button></li>
        </ul>
      </li>
    </ul>
    
            
            </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

        </div>
      </nav>
        </>
    );
};

export default Header;