import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
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
          <Link className="nav-link" to="#">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="packages">Package</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Destination</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">About Us</Link>
        </li>
      </ul>
      <form class="d-flex search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;