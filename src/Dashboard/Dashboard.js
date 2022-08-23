import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-section'>
           <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
           <span class="navbar-toggler-icon"></span>
           DashBoard
           </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Dashboard Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addusers">Add user</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/makeadmin">make admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addpackage">addpackage</a>
        </li>
        </ul>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;