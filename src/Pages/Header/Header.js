import Hamburger from 'hamburger-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import CartContext from '../CartState/CartContent/CartContext';
import './Header.css';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const {cartItems, showHideCart} = useContext(CartContext);
    const {user, logout} = useAuth();
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <li><button onClick={logout} class="dropdown-item" type="button">log out</button></li>
        </div>:
        <Link className='user-login bg-success p-2 light text-decoration-none text-dark' to='/login'>Login</Link>
        }
      </ul>
      
      {/* <form className="d-flex search">
      
      {user?.email? 
        <div class="dropdown">
  <button class="dropdown-toggle bg-light" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={user?.photoURL} className='w-25 rounded-circle' alt="" />
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button onClick={logout} class="dropdown-item" type="button">log out</button></li>
  <li><button class="dropdown-item" type="button">{user?.displayName}</button></li>
  </ul>
</div>:<button type="button" class="btn btn-primary"><Link className='user-login light text-decoration-none text-light' to='/login'>Login</Link></button>

        }
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        <Link className='nav-link shopping-cart' to='/cart'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </Link>
      </form> */}
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;