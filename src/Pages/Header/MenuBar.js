import React from 'react';
import './MenuBar.css';
const MenuBar = () => {
    return (
        <nav>
            <div className="logo-img">
                <img src="" alt="" />
            </div>
            <ul className='menu-bar-menu'>
                <li><a href="">Home</a></li>
                <li><a href="">Packages</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Gellary</a></li>
            </ul>
        </nav>
    );
};

export default MenuBar;