
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin/useAdmin';
import useAuth from '../../Hook/useAuth';

import './Header.css';
const Header = () => {
    const [click, setClick] = useState(false);
    const {user, logout} = useAuth();
    const [admin] = useAdmin(user);
    const handleClick = () =>{
      setClick(!click)
    }
    const Close = () =>{
      setClick(false);
    }
    
    return (
        <> 
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="container">
          <NavLink to="/" className="nav-logo">
            WonderVacation
            <i className="fa fa-code"></i>
          </NavLink>
   
            <div className="main-menu">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                to="/"
                className=""
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className=""
                onClick={click ? handleClick : null}
              >
                Packages
              </NavLink>
            </li>
        
            {admin && <li>
              <NavLink
                to="/dashboard"
                className=""
                onClick={click ? handleClick : null}
              >
                Dashboard
              </NavLink>
            </li>}
            <li>
              <NavLink
                to="aboutus"
                className=""
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className=""
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="active"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li class="nav-item dropdown ms-2">
            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Hi {user?.displayName}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link class="dropdown-item active py-3 fs-5" to="/dashboard">My Account</Link></li>
              <li><Link class="dropdown-item py-3 fs-5" to='/login'>login</Link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><button onClick={logout} className="dropdown-item bg-danger text-light py-3 fs-5" type="button">log out</button></li>
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