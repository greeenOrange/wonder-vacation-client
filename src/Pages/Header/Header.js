
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
            <img src={'https://i.ibb.co/yp4GYD2/wonder-vacation-logo.png'} alt="" />
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
            <li>
              <NavLink
                to="/dashboard"
                className=""
                onClick={click ? handleClick : null}
              >
                Dashboard
              </NavLink>
            </li>
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
            
          </ul>
            </div>
            

          <div className="user-menu">
          <ul id="menu">

      <li>
      <p>Hi {user?.displayName}</p>
        <ul>
       {
        user?.email? <li>
        <Link
            to="/dashboard"
            className="user-link active"
              >
                My Account
              </Link>
              </li>: <li></li>

       }
        <li>
        <Link
        to='/login'
        className='user-link active'>Login</Link>
        </li>
        <li>
            <Link
            to="/contact"
            className="user-link active"
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